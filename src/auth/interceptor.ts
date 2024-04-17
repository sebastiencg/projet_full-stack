import axios from 'axios';
import { GlobalConstants } from "@/Common/global-constants";
import router from "@/router";

const axiosHttp = axios.create({
    baseURL: GlobalConstants.baseUrl,
});

axiosHttp.interceptors.request.use(
    (config : any) => {
        const token = GlobalConstants.token;
        return {
            ...config,
            headers: {
                ...(token !== null && { Authorization: `Bearer ${token}` }),
                ...config.headers,
            },
        };
    },
    (error :string) => {
        return Promise.reject(error);
    }
);

axiosHttp.interceptors.response.use(
    (response :any) => {
        return response;
    },
    (error :any) => {
        if (error.response) {
            const status = error.response.status;
            if (status === 401) {
                router.push("/login");
            } else if (status >= 400 && status < 500) {
                console.error("Erreur client:", error.response.data);
            } else {
                console.error("Erreur:", error.message);
            }
        } else {
            console.error("Erreur:", error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosHttp;
