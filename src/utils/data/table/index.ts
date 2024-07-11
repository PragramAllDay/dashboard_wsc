import { FieldType } from "@/utils/types/modal";
import { CellType } from "@/utils/types/table";


export const storesColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Name" },
    { id: 3, name: "Email" },
    { id: 4, name: "Phone" },
    { id: 5, name: "Owner" },
    { id: 6, name: "Rent" },
    { id: 7, name: "Commission" },
    { id: 8, name: "Action" },
];

export const storesCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "name" },
    { id: 3, name: "email" },
    { id: 4, name: "phone" },
    { id: 5, name: "owner" },
    { id: 6, name: "rent" },
    { id: 7, name: "commission" },
];


export const categoriesColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Name" },
    { id: 3, name: "Meta Title" },
    { id: 4, name: "Meta Description" },
    { id: 5, name: "Action" },
]

export const categoriesCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "name" },
    { id: 3, name: "metaTitle" },
    { id: 4, name: "metaDescription" },
]


export const storeCategoriesColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Name" },
    { id: 3, name: "Meta Title" },
    { id: 4, name: "Meta Description" },
    { id: 5, name: "Meta Keyword" },
    { id: 6, name: "Action" },
]
export const storeCategoriesCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "name" },
    { id: 3, name: "metaTitle" },
    { id: 4, name: "metaDescription" },
    { id: 4, name: "metaKeyword" },
]


export const webOrderColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Order" },
    { id: 3, name: "Store" },
    { id: 4, name: "Date" },
    { id: 5, name: "Customer" },
    { id: 6, name: "Sub Total" },
    { id: 7, name: "VAT" },
    { id: 8, name: "Shipping" },
    { id: 9, name: "Discount" },
    { id: 10, name: "Amount" },
    { id: 11, name: "Refund" },
    { id: 12, name: "Payment" },
    { id: 13, name: "Paid" },
    { id: 14, name: "Printed" },
    { id: 15, name: "Shipped" },
]

export const webOrderCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "order" },
    { id: 3, name: "store" },
    { id: 4, name: "date" },
    { id: 5, name: "customer" },
    { id: 6, name: "subTotal" },
    { id: 7, name: "vat" },
    { id: 8, name: "shipping" },
    { id: 9, name: "discount" },
    { id: 10, name: "amount" },
    { id: 11, name: "refund" },
    { id: 12, name: "payment" },
    { id: 13, name: "paid" },
    { id: 14, name: "printed" },
    { id: 15, name: "shipped" },
]

export const accountsColumns: CellType[] = [
    { id: 1, name: "ID" },
    { id: 2, name: "Date" },
    { id: 3, name: "Description" },
    { id: 4, name: "Debit" },
    { id: 5, name: "Credit" },
]

export const accountsCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "date" },
    { id: 3, name: "description" },
    { id: 4, name: "debit" },
    { id: 5, name: "credit" },
]

export const cmsUserTrackingColumns: CellType[] = [
    { id: 1, name: "ID" },
    { id: 2, name: "customer" },
    { id: 3, name: "company" },
    { id: 4, name: "email" },
    { id: 5, name: "url" },
]

export const cmsUserTrackingCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "customer" },
    { id: 3, name: "company" },
    { id: 4, name: "email" },
    { id: 5, name: "url" },
]


export const cmsAbandonedCartColumns: CellType[] = [
    { id: 1, name: "ID" },
    { id: 2, name: "Customer" },
    { id: 3, name: "Signup Date" },
    { id: 4, name: "Company" },
    { id: 5, name: "Email" },
    { id: 6, name: "Phone" },
    { id: 7, name: "#Of Products" },
]

export const cmsAbandonedCartCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "customer" },
    { id: 3, name: "signupDate" },
    { id: 4, name: "company" },
    { id: 5, name: "email" },
    { id: 6, name: "phone" },
    { id: 7, name: "ofProduct" },
]

export const pagesColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Title" },
    { id: 3, name: "Contents" },
    { id: 6, name: "Action" },
]
export const pagesCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "title" },
    { id: 3, name: "contents" },
]

export const manageNewsLetterColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Title" },
    { id: 3, name: "Contents" },
    { id: 6, name: "Action" },
]
export const manageNewsLetterCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "title" },
    { id: 3, name: "contents" },
]

export const sliderColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Title" },
    { id: 3, name: "Sort Order" },
    { id: 6, name: "Action" },
]
export const sliderCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "title" },
    { id: 3, name: "sortOrder" },
]

export const productReviewColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Pro. Code" },
    { id: 3, name: "Product" },
    { id: 4, name: "Company" },
    { id: 5, name: "Review" },
    { id: 6, name: "Action" },
]

export const productReviewCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "proCode" },
    { id: 3, name: "product" },
    { id: 4, name: "company" },
    { id: 5, name: "review" },
]


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


export const countryListColumns: CellType[] = [
    { id: 1, name: "ID" },
    { id: 2, name: "Name" },
    { id: 3, name: "Action" },
]

export const countryListCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "name" },
]


export const stateListColumns: CellType[] = [
    { id: 1, name: "ID" },
    { id: 2, name: "Name" },
    { id: 3, name: "Country" },
    { id: 4, name: "Action" },
]


export const stateListCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "name" },
    { id: 3, name: "country" },
]


export const cityListColumns: CellType[] = [
    { id: 1, name: "ID" },
    { id: 2, name: "Name" },
    { id: 2, name: "City" },
    { id: 3, name: "Action" },
]

export const cityListCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "name" },
    { id: 2, name: "city" },
]



export const customerListCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "name" },
    { id: 3, name: "createDate" },
    { id: 4, name: "companyName" },
    { id: 5, name: "email" },
    { id: 6, name: "telephone" },
    { id: 7, name: "postCode" },
    { id: 8, name: "city" },
    { id: 9, name: "country" },
    { id: 10, name: "ebay" },
    { id: 11, name: "amazon" },
    { id: 12, name: "saleYear" },
    { id: 13, name: "saleToDate" },
]

export const customerListColumns: CellType[] = [
    { id: 1, name: "ID" },
    { id: 2, name: "Name" },
    { id: 3, name: "Create Date" },
    { id: 4, name: "Company" },
    { id: 5, name: "Email" },
    { id: 6, name: "Phone" },
    { id: 7, name: "Post Code" },
    { id: 8, name: "City" },
    { id: 9, name: "Country" },
    { id: 10, name: "Ebay" },
    { id: 11, name: "Amazon" },
    { id: 12, name: "Sale year" },
    { id: 13, name: "Sale To date" },
    { id: 3, name: "Action" },
]

