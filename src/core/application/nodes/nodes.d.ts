import { AxiosResponseHeaders, AxiosRequestConfig, AxiosResponse} from "axios"

// Nodes Listing Interface [1]

export interface NodesList<T = any> extends AxiosResponse  {
  data: NodesListData;
  status: number;
  statusText: string;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig<T>;
  request?: any;
}

export interface NodesListData {
  object: string,
  data: Array<NodesListDataArray>,
  meta: NodeListMeta 
}

export interface NodesListDataArray {
  object: string,
  attributes: NodesListDataAttributes
}

export interface NodesListDataAttributes {
    id: number;
    uuid: string;
    public: boolean;
    name: string;
    description: string;
    location_id: number;
    fqdn: string;
    scheme: string;
    behind_proxy: boolean;
    maintenance_mode: boolean;
    memory: number;
    memory_overallocate: number;
    disk: number;
    disk_overallocate: number;
    upload_size: number;
    daemon_listen: number;
    daemon_sftp: number;
    daemon_base: string;
    created_at: Date;
    updated_at: Date;
}

export interface NodeListMetaPagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  links: Object;
}

export interface NodeListMeta {
  pagination: NodeListMetaPagination
}

// Node Details Interface [2]

export interface NodeDetails<T = any> extends AxiosResponse  {
  data: NodeDetailsData;
  status: number;
  statusText: string;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig<T>;
  request?: any;
}

export interface NodeDetailsData {
  id: number;
  uuid: string;
  public: boolean;
  name: string;
  description: string;
  location_id: number;
  fqdn: string;
  scheme: string;
  behind_proxy: boolean;
  maintenance_mode: boolean;
  memory: number;
  memory_overallocate: number;
  disk: number;
  disk_overallocate: number;
  upload_size: number;
  daemon_listen: number;
  daemon_sftp: number;
  daemon_base: string;
  created_at: Date;
  updated_at: Date;
}

// Node Configuration Interface [3]

export interface Ssl {
  enabled: boolean;
  cert: string;
  key: string;
}

export interface Api {
  host: string;
  port: number;
  ssl: Ssl;
  upload_limit: number;
}

export interface Sftp {
  bind_port: number;
}

export interface System {
  data: string;
  sftp: Sftp;
}

export interface RootObject {
  debug: boolean;
  uuid: string;
  token_id: string;
  token: string;
  api: Api;
  system: System;
  remote: string;
}