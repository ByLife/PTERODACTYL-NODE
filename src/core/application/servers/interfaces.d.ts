import { AxiosResponseHeaders, AxiosRequestConfig, AxiosResponse} from "axios"
import internal from "stream";
import { Config } from "../../../config/config"
import { Request } from "../../request"



// Server Listing Interface

export interface ServerList<T> extends AxiosResponse  {
  data: ServerListData;
  status: number;
  statusText: string;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig<T>;
  request?: any;
}

export interface ServerListData {
    object: string,
    data: Array<ServerListDataArray>,
}

export interface ServerListDataArray {
    object: string,
    attributes: ServerListAttribute, 
}

export interface ServerListAttribute {
    id: number,
    external_id: string | null,
    uuid: string,
    identifier: 'b23967c7',
    name: string,
    description: string,
    status: string | null,
    suspended: boolean,
    limits: Array<Object>,
    feature_limits: Array<Object>,
    user: number,
    node: number,
    allocation: number,
    nest: number,
    egg: number,
    container: Array<Object>,
    updated_at: string,
    created_at: string,
}

export interface CreateServer {
    name: string,
    user: number,
    egg: number,
    docker_image: string,
    startup: string,
    environment: CreateServerEnvironment,
    limits: CreateServerLimits,
    feature_limits: CreateServerFeatureLimits,
    allocation: CreateServerAllocation,
}

export interface CreateServerEnvironment {
    BUNGEE_VERSION: string,
    SERVER_JARFILE: string,
}

export interface CreateServerLimits {
    memory: number = 4096,
    swap: number = 0,
    disk: number = 25600,
    io: number = 500,
    cpu: number = 0,
} 

export interface CreateServerFeatureLimits {
    databases: number = 0,
    backups: number = 2,
}

export interface CreateServerAllocation {
    default: number = 0,
}