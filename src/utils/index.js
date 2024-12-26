import axios from "axios";

export const API = axios.create({
  baseURL: "https://solar-backend-delta.vercel.app/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});
