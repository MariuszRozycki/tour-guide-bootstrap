import { useQuery } from "@tanstack/react-query";

export const useGetData = (id = null) => {
  const fetchData = async () => {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const json = await response.json();
    return json.data; // Zakładam, że dane są w polu `data`
  };

  // Użyj useQuery, aby zarządzać stanami automatycznie
  const { data, isLoading, isError, error } = useQuery(["getData", id], fetchData, {
    staleTime: 1000 * 60 * 5, // Cache przez 5 minut
  });

  return { data, isLoading, isError, error };
};
