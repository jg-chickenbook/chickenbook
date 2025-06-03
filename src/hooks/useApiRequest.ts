import { useState, useEffect } from "react";
import { apiServiceInterceptor } from "../services/apiServiceInterceptor";

type ApiRequestReturnType<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

/**
 * Custom hook for making API requests using the interceptor.
 *
 * @template T - The type of data to be fetched.
 * @param {string} endpoint - The endpoint used to make the request (e.g., "profiles", "users").
 * @param {RequestInit} [options] - Additional options for the fetch request (e.g., method, body).
 * @returns {ApiRequestReturnType<T>} - An object containing the response data, loading state, and error message.
 */
const useApiRequest = <T>(
  endpoint: string,
  options?: RequestInit
): ApiRequestReturnType<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const jsonData = await apiServiceInterceptor(endpoint, options);
        setData(jsonData);
      } catch (e) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, options]);

  return { data, loading, error };
};

export default useApiRequest;