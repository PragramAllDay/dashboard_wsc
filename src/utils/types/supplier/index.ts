export type SupplierType = {
    id?: string;
    supplier: string;
    reg: string;
    vat: string;
    website: string;
    ofProducts: string;
    ofInvoice: string;
    ofCreditNote: string;
    status?: boolean;
}

export type InvoicesType = {
    id?: string;
    supplier: string;
    invoiceNo: string;
    accountNo: string;
    subTotalStandard: number;
    subTotalZeroRated: number;
    vat: number;
    total: number;
    invoiceDate: string;
    dueDate: string;
    deliveryDate: string;
    description: string;
    notes: string;
    attachInvoice: any;
    attachDeliveryNote: any;
    ourRef?: string;
    paid?: number;
    invoiceStatus?: string;
    status?: boolean;
}


export type PaymentType = {
    id?: string;
    supplier: string;
    amount: number;
    creditNote: number;
    debitNote: number;
    total: number;
    paymentDate: string;
    description: string;
    note: string;
    attachment: any;
    paymentMethod: string;
    status?: boolean;
}


export type CreditNoteType = {
    id?: string;
    ourRef: string;
    invoiceNo: string;
    creditNote: string;
    date: string;
    note: string;
    others: string;
    amount: number;
    attachCreditNote: any;
    productCode: string;
    productName: string;
    quantity: number;
    unitPrice: number;
    vat: number;
    total: number;
    adjusted?: string;
    paymentRef?: string;
    supplierName: string;
    customerName?: string;
    paymentMethod?: string;
    subTotal?: number;
    company?: string;
    othersAmount?: number;
    status?: boolean;
}




export type SupplierOrderType = {
    id?: string;
    date: string;
    supplier: string;
    amountEV: number;
    vat: number;
    amountIV: number;
    orderStatus: string;
    status?: boolean;
}


