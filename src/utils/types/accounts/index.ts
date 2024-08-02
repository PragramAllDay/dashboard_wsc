export type AccountsType = {
    id?: string;
    date: string;
    description: string;
    debit: string;
    credit: string;
    status?: boolean;
}


export type ReceiptType = {
    id?: string;
    rcpt: string;
    order: string;
    date: string;
    customerName: string;
    company: string;
    amount: number;
    paymentMethod: string
    description: string;
    status?: boolean;
}

export type ChequeToSupplierType = {
    id?: string;
    cheque: string;
    supplier: string;
    issueDate: string;
    chequeDate: string;
    amount: number;
    dateCreated: string;
    state?: boolean;
}

export type CashRegistryType = {
    id?: string;
    date: string;
    user: string;
    openingBalance: number;
    cashSale: number;
    closing: number;
    status?: boolean;
}