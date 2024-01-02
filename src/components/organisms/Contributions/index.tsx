import { Box, Grid } from "@mui/material";
import { useContributions } from "@/hooks/useContributes";
import { MyContributes } from "@/pages/api/contributions/[userName]";
import { useState, useEffect } from "react";

export const Contributions = () => {
  // 取得したコミット数の配列データを管理するステート
  const [myContributes, setMyContributes] = useState<MyContributes>();

  // カスタムフックを代入
  const { getContributions } = useContributions();

  // 描画時に一度、カスタムフックにユーザー名を渡しデータを取得、それをステートにセットする
  useEffect(() => {
    (async () => {
      const data = await getContributions("Sea10wood");
      setMyContributes(data);
    })();
  }, [getContributions]);

  /**
   * GitHubの草の色を決める関数
   * @param count APIで取得したコミット数
   * @returns opacityのCSS
   */
  const createOpacity = (count: number) => {
    let opacity;
    count === 0
      ? (opacity = "0")
      : 1 <= count && count <= 2
      ? (opacity = "0.2")
      : 3 <= count && count <= 6
      ? (opacity = "0.4")
      : 7 <= count && count <= 10
      ? (opacity = "0.6")
      : 11 <= count && count <= 13
      ? (opacity = "0.8")
      : 14 < count && (opacity = "1");

    return opacity;
  };

  return (
    <Box
      maxWidth="50vw"
      maxHeight="35vh"
      bgcolor="translation"
      p={{ xs: "18px", md: "24px" }}
      borderRadius={{ xs: "12px", md: "18px" }}
      mx="auto"
      overflow="scroll"
      position="absolute"
      top="20vw"
      zIndex={0}
    >
      <Grid
        container
        columns={{ xs: 27, sm: 27, md: 27 }}
        spacing={2}
        zIndex={0}
      >
        {myContributes &&
          myContributes.values.map((count: number, index: number) => (
            <Grid item key={index}>
              <Box
                width={{ xs: "2vw", md: "2.5vw" }}
                height={{ xs: "2vw", md: "2.5vw" }}
                bgcolor="#39D353"
                borderRadius="4px"
                style={{ opacity: parseFloat(createOpacity(count) || "") }}
                zIndex={0}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};
