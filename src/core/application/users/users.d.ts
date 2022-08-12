import { AxiosRequestConfig, AxiosResponse } from "axios"

// User List Interface [1]

export interface UsersList<T = any, D = any> extends AxiosResponse {
    data: UsersListData
}

export interface UsersListData {
    data: UsersListDataArray[];
}

export interface UsersListDataArray {
    object: string;
    attributes: UsersListAttributes;
}

export interface UsersListAttributes {
    id: number;
    external_id: string;
    uuid: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    language: string;
    root_admin: boolean;
    "2fa": boolean;
    created_at: Date;
    updated_at: Date;
}

// User Create Interface [2]

export interface UserCreate extends AxiosRequestConfig {
    email: string,
    username: string,
    first_name: string,
    last_name: string,
}