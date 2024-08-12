const API_URL = "http://localhost:3000/api";

const apiConfig = {
  allProfilesUrl: API_URL + "/profiles",
  individualProfileUrl: (id: string) => `${API_URL}/profiles/${id}`,
};

export default apiConfig;
