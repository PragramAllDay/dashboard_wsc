export type WholeSaleLocalType = {
    id?: string;
    postCode: string;
    freeShipping: string;
    planB: string;
    planC: string;
    planD: string;
    status?: string;
}


export type WholeSaleInternationalType = {
    id?: string;
    country: string;
    zone: number;
    amount: number;
    status?: string;
}


