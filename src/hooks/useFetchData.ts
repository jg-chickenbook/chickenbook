import { useState, useEffect } from "react";

type FetchReturnType<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

/**
 * Custom hook for fetching data from a specified endpoint.
 * 
 * @template T - The type of data to be fetched.
 * @param {string} endpoint - The endpoint used to fetch data (e.g., "profiles", "users")
 * @returns {FetchReturnType<T>} - An object containing the fetched data, loading state, and error message.
 */
const useFetchData = <T>(endpoint: string): FetchReturnType<T> => {
  const url = `http://localhost:3000/api/${endpoint}`;
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

// Predefined endpoints
export const ENDPOINTS = {
  PROFILES: "profiles",
  USERS: "users",
};

// Helper hooks for specific data types
export const useProfiles = <T>() => useFetchData<T>(ENDPOINTS.PROFILES);
export const useUsers = <T>() => useFetchData<T>(ENDPOINTS.USERS);

export default useFetchData;