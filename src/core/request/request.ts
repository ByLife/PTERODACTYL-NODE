import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Config } from "../../config/config";

export const Request = (PATH: string, CONFIG: AxiosRequestConfig): Promise<AxiosResponse> => {
    return axios.get(Config.PTEROAPI.URL + PATH, CONFIG)
}