import { FieldType } from "@/utils/types/modal";

export const modalStoresTitle = ["Add Store", "Update Store"];
export const modalCategoriesTitle = ["Add Category", "Update Category"]
export const modalStoreCategoriesTitle = ["Add Store Category", "Update Store Category"]
export const modalWebOrderTitle = ["Add Web Order", "Update Web Order"]
export const modalPagesTitle = ["Add Pages", "Update Web Page"]
export const modalManageNewsLetterTitle = ["Add News Letter", "Update News Letter"]
export const modalSliderTitle = ["Add Slider", "Update Update"]
export const modalCountryListTitle = ["Add Country", "Update Country"]
export const modalStateListTitle = ["Add State", "Update State"]
export const modalCityListTitle = ["Add City", "Update City"]
export const modalCustomerListTitle = ["Add Customer", "Update Customer"]


export const modalCustomerListFields: FieldType[] = [
    {
        id: 1,
        title: "Title",
        alias: "title",
        type: "select",
        column: 6,
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Mr",
                value: "Mr",
            },
            {
                id: 2,
                name: "Ms",
                value: "Ms",
            },
            {
                id: 3,
                name: "Mrs",
                value: "Mrs",
            },
            {
                id: 4,
                name: "Miss",
                value: "Miss",
            },
            {
                id: 5,
                name: "Mix",
                value: "Other",
            },
        ]
    },
    {
        id: 2,
        title: "Sale Agent Code:",
        alias: "saleAgentCode",
        type: "text",
        column: 6,
    },
    {
        id: 3,
        title: "First Namer:",
        alias: "firstName",
        type: "text",
        column: 6,
    },
    {
        id: 4,
        title: "Last Name:",
        alias: "lastName",
        type: "text",
        column: 6,
    },
    {
        id: 5,
        title: "Company Name:",
        alias: "companyName",
        type: "text",
        column: 6,
    },
    {
        id: 6,
        title: "Company Vat:",
        alias: "companyVat",
        type: "text",
        column: 6,
    },
    {
        id: 7,
        title: "Company Registration:",
        alias: "companyRegistration",
        type: "text",
        column: 6,
    },
    {
        id: 8,
        title: "Website:",
        alias: "website",
        type: "text",
        column: 6,
    },
    {
        id: 9,
        title: "Vat:",
        alias: "vat",
        type: "checkbox",
        column: 12,
    },
    {
        id: 10,
        title: "Discount:",
        alias: "discount",
        type: "text",
        column: 6,
    },
    {
        id: 11,
        title: "Contact Person:",
        alias: "contactPerson",
        type: "text",
        column: 6,
    },
    {
        id: 12,
        title: "Telephone:",
        alias: "telephone",
        type: "tel",
        column: 6,
    },
    {
        id: 13,
        title: "Country",
        alias: "country",
        type: "select",
        column: 6,
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Pakistan",
                value: "Pakistan",
            },
            {
                id: 2,
                name: "India",
                value: "India",
            },

        ]
    },
    {
        id: 14,
        title: "State",
        alias: "state",
        column: 6,
        type: "select",
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Punjab",
                value: "Punjab",
            },
            {
                id: 2,
                name: "Sindh",
                value: "sindh",
            },
        ]
    },
    {
        id: 15,
        title: "City",
        alias: "city",
        column: 6,
        type: "select",
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Lahore",
                value: "Lahore",
            },
            {
                id: 2,
                name: "karachi",
                value: "karachi",
            },
        ]
    },
    {
        id: 16,
        title: "Post Code:",
        alias: "postCode",
        type: "text",
        column: 6,
    },
    {
        id: 17,
        title: "Address",
        alias: "address",
        type: "text",
        multiline: true,
        placeholder: "Enter Address",
        rows: 5,
        column: 12,
    },
    {
        id: 18,
        title: "Email:",
        alias: "email",
        type: "text",
        column: 6,
    },
    {
        id: 19,
        title: "Newsletter subscription:",
        alias: "isNewsLetter",
        type: "checkbox",
        column: 12,
    },

]


export const modalCountryListFields: FieldType[] = [
    {
        id: 1,
        title: "Name",
        alias: "name",
        type: "text",
        column: 6,
    },
]


export const modalStateListFields: FieldType[] = [
    {
        id: 1,
        title: "Name",
        alias: "name",
        type: "text",
        column: 6,
    },
    {
        id: 3,
        title: "Country",
        alias: "country",
        type: "select",
        column: 6,
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Pakistan",
                value: "Pakistan",
            },
            {
                id: 2,
                name: "India",
                value: "India",
            },

        ]
    }
]


export const modalCityListFields: FieldType[] = [
    {
        id: 1,
        title: "Name",
        alias: "name",
        type: "text",
        column: 6,
    },
    {
        id: 3,
        title: "State",
        alias: "state",
        column: 6,
        type: "select",
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Punjab",
                value: "Punjab",
            },
            {
                id: 2,
                name: "Sindh",
                value: "sindh",
            },
        ]
    }
]



export const modalStoresFields: FieldType[] = [
    {
        id: 1,
        title: "Name",
        alias: "store_name",
        type: "text",
        column: 6,
    },
    {
        id: 2,
        title: "Permalink",
        alias: "spermalink",
        type: "text",
        column: 6,
    },
    {
        id: 3,
        title: "Rent/Month",
        alias: "rent_per_month:",
        type: "number",
        column: 6,
    },
    {
        id: 4,
        title: "Minimum Order (Amount in GBP)",
        alias: "minimum_order",
        type: "number",
        column: 6,
    },
    {
        id: 5,
        title: "Commission %",
        alias: "commission_percentage",
        type: "number",
        column: 6,
    },
    {
        id: 6,
        title: "Vat number",
        alias: "vat_number",
        type: "number",
        column: 6,
    },
    {
        id: 7,
        title: "Registration number",
        alias: "registration_number",
        type: "text",
        column: 6,
    },
    {
        id: 8,
        title: "Telephone",
        alias: "telephone",
        type: "tel",
        column: 6,
    },
    {
        id: 9,
        title: "Logo",
        alias: "log",
        type: "upload",
        column: 6,
    },
    {
        id: 10,
        title: "Icon",
        alias: "icon",
        type: "upload",
        column: 6,
    },
    {
        id: 11,
        title: "Icon 2 (Ideal Size 120 x 105)",
        alias: "icon2",
        type: "upload",
        column: 6,
    },
    {
        id: 12,
        title: "Banner (Ideal Size : 570 x 63)",
        alias: "banner",
        type: "upload",
        column: 6,
    },
    // {
    //     id: 12,
    //     title: "Banner URL	",
    //     alias: "banner",
    //     type: "upload",
    //     column: 6,
    // },
    {
        id: 13,
        title: "Banner 2 (Ideal Size : 570 x 63)",
        alias: "banner2",
        type: "upload",
        column: 6,
    },
    // {
    //     id: 14,
    //     title: "Banner URL2",
    //     alias: "banner2",
    //     type: "upload",
    //     column: 6,
    // },
    {
        id: 14,
        title: "Side Banner (Ideal Size : 228 x 350)",
        alias: "sideBanner",
        type: "upload",
        column: 6,
    },
    // {
    //     id: 16,
    //     title: "Side Banner URL",
    //     alias: "sideBanner",
    //     type: "upload",
    //     column: 6,
    // },
    {
        id: 15,
        title: "Fax",
        alias: "fax",
        type: "text",
        column: 6,
    },
    {
        id: 16,
        title: "Address1",
        alias: "address_primary",
        type: "text",
        multiline: true,
        placeholder: "Enter Address 1",
        rows: 1,
        column: 6,
    },
    {
        id: 17,
        title: "Address2",
        alias: "side_banner_secondary",
        type: "text",
        column: 6,
        multiline: true,
        placeholder: "Enter Address 2",
        rows: 10,
    },
    {
        id: 18,
        title: "Description",
        alias: "description",
        type: "quill",
        column: 6,
    },
    {
        id: 19,
        title: "Meta Title",
        alias: "meta_title",
        type: "text",
        multiline: true,
        placeholder: "Enter Meta title",
        rows: 5,
        column: 6,
    },
    {
        id: 20,
        title: "Meta Description",
        alias: "meta_description",
        type: "text",
        multiline: true,
        placeholder: "Enter Meta description",
        rows: 5,
        column: 6,
    },
    {
        id: 21,
        title: "Meta Keywords (Comma ',' Separated)",
        alias: "meta_keywords",
        type: "text",
        multiline: true,
        placeholder: "Enter Meta description",
        rows: 5,
        column: 6,
    },
    {
        id: 22,
        title: "Schema Markup",
        alias: "schema_markup",
        type: "text",
        multiline: true,
        placeholder: "Enter Meta description",
        rows: 5,
        column: 6,
    },
    {
        id: 23,
        title: "Catalog",
        alias: "catalog",
        type: "label",
        column: 12,
    },
    {
        id: 24,
        title: "Categories",
        alias: "catalogCategories",
        type: "checkbox",
        column: 4,
    },
    {
        id: 25,
        title: "Attributes",
        alias: "catalogAttributes",
        type: "checkbox",
        column: 4,
    },
    {
        id: 26,
        title: "Products",
        alias: "catalogProducts",
        type: "checkbox",
        column: 4,
    },
    {
        id: 27,
        title: "Sales & Orders:",
        alias: "salesAndOrder",
        type: "label",
        column: 12,
    },
    {
        id: 28,
        title: "Wholesale",
        alias: "salesAndOrderWholesale",
        type: "checkbox",
        column: 4,
    },
    {
        id: 29,
        title: "Dropship",
        alias: "salesAndOrderDropship",
        type: "checkbox",
        column: 4,
    },
    {
        id: 30,
        title: "Cash & Carry Sale",
        alias: "salesAndOrderCashAndCarry",
        type: "checkbox",
        column: 4,
    },
    {
        id: 31,
        title: "Back Orders:",
        alias: "backOrders",
        type: "label",
        column: 12,
    },
    {
        id: 32,
        title: "Wholesale",
        alias: "backOrdersWholesale",
        type: "checkbox",
        column: 4,
    },
    {
        id: 33,
        title: "Dropship",
        alias: "backOrdersDropship",
        type: "checkbox",
        column: 4,
    },
    {
        id: 34,
        title: "CMS:",
        alias: "cms",
        type: "label",
        column: 12,
    },
    {
        id: 35,
        title: "Cmp pages",
        alias: "cmsPages",
        type: "checkbox",
        column: 4,
    },
    {
        id: 36,
        title: "Newsletters",
        alias: "cmsNewsLetters",
        type: "checkbox",
        column: 4,
    },
    {
        id: 37,
        title: "Accounts:",
        alias: "accounts",
        type: "label",
        column: 12,
    },
    {
        id: 38,
        title: "Web Sale Report",
        alias: "accountsWebSaleReport",
        type: "checkbox",
        column: 4,
    },
    {
        id: 39,
        title: "Cash & Carry Sale Report",
        alias: "accountsCashCarry",
        type: "checkbox",
        column: 4,
    },
    {
        id: 40,
        title: "Sales Agent Report",
        alias: "accountsSaleAgentReport",
        type: "checkbox",
        column: 4,
    },
    {
        id: 41,
        title: "Country",
        alias: "country_id",
        type: "select",
        column: 6,
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Pakistan",
                value: "Pakistan",
            },
            {
                id: 2,
                name: "India",
                value: "India",
            },

        ]
    },
    {
        id: 42,
        title: "State",
        alias: "state_id",
        column: 6,
        type: "select",
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Punjab",
                value: "Punjab",
            },
            {
                id: 2,
                name: "Sindh",
                value: "sindh",
            },
        ]
    },
    {
        id: 43,
        title: "City",
        alias: "city_id",
        column: 6,
        type: "select",
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Lahore",
                value: "Lahore",
            },
            {
                id: 2,
                name: "karachi",
                value: "karachi",
            },
        ]
    },
    {
        id: 44,
        title: "Zip",
        alias: "zip",
        type: "text",
        column: 6,
    },
    {
        id: 45,
        title: "Owner Name",
        alias: "ownerName",
        type: "text",
        column: 6,
    },
    {
        id: 46,
        title: "Email",
        alias: "email",
        type: "email",
        column: 6,
    },
    {
        id: 47,
        title: "PayPal Details:",
        alias: "payPalDetails",
        type: "label",
        column: 12,
    },
    {
        id: 48,
        title: "PayPal Email (To recieve payments)",
        alias: "store_paypal_email",
        type: "email",
        column: 6,
    },
    {
        id: 49,
        title: "PayPal API Username:",
        alias: "store_paypal_api_username",
        type: "text",
        column: 6,
    },
    {
        id: 50,
        title: "PayPal API Password:",
        alias: "store_paypal_api_password",
        type: "password",
        column: 6,
    },
    {
        id: 51,
        title: "PayPal API Signature:",
        alias: "store_paypal_api_signature",
        type: "text",
        column: 6,
    },
    {
        id: 52,
        title: "Card Payment (Barclays Details):",
        alias: "cardPayment",
        type: "label",
        column: 12,
    },
    {
        id: 53,
        title: "PSID:",
        alias: "psID",
        type: "text",
        column: 6,
    },
    {
        id: 54,
        title: "USERID:",
        alias: "userID",
        type: "text",
        column: 6,
    },
    {
        id: 55,
        title: "PSWD:",
        alias: "psWD",
        type: "text",
        column: 12,
    },
    {
        id: 56,
        title: "Password:",
        alias: "password",
        type: "password",
        column: 6,
    },
    {
        id: 57,
        title: "RePassword:",
        alias: "rePassword",
        type: "password",
        column: 6,
    },
];



export const modalCategoriesFields: FieldType[] = [
    {
        id: 1,
        title: "Title",
        alias: "title",
        type: "text",
        column: 6,
    },
    {
        id: 2,
        title: "Sub Title",
        alias: "sub_title",
        type: "text",
        column: 6,
    },
    {
        id: 3,
        title: "Parent",
        alias: "parent_id",
        type: "select",
        column: 6,
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Apparel & Clothing",
                value: "Apparel & Clothing",
            },
            {
                id: 2,
                name: "Home & Decor",
                value: "Home & Decor",
            },
            {
                id: 3,
                name: "Health & Beauty",
                value: "Health & Beauty",
            }
        ]
    },
    {
        id: 4,
        title: "Permalink",
        alias: "permalink",
        type: "text",
        column: 6,
    },
    {
        id: 5,
        title: "Description",
        alias: "description",
        type: "quill",
        column: 12,
    },
    {
        id: 6,
        title: "Meta Title",
        alias: "meta_title",
        type: "text",
        column: 6,
    },
    {
        id: 7,
        title: "Meta Description",
        alias: "meta_description",
        type: "quill",
        column: 12,
    },
    {
        id: 8,
        title: "Meta Keyword",
        alias: "meta_keywords",
        type: "text",
        placeholder: "Enter Meta Keywords (Comma , Separated)",
        multiline: true,
        column: 12,
        rows: 5,
    },
    {
        id: 9,
        title: "Schema Markup",
        alias: "schema_markup",
        type: "text",
        placeholder: "Enter Schema Markup",
        multiline: true,
        column: 12,
        rows: 5,
    },
    {
        id: 10,
        title: "Image (Thumbnail)",
        alias: "image_primary",
        type: "upload",
        column: 6,
    },
    {
        id: 11,
        title: "Image2 (Thumbnail)",
        alias: "image_secondary",
        type: "upload",
        column: 6,
    },
    {
        id: 12,
        title: "Icon (32x32)",
        alias: "icon_primary",
        type: "upload",
        column: 6,
    },
    {
        id: 13,
        title: "Icon 2 (ideal size: 120x105 px)	",
        alias: "icon_secondary",
        type: "upload",
        column: 6,
    },
    {
        id: 14,
        title: "Sort Order",
        alias: "sort_order",
        type: "number",
        column: 6,
    },
    {
        id: 15,
        title: "Is Featured",
        alias: "is_featured",
        type: "checkbox",
        column: 12,
    },
]


export const modalStoreCategoriesFields: FieldType[] = [
    {
        id: 1,
        title: "Title",
        alias: "title",
        type: "text",
        column: 6,
    },
    {
        id: 2,
        title: "Sub Title",
        alias: "subTitle",
        type: "text",
        column: 6,
    },
    {
        id: 3,
        title: "Parent",
        alias: "parent",
        type: "select",
        column: 6,
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Apparel & Clothing",
                value: "Apparel & Clothing",
            },
            {
                id: 2,
                name: "Home & Decor",
                value: "Home & Decor",
            },
            {
                id: 3,
                name: "Health & Beauty",
                value: "Health & Beauty",
            }
        ]
    },
    {
        id: 4,
        title: "Permalink",
        alias: "permalink",
        type: "text",
        column: 6,
    },
    {
        id: 5,
        title: "Meta Title",
        alias: "metaTitle",
        type: "text",
        column: 6,
    },
    {
        id: 6,
        title: "Meta Description",
        alias: "metaDescription",
        type: "text",
        column: 6,
    }
]


export const modalPagesFields = [
    {
        id: 1,
        title: "Title",
        alias: "title",
        type: "text",
        column: 6,
    },
    {
        id: 2,
        title: "Permalink",
        alias: "permaLink",
        type: "text",
        column: 6,
    },
    {
        id: 3,
        title: "Sort Order",
        alias: "sortOrder",
        type: "text",
        column: 6,
    },
    {
        id: 4,
        title: "Contents",
        alias: "contents",
        type: "quill",
        column: 12,
    },
]


export const modalManageNewsLetterFields: FieldType[] = [
    {
        id: 1,
        title: "Title",
        alias: "title",
        type: "text",
        column: 6,
    },
    {
        id: 2,
        title: "Contents",
        alias: "contents",
        type: "quill",
        column: 12,
    },
]


export const modalSliderFields: FieldType[] = [
    {
        id: 1,
        title: "Title",
        alias: "title",
        type: "text",
        column: 6,
    },
    {
        id: 2,
        title: "Text1",
        alias: "text1",
        type: "text",
        column: 6,
    },
    {
        id: 3,
        title: "Text2",
        alias: "text2",
        type: "text",
        column: 6,
    },
    {
        id: 4,
        title: "Text3",
        alias: "text3",
        type: "text",
        column: 6,
    },
    {
        id: 6,
        title: "Sort Order",
        alias: "sortOrder",
        type: "text",
        column: 6,
    },
    {
        id: 7,
        title: "URL",
        alias: "url",
        type: "text",
        column: 6,
    },
    {
        id: 8,
        title: "Style",
        alias: "style",
        type: "select",
        column: 6,
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Style-1",
                value: "Style-1",
            },
            {
                id: 2,
                name: "Style-2",
                value: "Style-2",
            },
            {
                id: 3,
                name: "Style-3",
                value: "Style-3",
            },
            {
                id: 3,
                name: "Without Text",
                value: "Without Text",
            }
        ]
    },
    {
        id: 8,
        title: "Status",
        alias: "cStatus",
        type: "select",
        column: 6,
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Active",
                value: "Active",
            },
            {
                id: 2,
                name: "In-Active",
                value: "In-Active",
            },
        ]
    },
    {
        id: 5,
        title: "Image1",
        alias: "image1",
        type: "upload",
        column: 6,
    },
    {
        id: 5,
        title: "Image2",
        alias: "image2",
        type: "upload",
        column: 6,
    },
]


