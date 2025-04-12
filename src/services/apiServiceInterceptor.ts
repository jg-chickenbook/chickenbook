const BASE_URL = "https://chickenbook-node-server-iilz.onrender.com/api";

export const apiServiceInterceptor = async (endpoint: string, options?: RequestInit) => {
  try {
    // Přidání základní URL k endpointu
    const url = `${BASE_URL}/${endpoint}`;

    // Přidání globální logiky pro požadavky (např. hlavičky)
    const modifiedOptions: RequestInit = {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
      },
    };

    const response = await fetch(url, modifiedOptions);

    // Zpracování odpovědi (např. kontrola chyb)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    // Globální zpracování chyb
    console.error("Fetch error:", error);
    throw error;
  }
};