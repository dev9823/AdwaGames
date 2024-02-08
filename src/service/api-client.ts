import axios, {AxiosRequestConfig} from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}
const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: import.meta.env.VITE_REACT_APP_RAWG_API_KEY
        
    }
})


class APIClient<T>{
    endpoint: string;
    
    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
    }
}

export default APIClient;