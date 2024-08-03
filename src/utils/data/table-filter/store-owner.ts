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


export const allSupplierFilterField: FieldType[] = [
    {
        id: 1,
        title: "Search:",
        alias: "search",
        column: 3,
        type: "text",
    },
]


export const invoicesFilterField: FieldType[] = [
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
        alias: "dateFrom",
        column: 2.8,
        type: "date",
    },
    {
        id: 3,
        title: "Date To:",
        alias: "dateTo",
        column: 2.8,
        type: "date",
    },
    {
        id: 4,
        title: "Due Date From:",
        alias: "dueDateFrom",
        column: 2.8,
        type: "date",
    },
    {
        id: 5,
        title: "Due Date To:",
        alias: "dueDateTo",
        column: 2.8,
        type: "date",
    },
    {
        id: 6,
        title: "Payment:",
        alias: "payment",
        column: 2.4,
        type: "select",
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Cash",
                value: "cash",
            },
            {
                id: 2,
                name: "Card",
                value: "card",
            },
            {
                id: 3,
                name: "Paypal",
                value: "paypal",
            }
        ]
    },
]


export const paymentFilterField: FieldType[] = [
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
        alias: "dateFrom",
        column: 2.8,
        type: "date",
    },
    {
        id: 3,
        title: "Date To:",
        alias: "dateTo",
        column: 2.8,
        type: "date",
    },
]

export const creditNoteFilterField: FieldType[] = [
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
        alias: "dateFrom",
        column: 2.8,
        type: "date",
    },
    {
        id: 3,
        title: "Date To:",
        alias: "dateTo",
        column: 2.8,
        type: "date",
    },
]

export const debitNotesFilter: FieldType[] = [
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
        alias: "dateFrom",
        column: 2.8,
        type: "date",
    },
    {
        id: 3,
        title: "Date To:",
        alias: "dateTo",
        column: 2.8,
        type: "date",
    },
]


export const supplierOrderFilter: FieldType[] = [
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
        alias: "dateFrom",
        column: 2.8,
        type: "date",
    },
    {
        id: 3,
        title: "Date To:",
        alias: "dateTo",
        column: 2.8,
        type: "date",
    },
]


export const allOrderFilter: FieldType[] = [
    {
        id: 1,
        title: "Search:",
        alias: "search",
        column: 2.4,
        type: "text",
    },
    {
        id: 2,
        title: "Status:",
        alias: "orderStatus",
        column: 2.4,
        type: "select",
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Paid",
                value: "Paid",
            },
            {
                id: 2,
                name: "Unpaid",
                value: "Unpaid",
            },
            {
                id: 3,
                name: "Cancelled",
                value: "Cancelled",
            }
        ]
    },
    {
        id: 3,
        title: "Date From:",
        alias: "dateFrom",
        column: 2.8,
        type: "date",
    },
    {
        id: 4,
        title: "Date To:",
        alias: "dateTo",
        column: 2.8,
        type: "date",
    },
]


export const webSiteOrderFilter: FieldType[] = [
    {
        id: 1,
        title: "Search:",
        alias: "search",
        column: 2.4,
        type: "text",
    },
    {
        id: 2,
        title: "Status:",
        alias: "orderStatus",
        column: 2.4,
        type: "select",
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Paid",
                value: "Paid",
            },
            {
                id: 2,
                name: "Unpaid",
                value: "Unpaid",
            },
            {
                id: 3,
                name: "Cancelled",
                value: "Cancelled",
            }
        ]
    },
    {
        id: 2,
        title: "Shipping:",
        alias: "shipping",
        column: 2.4,
        type: "select",
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "All",
                value: "All",
            },
            {
                id: 2,
                name: "Shipped",
                value: "Shipped",
            },
            {
                id: 3,
                name: "Not Shipped",
                value: "Not Shipped",
            },
        ]
    },
    {
        id: 3,
        title: "Date From:",
        alias: "dateFrom",
        column: 2.8,
        type: "date",
    },
    {
        id: 4,
        title: "Date To:",
        alias: "dateTo",
        column: 2.8,
        type: "date",
    },
]


export const cashAndCarryOrderFilter: FieldType[] = [
    {
        id: 1,
        title: "Search:",
        alias: "search",
        column: 2.4,
        type: "text",
    },
    {
        id: 2,
        title: "Status:",
        alias: "orderStatus",
        column: 2.4,
        type: "select",
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Paid",
                value: "Paid",
            },
            {
                id: 2,
                name: "Unpaid",
                value: "Unpaid",
            },
            {
                id: 3,
                name: "Cancelled",
                value: "Cancelled",
            }
        ]
    },
    {
        id: 3,
        title: "Payment Method:",
        alias: "paymentMethod",
        column: 2.4,
        type: "select",
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Cash",
                value: "cash",
            },
            {
                id: 2,
                name: "Card",
                value: "card",
            },
            {
                id: 3,
                name: "Paypal",
                value: "paypal",
            }
        ]
    },
    {
        id: 3,
        title: "Date From:",
        alias: "dateFrom",
        column: 2.8,
        type: "date",
    },
    {
        id: 4,
        title: "Date To:",
        alias: "dateTo",
        column: 2.8,
        type: "date",
    },
]

export const badDebtsFilterField: FieldType[] = [
    {
        id: 1,
        title: "Search:",
        alias: "search",
        column: 3,
        type: "text",
    },
]



export const monthWiseSaleFilterField: FieldType[] = [
    {
        id: 1,
        title: "Search:",
        alias: "search",
        placeholder: "enter product name or code",
        column: 3,
        type: "text",
    },
    {
        id: 2,
        title: "Category:",
        alias: "category",
        column: 2.4,
        type: "select",
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "woman",
                value: "woman",
            },
            {
                id: 2,
                name: "man",
                value: "man",
            },
        ]
    },
    {
        id: 3,
        title: "Type:",
        alias: "type",
        column: 2.4,
        type: "select",
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Cash & Carry",
                value: "cash-and-carry",
            },
            {
                id: 2,
                name: "web",
                value: "web",
            },
        ]
    },
    {
        id: 4,
        title: "Date:",
        alias: "date",
        column: 3,
        type: "date",
    },
]


export const purchaseOrderFilterField: FieldType[] = [
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


