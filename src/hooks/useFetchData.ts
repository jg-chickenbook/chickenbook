import { useState, useEffect } from "react";

type FetchReturnType<T> = {
  data: T | null
  loading: boolean
  error: string | null
};

/**
 * Custom hook for fetching data from a specified URL.
 *
 * @template T - The type of data to be fetched.
 * @param {string} url - The URL to fetch the data from.
 * @returns {FetchReturnType<T>} - An object containing the fetched data, loading state, and error message.
 */
const useFetchData = <T>(url: string): FetchReturnType<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (e) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;