export type OrderType = {
    id?: string;
    invoiceNo: string;
    orderNo: string;
    date: string;
    refund: string;
    customer: string;
    email: string;
    subTotalStandard: number;
    subTotalZeroRated: number;
    customerName: string;
    vat: number;
    discount: number;
    shipping: number;
    amount: number;
    remaining: number;
    orderStatus: string;
    payment: number;
    paid: string;
    printed: string;
    shipped: string;
    pmtdate: string;
    status?: boolean;
}


export type BadDebtsType = {
    id?: string;
    name: string;
    company: string;
    email: string;
    total: string;
    status?: boolean;
}


export type MonthWiseSaleType = {
    id?: string;
    image: any;
    code: string;
    name: string;
    attribute: string;
    sale: string;
    stock: string;
    status?: boolean;
}


export type PurchaseOrderType = {
    id?: string;
    poNumber: string;
    date: string;
    customer: string;
    email: string;
    poDate: string;
    expCollDate: string;
    collDate: string;
    invoiceNo: string;
    source: string;
    contact: string;
    comments: string;
    status?: boolean;
}



export type MakeReceiptsCCType = {
    id?: string;
    customer: string;
    invoiceAmount: number;
    creditNoteAmount: number;
    total: number;
    date: string;
    description: string;
    paymentMethod: string;
    status?: boolean;
}



export type MakeReceiptsWebType = {
    id?: string;
    customer: string;
    invoiceAmount: number;
    creditNoteAmount: number;
    total: number;
    transaction: string;
    date: string;
    description: string;
    paymentMethod: string;
    status?: boolean;
}









