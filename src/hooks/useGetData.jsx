import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async ({ queryKey }) => {
  const [endpoint, id] = queryKey;
  const url = id ? `${endpoint}/${id}` : endpoint;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Błąd pobierania danych:", error);
    throw error;
  }
};

const useGetData = (endpoint, id = null) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [endpoint, id],
    queryFn: fetchData,
    enabled: !!endpoint,
    retry: 2,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isError, error };
};

export default useGetData;
