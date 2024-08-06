import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/api',
//   baseURL: process.env.BASE_URL,
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export default axiosInstance;
