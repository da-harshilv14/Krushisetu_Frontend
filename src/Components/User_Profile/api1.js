import axios from "axios";

const api = axios.create({

  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
  withCredentials: true,
});

export default api;
