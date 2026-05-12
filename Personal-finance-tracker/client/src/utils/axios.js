import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api", // Update if using different port
});

export default API;