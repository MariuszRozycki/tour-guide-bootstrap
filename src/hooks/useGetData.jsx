import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async ({ queryKey }) => {
  const [endpoint, id] = queryKey;
  console.log("Endpoint:", endpoint); // Sprawdź, czy endpoint jest poprawny
  const url = id ? `${endpoint}/${id}` : endpoint;
  console.log("Finalny URL:", url); // Sprawdź URL
  try {
    const response = await axios.get(url);
    console.log("Odpowiedź z API:", response); // Debuguj odpowiedź z API
    return response.data;
  } catch (error) {
    console.error("Błąd pobierania danych:", error); // Debuguj błędy
    throw error;
  }
};

// Hook useGetData
const useGetData = (endpoint, id = null) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [endpoint, id], // Poprawny sposób przekazania queryKey w v5
    queryFn: fetchData, // Funkcja pobierania danych
    enabled: !!endpoint, // Włączenie tylko, gdy endpoint jest dostępny
    retry: 2, // Ile razy próbować ponownie w razie błędu
    refetchOnWindowFocus: false, // Wyłącz ponowne pobieranie przy powrocie do okna
  });

  return { data, isLoading, isError, error };
};

export default useGetData;
