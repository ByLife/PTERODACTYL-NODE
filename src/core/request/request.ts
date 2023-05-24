import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from "axios";
import dotenv from "dotenv"

dotenv.config()


export const Request = (REQUESTTYPE: "post" | "get" | "patch" | "delete" | "put", PATH: string, CONFIG: AxiosRequestConfig, DATA?: AxiosRequestConfig): Promise<AxiosResponse> => {
    switch(REQUESTTYPE){
        case "post":
            return axios.post(process.env.PTERO_URI + PATH, DATA, CONFIG)
        case "get": 
            return axios.get(process.env.PTERO_URI + PATH, CONFIG)
        case "patch":
            return axios.patch(process.env.PTERO_URI + PATH, DATA, CONFIG)
        case "delete":
            return axios.delete(process.env.PTERO_URI + PATH, CONFIG)
        case "put":
            return axios.put(process.env.PTERO_URI + PATH, DATA, CONFIG)
    }
}

export const headers = {
    headers: {
        'Accept': 'Application/vnd.pterodactyl.v1+json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.PTERO_API_KEY}`,
        }
}