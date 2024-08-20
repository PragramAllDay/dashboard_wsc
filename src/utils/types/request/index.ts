import { CategoryType, CityType, StateType } from "../categories";
import { StoreType } from "../stores";


export type RequestDataType = CategoryType | StateType | CityType | StoreType

export type RequestResponseType = {
    metadata: {
        page: number,
        skip: number,
        take: number,
        order: string,
        pages: number,
        has_prev: boolean,
        has_next: boolean;
    };
    data: RequestDataType[];
}

export type ResponseErrorType = {
    statusCode: number;
    timestamp: string;
    path: string;
    detail: string;
}

