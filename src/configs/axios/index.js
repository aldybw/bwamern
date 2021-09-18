import axios from "axios";

import errorResponHandler from "./errorResponHandler";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}/api/v1/member`,
});

instance.interceptors.response.use((response) => response, errorResponHandler);

export default instance;
