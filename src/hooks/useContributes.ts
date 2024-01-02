import { MyContributes } from "@/pages/api/contributions/[userName]";

export const useContributions = () => {
  
  const cache: { [key: string]: MyContributes } = {};

  const getContributions = async (userName: string) => {
    try {
     
      if (cache[userName]) {
        return cache[userName];
      }

      const response = await fetch(`../api/contributions/${userName}`);

      if (!response.ok) {
       
        throw new Error("Failed to fetch contributions");
      }

      const data: MyContributes = await response.json();

   
      cache[userName] = data;

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
