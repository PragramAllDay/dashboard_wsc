import { FieldType } from "@/utils/types/modal"

export const storeFilterField: FieldType[] = [
    {
        id: 1,
        title: "Status:",
        alias: "status",
        column: 2.4,
        type: "select",
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Active",
                value: "active",
            },
            {
                id: 2,
                name: "Inactive",
                value: "inactive",
            },
            {
                id: 3,
                name: "Both",
                value: "both",
            }
        ]
    },
]

export const categoryFilterField: FieldType[] = [
    {
        id: 1,
        title: "Search:",
        alias: "search",
        column: 3,
        type: "text",
    },
]


export const countryFilterField = [
    {
        id: 1,
        title: "Search:",
        alias: "search",
        column: 3,
        type: "text",
    },
]

export const storeCategoryFilterField: FieldType[] = [
    {
        id: 1,
        title: "Stores:",
        alias: "stores",
        columnLarge: 2.5,
        columnMedium: 3,
        columnSmall: 5,
        type: "select",
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Mia Factions",
                value: "mia-factions",
            },
            {
                id: 2,
                name: "Wicked Nights",
                value: "wicked-nights",
            },
            {
                id: 3,
                name: "Dean",
                value: "dean",
            }
        ]
    },
    {
        id: 2,
        title: "Search:",
        alias: "search",
        columnLarge: 2.5,
        columnMedium: 3,
        columnSmall: 5,
        type: "text",
    },
]


export const accountFilterField: FieldType[] = [
    {
        id: 1,
        title: "Store:",
        alias: "select",
        column: 2.4,
        type: "select",
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Mia Factions",
                value: "mia-factions",
            },
            {
                id: 2,
                name: "Wicked Nights",
                value: "wicked-nights",
            },
            {
                id: 3,
                name: "Dean",
                value: "dean",
            }
        ]
    },
    {
        id: 2,
        title: "Search:",
        alias: "search",
        column: 2.4,
        type: "text",
    },
    {
        id: 3,
        title: "Date From:",
        alias: "date-from",
        column: 2.8,
        type: "date",
    },
    {
        id: 4,
        title: "Date To:",
        alias: "date-to",
        column: 2.8,
        type: "date",
    }
]

export const webOrderFilterField = [
    {
        id: 1,
        title: "Stores:",
        alias: "stores",
        type: "select",
        column: 2.4,
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Mia Factions",
                value: "mia-factions",
            },
            {
                id: 2,
                name: "Wicked Nights",
                value: "wicked-nights",
            },
            {
                id: 3,
                name: "Dean",
                value: "dean",
            }
        ]
    },
    {
        id: 2,
        title: "Status:",
        alias: "status",
        column: 2.4,
        type: "select",
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Active",
                value: "active",
            },
            {
                id: 2,
                name: "Inactive",
                value: "inactive",
            },
            {
                id: 3,
                name: "Both",
                value: "both",
            }
        ]
    },
    {
        id: 3,
        title: "Shipping:",
        alias: "shipping",
        column: 2.4,
        type: "select",
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "All",
                value: "all",
            },
            {
                id: 2,
                name: "All Shipped",
                value: "all-shipped",
            },
            {
                id: 3,
                name: "Shipped",
                value: "shipped",
            }
        ]
    },
    {
        id: 4,
        title: "Date From:",
        alias: "date-from",
        column: 2.8,
        type: "date",
    },
    {
        id: 5,
        title: "Date To:",
        alias: "date-to",
        column: 2.8,
        type: "date",
    }
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
    {
        id: 2,
        title: "eBay Shop:",
        alias: "eBayShop",
        column: 3,
        type: "text",
        placeholder: "eBay Shop"
    },
    {
        id: 3,
        title: "Amazon Shop:",
        alias: "amazonShop",
        column: 3,
        type: "text",
        placeholder: "Amazon Shop"
    },
    {
        id: 4,
        title: "Status:",
        alias: "status",
        column: 2.4,
        type: "select",
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Active",
                value: "active",
            },
            {
                id: 2,
                name: "Inactive",
                value: "inactive",
            },
        ]
    }
]