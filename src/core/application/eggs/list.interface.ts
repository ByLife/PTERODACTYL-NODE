export interface ListReponse {
    object: string;
    data: ListReponseData[];
}

export interface ListReponseData {
    object: string;
    attributes: ListReponseAttributes;
}

export interface ListReponseAttributes {
    id: number;
    uuid: string;
    author: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
}

