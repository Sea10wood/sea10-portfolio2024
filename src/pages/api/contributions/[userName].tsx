import { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "@octokit/core";
import dayjs from "dayjs";

export type Contributions = {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        weeks: [
          {
            contributionDays: [
              {
                date: string;
                contributionCount: number;
              }
            ];
          }
        ];
      };
    };
  };
};

export type MyContributes = {
  values: number[];
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { userName } = request.query;

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const now = await dayjs().format("YYYY-MM-DDThh:mm:ss");

  const sixMonthBefore = await dayjs()
    .subtract(8, "month")
    .format("YYYY-MM-DDThh:mm:ss");

  /**
   * クエリ部分
   * @param userName ユーザー名
   * @param now 現在の年月日
   * @param sixMonthBefore 6ヶ月前の年月日
   */
  const query = `
    query contributions ($userName:String!, $now:DateTime!, $sixMonthBefore:DateTime!) {
      user(login: $userName) {
        contributionsCollection(to: $now, from: $sixMonthBefore) {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  // クエリとそれに必要な引数を渡し、octokitを使いデータを取得する
  const contributions = await octokit.graphql<Contributions>(query, {
    userName,
    now,
    sixMonthBefore,
  });

  // レスポンスからコミット数だけを抜き出し格納するための配列を定義
  let contributionCount: number[] = [];

  contributions.user.contributionsCollection.contributionCalendar.weeks.forEach(
    (week: { contributionDays: any[] }) => {
      week.contributionDays.forEach(
        (contributionDay: { contributionCount: number }) => {
          contributionCount.push(contributionDay.contributionCount);
        }
      );
    }
  );

  return response.status(200).json({
    values: contributionCount,
  });
}
