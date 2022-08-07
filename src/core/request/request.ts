import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from "axios";
import { Config } from "../../config/config";

export const Request = (REQUESTTYPE: "post" | "get" | "patch" | "delete" | "put", PATH: string, CONFIG: AxiosRequestConfig): Promise<AxiosResponse> => {
    switch(REQUESTTYPE){
        case "post":
            return axios.post(Config.PTEROAPI.URL + PATH, CONFIG)
        case "get": 
            return axios.get(Config.PTEROAPI.URL + PATH, CONFIG)
        case "patch":
            return axios.patch(Config.PTEROAPI.URL + PATH, CONFIG)
        case "delete":
            return axios.delete(Config.PTEROAPI.URL + PATH, CONFIG)
        case "put":
            return axios.put(Config.PTEROAPI.URL + PATH, CONFIG)
    }
}