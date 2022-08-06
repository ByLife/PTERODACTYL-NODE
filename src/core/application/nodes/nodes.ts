import { AxiosResponseHeaders, AxiosRequestConfig, AxiosResponse} from "axios"

// Nodes Listing Interface [1]

export interface NodesList<T> extends AxiosResponse  {
  data: null;
  status: number;
  statusText: string;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig<T>;
  request?: any;
}

export interface NodesListData {
  object: string,
  data: Array<NodesListDataAttributes>,
  meta: NodeListMeta 
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