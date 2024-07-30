import axios from "axios";
const axiosCommon = axios.create({
  baseURL: process.env.PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosCommon;
