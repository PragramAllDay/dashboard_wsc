export type WebOrderType = {
    id?: string;
    order: string;
    store: string;
    date: string;
    customer: string;
    subTotal: string;
    vat: string;
    shipping: string;
    discount: string;
    amount: string;
    refund: string;
    payment: string;
    paid: string;
    printed: string;
    shipped: string;
    status?: string;
}


export type BackOrderType = {
    id?: string;
    thumbnail: any;
    name: string;
    sku: string;
    usersNo: number;
    existing: number;
    requestedQuantity: number;
    status?: string;
}

