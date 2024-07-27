import axios from "axios";
const axiosCommon = axios.create({
  baseURL: process.env.PUBLIC_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosCommon;
