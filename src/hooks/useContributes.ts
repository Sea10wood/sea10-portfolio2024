import { MyContributes } from "@/pages/api/contributions/[userName]";

export const useContributions = () => {
  // キャッシュ用の変数
  const cache: { [key: string]: MyContributes } = {};

  const getContributions = async (userName: string) => {
    try {
      // キャッシュにデータがあればそれを返す
      if (cache[userName]) {
        return cache[userName];
      }

      const response = await fetch(`../api/contributions/${userName}`);

      if (!response.ok) {
        // エラーレスポンスの場合の処理
        throw new Error("Failed to fetch contributions");
      }

      const data: MyContributes = await response.json();

      // データをキャッシュに保存
      cache[userName] = data;

      return data;
    } catch (error) {
      console.error("Error fetching contributions:", error);
      // エラーが発生した場合、適切なエラー処理を行うか、エラーメッセージを返すなどします。
      // 以下はエラーメッセージを返す例ですが、実際のプロジェクトに合わせて修正してください。
      return { values: [], error: "Failed to fetch contributions" };
    }
  };

  return {
    getContributions,
  };
};
