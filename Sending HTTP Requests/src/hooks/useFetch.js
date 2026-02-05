//Function start with use treated as Hooks and inforce certain rule to it
import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const userPlaces = await fetchFn();
        setFetchedData(userPlaces);
        setIsFetching(false);
      } catch (error) {
        setIsFetching(false);
        setError({
          message: error.message || "Faild to fetch Data.",
        });
      }
    }
    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    setIsFetching,
    fetchedData,
    setFetchedData,
    error,
  };
}
