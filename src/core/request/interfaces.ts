export interface HEADERS {
    Accept: string;
    Authorization: string;
    Cookie: string;
}

export interface REQUEST {
    url: string;
    headers: HEADERS | undefined
}