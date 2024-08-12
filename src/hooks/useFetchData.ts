import { useState, useEffect } from "react";

type FetchReturnType<T> = {
  data: T | null
  loading: boolean
  error: string | null
};

/**
 * Custom hook for fetching data from a specified URL.
 * 
 * Example implementation:
 * - const { data: profiles, loading, error } = useFetchData<Profile[]>("profiles");
 * @template T - The type of data to be fetched.
 * @param {string} url - The endpoint used to fetch data, e.g. "profiles" for fetching all profiles
 * @returns {FetchReturnType<T>} - An object containing the fetched data, loading state, and error message.
 */
const useFetchData = <T>(endpoint: string): FetchReturnType<T> => {
  const url = `http://localhost:3000/api/${endpoint}`; // Loccalhost will be replaced with the actual URL
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