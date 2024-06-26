import axios from "axios";
import queryString from "query-string";
// import { getToken } from 'src/util/Utils'

const axiosClient = axios.create({
  headers: {
    "content-type": "application/json",
    // Authorization: `Bearer ${getToken()}`,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

// eslint-disable-next-line no-undef
axiosClient.defaults.baseURL = "http://localhost:3003/api/v1";

// axiosClient.interceptors.request.use(async (config) => {
// 	const accessToken = getToken();
// 	if (accessToken) {
// 		config.headers.common.Authorization = `Bearer ${JSON.parse(accessToken)}`;
// 	}
// 	return config;
// });

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
