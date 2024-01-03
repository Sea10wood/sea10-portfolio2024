import { MyContributes } from "@/pages/api/contributions/[userName]";

export const useContributions = () => {
  let cachedData: MyContributes | null = null;

  const getContributions = async (userName: string) => {
    try {
      if (cachedData) {
        return cachedData;
      }

      const response = await fetch(`../api/contributions/${userName}`);

      if (!response.ok) {
        throw new Error("Failed to fetch contributions");
      }

      const data: MyContributes = await response.json();
      cachedData = data;

      return data;
    } catch (error) {
      console.error("Error fetching contributions:", error);

      return { values: [], error: "Failed to fetch contributions" };
    }
  };

  return {
    getContributions,
  };
};
