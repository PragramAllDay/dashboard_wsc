import { FieldType } from "@/utils/types/modal";

export const manageAttributeFilterField: FieldType[] = [
    {
        id: 1,
        title: "Search:",
        alias: "search",
        column: 3,
        type: "text",
    },
]


export const manageProductFilterField: FieldType[] = [
    {
        id: 1,
        title: "Search:",
        alias: "search",
        column: 3,
        type: "text",
    },
]


export const customerFilterField: FieldType[] = [
    {
        id: 1,
        title: "Search:",
        alias: "search",
        column: 3,
        type: "text",
        placeholder: "Customer name, email, postcode"
    },
]


export const salesAgentFilterField: FieldType[] = [
    {
        id: 1,
        title: "Search:",
        alias: "search",
        column: 3,
        type: "text",
        placeholder: "Sales agent name"
    },
]


export const accountFilterField: FieldType[] = [
    {
        id: 1,
        title: "Search:",
        alias: "search",
        column: 2.4,
        type: "text",
    },
    {
        id: 2,
        title: "Date From:",
        alias: "date-from",
        column: 2.8,
        type: "date",
    },
    {
        id: 3,
        title: "Date To:",
        alias: "date-to",
        column: 2.8,
        type: "date",
    }
]



export const receiptFilterField: FieldType[] = [
    {
        id: 1,
        title: "Search:",
        alias: "search",
        column: 2.4,
        type: "text",
    },
    {
        id: 2,
        title: "Date From:",
        alias: "date-from",
        column: 2.8,
        type: "date",
    },
    {
        id: 3,
        title: "Date To:",
        alias: "date-to",
        column: 2.8,
        type: "date",
    }
]



export const chequeToSupplierFilterField: FieldType[] = [
    {
        id: 1,
        title: "Search:",
        alias: "search",
        column: 2.4,
        type: "text",
    },
    {
        id: 2,
        title: "Issue Date From:",
        alias: "issueDateFrom",
        column: 2.8,
        type: "date",
    },
    {
        id: 3,
        title: "Issue Date To:",
        alias: "issueDateTo",
        column: 2.8,
        type: "date",
    },
    {
        id: 4,
        title: "Cheque Date From:",
        alias: "chequeDateFrom",
        column: 2.8,
        type: "date",
    },
    {
        id: 5,
        title: "Cheque Date To:",
        alias: "chequeDateTo",
        column: 2.8,
        type: "date",
    }

]


export const cashRegisterFilterField: FieldType[] = [
    {
        id: 1,
        title: "Date:",
        alias: "date",
        column: 3,
        type: "date",
    },
]


