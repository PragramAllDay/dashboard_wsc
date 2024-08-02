import { FieldType } from "@/utils/types/modal"

export const modalManageCategoryTitle = ["Add Parent Category", "Update Category"]
export const modalManageAttributeTitle = ["Add Attribute", "Update Attribute"]
export const modalManageProductTitle = ["Add product", "Update product"]
export const modalSalesAgentTitle = ["Add sales agent", "Update sales agent"]
export const modalUserTitle = ["Add user", "Update user"]
export const modalManageGalleriesTitle = ["Add galleries", "Update galleries"]
export const modalManagePagesTitle = ["Add page", "Update pager"]
export const modalStoreBannerTitle = ["Add banner", "Update banner"]

export const modalManageCategoryField: FieldType[] = [
    {
        id: 1,
        title: "Name",
        alias: "name",
        type: "text",
        column: 6,
    },
    {
        id: 2,
        title: "PermaLink",
        alias: "permaLink",
        type: "text",
        column: 6,
    },
    {
        id: 3,
        title: "Description",
        alias: "description",
        type: "text",
        column: 12,
    },
    {
        id: 4,
        title: "Image",
        alias: "image",
        type: "upload",
        column: 6,
    },
    {
        id: 5,
        title: "Banner",
        alias: "banner",
        type: "upload",
        column: 6,
    },
    {
        id: 6,
        title: "Banner Url",
        alias: "bannerUrl",
        type: "text",
        column: 6,
    },
    {
        id: 7,
        title: "Title Tag",
        alias: "titleTag",
        type: "text",
        column: 6,
    },
    {
        id: 8,
        title: "Meta Description",
        alias: "metaDescription",
        type: "text",
        column: 6,
    },
    {
        id: 9,
        title: "Meta Keyword",
        alias: "metaKeyword",
        type: "text",
        column: 6,
    },
    {
        id: 10,
        title: "IsTop",
        alias: "isTop",
        type: "checkbox",
        column: 3,
    },
    {
        id: 11,
        title: "IsLeft",
        alias: "isLeft",
        type: "checkbox",
        column: 3,
    },
    {
        id: 12,
        title: "IsFeature",
        alias: "isFeature",
        type: "checkbox",
        column: 3,
    },
    {
        id: 13,
        title: "Display(Store)",
        alias: "isDisplay",
        type: "checkbox",
        column: 3,
    },
]


export const modalManageAttributeField: FieldType[] = [
    {
        id: 1,
        title: "Name",
        alias: "name",
        type: "text",
        column: 6,
    }
]

export const modalManageProductField: FieldType[] = [
    {
        id: 1,
        title: "Name",
        alias: "name",
        type: "text",
        column: 6,
    },
    {
        id: 2,
        title: "PermaLink",
        alias: "permaLink",
        type: "text",
        column: 6,
    },
    {
        id: 3,
        title: "Product Code",
        alias: "productCode",
        type: "text",
        column: 6,
    },
    {
        id: 6,
        title: "Measuring Unit",
        alias: "measuringUnit",
        type: "text",
        column: 6,
    },
    {
        id: 4,
        title: "Default Image ( Best size: 1000*1500)",
        alias: "defaultImage",
        type: "upload",
        column: 6,
    },
    {
        id: 5,
        title: "Additional Image ( Best size: 1000*1500)",
        alias: "additionalImages",
        type: "upload",
        column: 6,
    },
    {
        id: 7,
        title: "Packed as",
        alias: "pack",
        type: "text",
        column: 6,
    },
    {
        id: 8,
        title: "Range",
        alias: "range",
        type: "text",
        column: 6,
    },
    {
        id: 9,
        title: "Custom Code",
        alias: "customsCode",
        type: "text",
        column: 6,
    },
    {
        id: 10,
        title: "Custom Code",
        alias: "customsCode",
        type: "text",
        column: 6,
    },
    {
        id: 11,
        title: "VAT",
        alias: "vat",
        type: "select",
        column: 6,
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "0 %",
                value: "0 %",
            },
            {
                id: 2,
                name: "20 %",
                value: "20 %",
            }
        ],
    },
    {
        id: 12,
        title: "Width(CM)",
        alias: "width",
        type: "text",
        column: 6,
    },
    {
        id: 13,
        title: "Height(CM)",
        alias: "height",
        type: "text",
        column: 6,
    },
    {
        id: 14,
        title: "Length(CM)",
        alias: "length",
        type: "text",
        column: 6,
    },
    {
        id: 15,
        title: "Weight(Gram)",
        alias: "weight",
        type: "text",
        column: 6,
    },
    {
        id: 16,
        title: "ISLE",
        alias: "isle",
        type: "text",
        column: 6,
    },
    {
        id: 17,
        title: "Short Description",
        alias: "shortDescription",
        type: "quill",
        column: 12,
    },
    {
        id: 18,
        title: "Full Description",
        alias: "fullDescription",
        type: "quill",
        column: 12,
    },
    {
        id: 19,
        title: "Select Attribute",
        alias: "selectedAttribute",
        type: "select",
        column: 6,
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Size",
                value: "Size",
            },
            {
                id: 2,
                name: "Color",
                value: "Color",
            }
        ],
    },
    {
        id: 20,
        title: "Supplier",
        alias: "supplier",
        type: "select",
        column: 6,
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "000-6",
                value: "000-6",
            },
            {
                id: 2,
                name: "000-24",
                value: "000-24",
            }
        ],
    },
    {
        id: 21,
        title: "Is Featured",
        alias: "isFeature",
        type: "checkbox",
        column: 6,
    },
    {
        id: 22,
        title: "Is Special",
        alias: "isSpecial",
        type: "checkbox",
        column: 6,
    },
    {
        id: 23,
        title: "Free Shipping",
        alias: "freeShipping",
        type: "checkbox",
        column: 6,
    },
    {
        id: 24,
        title: "Search Terms (comma separated keywords)",
        alias: "keywords",
        type: "text",
        column: 6,
    },
    {
        id: 25,
        title: "Related Products SKUs (comma separated)",
        alias: "relatedProductSku",
        type: "text",
        column: 6,
    },
    {
        id: 26,
        title: "Page Title",
        alias: "pageTitle",
        type: "text",
        column: 6,
    },
    {
        id: 27,
        title: "Meta Description",
        alias: "metaDescription",
        type: "text",
        column: 6,
    },
    {
        id: 28,
        title: "Meta Keyword",
        alias: "metaKeyword",
        type: "text",
        column: 6,
    },
    {
        id: 29,
        title: "Parent Category",
        alias: "parentCategory",
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
                name: "Costumes & Fancy Dress",
                value: "Costumes & Fancy Dress",
            }
        ],
    },
    {
        id: 29,
        title: "Child Category",
        alias: "childCategory",
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
                name: "Costumes & Fancy Dress",
                value: "Costumes & Fancy Dress",
            }
        ],
    },
    {
        id: 30,
        title: "Stock",
        alias: "stock",
        type: "text",
        column: 6,
    },
    {
        id: 31,
        title: "Origin",
        alias: "origin",
        type: "text",
        column: 6,
    },
    {
        id: 32,
        title: "Variations",
        alias: "variations",
        type: "text",
        column: 6,
    },
]


export const modalSalesAgentField: FieldType[] = [
    {
        id: 1,
        title: "First Name",
        alias: "firstName",
        type: "text",
        column: 6,
    },
    {
        id: 2,
        title: "Last Name",
        alias: "lastName",
        type: "text",
        column: 6,
    },
    {
        id: 3,
        title: "Email",
        alias: "email",
        type: "text",
        column: 6,
    },
    {
        id: 4,
        title: "Commission (%)",
        alias: "commission",
        type: "text",
        column: 6,
    },
    {
        id: 5,
        title: "Telephone",
        alias: "telephone",
        type: "text",
        column: 6,
    },
    {
        id: 6,
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
            }
        ],
    },
    {
        id: 7,
        title: "State",
        alias: "state",
        type: "select",
        column: 6,
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
                value: "Sindh",
            }
        ],
    },
    {
        id: 8,
        title: "City",
        alias: "city",
        type: "select",
        column: 6,
        isSelect: true,
        selectField: [
            {
                id: 1,
                name: "Lahore",
                value: "Punjab",
            },
            {
                id: 2,
                name: "Karachi",
                value: "Karachi",
            }
        ],
    },
    {
        id: 9,
        title: "PostCode/ZipCode",
        alias: "postCode",
        type: "text",
        column: 6,
    },
    {
        id: 10,
        title: "Address",
        alias: "address",
        type: "text",
        column: 6,
    },

]


export const modalUserField: FieldType[] = [
    {
        id: 1,
        title: "First Name",
        alias: "firstName",
        type: "text",
        column: 6,
    },
    {
        id: 2,
        title: "Last Name",
        alias: "lastName",
        type: "text",
        column: 6,
    },
    {
        id: 3,
        title: "Email",
        alias: "email",
        type: "text",
        column: 6,
    },
    {
        id: 4,
        title: "Phone",
        alias: "phone",
        type: "text",
        column: 6,
    },
    {
        id: 4,
        title: "Catalog",
        alias: "catalog",
        type: "label",
        column: 12,
    },
    {
        id: 5,
        title: "Categories",
        alias: "catalogCategories",
        type: "checkbox",
        column: 3,
    },
    {
        id: 6,
        title: "Attributes",
        alias: "catalogAttributes",
        type: "checkbox",
        column: 3,
    },
    {
        id: 7,
        title: "Products",
        alias: "catalogProducts",
        type: "checkbox",
        column: 3,
    },
    {
        id: 21,
        title: "Stock Log",
        alias: "catalogStockLog",
        type: "checkbox",
        column: 3,
    },
    {
        id: 8,
        title: "Sales & Orders:",
        alias: "salesAndOrder",
        type: "label",
        column: 12,
    },
    {
        id: 9,
        title: "Wholesale",
        alias: "salesAndOrderWholesale",
        type: "checkbox",
        column: 3,
    },
    {
        id: 10,
        title: "Dropship",
        alias: "salesAndOrderDropship",
        type: "checkbox",
        column: 3,
    },
    {
        id: 11,
        title: "Cash & Carry Sale",
        alias: "salesAndOrderCashAndCarry",
        type: "checkbox",
        column: 3
    },
    {
        id: 22,
        title: "Make Receipt (C & C)",
        alias: "salesAndOrderMakeReceiptCAndC",
        type: "checkbox",
        column: 3
    },
    {
        id: 23,
        title: "Make Receipt (Web)",
        alias: "salesAndOrderMakeReceiptWeb",
        type: "checkbox",
        column: 3
    },
    {
        id: 24,
        title: "Credit Notes",
        alias: "salesAndOrderCreditNote",
        type: "checkbox",
        column: 3
    },
    {
        id: 25,
        title: "Purchase Order",
        alias: "salesAndOrderPurchaseOrder",
        type: "checkbox",
        column: 3
    },
    {
        id: 12,
        title: "Back Orders:",
        alias: "backOrders",
        type: "label",
        column: 12,
    },
    {
        id: 13,
        title: "Wholesale",
        alias: "backOrdersWholesale",
        type: "checkbox",
        column: 4,
    },
    {
        id: 36,
        title: "Dropship",
        alias: "backOrdersDropship",
        type: "checkbox",
        column: 4,
    },
    {
        id: 26,
        title: "Suppliers",
        alias: "Suppliers",
        type: "label",
        column: 12,
    },
    {
        id: 27,
        title: "Invoices",
        alias: "supplierInvoices",
        type: "checkbox",
        column: 3,
    },
    {
        id: 28,
        title: "Payments",
        alias: "supplierPayment",
        type: "checkbox",
        column: 3,
    },
    {
        id: 29,
        title: "Credit Notes",
        alias: "supplierCreditNote",
        type: "checkbox",
        column: 3,
    },
    {
        id: 30,
        title: "Debit Notes",
        alias: "supplierDebitNote",
        type: "checkbox",
        column: 3,
    },
    {
        id: 31,
        title: "Orders",
        alias: "supplierOrder",
        type: "checkbox",
        column: 3,
    },
    {
        id: 32,
        title: "Ledger",
        alias: "supplierLedger",
        type: "checkbox",
        column: 3,
    },
    {
        id: 33,
        title: "Analytics",
        alias: "supplierAnalytics",
        type: "checkbox",
        column: 3,
    },
    {
        id: 14,
        title: "CMS:",
        alias: "cms",
        type: "label",
        column: 12,
    },
    {
        id: 15,
        title: "Cmp pages",
        alias: "cmsPages",
        type: "checkbox",
        column: 4,
    },
    {
        id: 16,
        title: "Newsletters",
        alias: "cmsNewsLetters",
        type: "checkbox",
        column: 4,
    },
    {
        id: 17,
        title: "Accounts:",
        alias: "accounts",
        type: "label",
        column: 12,
    },
    {
        id: 18,
        title: "Web Sale Report",
        alias: "accountsWebSaleReport",
        type: "checkbox",
        column: 3,
    },
    {
        id: 19,
        title: "Cash & Carry Sale Report",
        alias: "accountsCashCarry",
        type: "checkbox",
        column: 3,
    },
    {
        id: 20,
        title: "Sales Agent Report",
        alias: "accountsSaleAgentReport",
        type: "checkbox",
        column: 3,
    },
    {
        id: 34,
        title: "Receipt Rights (C & C)",
        alias: "accountReceiptRightsCC",
        type: "checkbox",
        column: 3,
    },
    {
        id: 35,
        title: "Receipt Rights (Web)",
        alias: "accountReceiptRightsWeb",
        type: "checkbox",
        column: 3,
    },
    {
        id: 37,
        title: "Cheques To Suppliers",
        alias: "accountChequeSupplier",
        type: "checkbox",
        column: 3,
    },
    {
        id: 38,
        title: "Cash Register",
        alias: "accountCashRegister",
        type: "checkbox",
        column: 3,
    },
    {
        id: 39,
        title: "Expenditures",
        alias: "accountExpenditures",
        type: "checkbox",
        column: 3,
    },
    {
        id: 40,
        title: "Expenditures Payments",
        alias: "accountExpendituresPayment",
        type: "checkbox",
        column: 12,
    },
    {
        id: 41,
        title: "Username",
        alias: "username",
        type: "text",
        column: 6,
    },
    {
        id: 42,
        title: "Password",
        alias: "password",
        type: "password",
        column: 6,
    },
    {
        id: 43,
        title: "Re-Password",
        alias: "rePassword",
        type: "password",
        column: 6,
    },
]

export const modalManageGalleriesField: FieldType[] = [
    {
        id: 1,
        title: "Name",
        alias: "name",
        type: "text",
        column: 6,
    }
]

export const modalManagePagesField: FieldType[] = [
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
        type: "text",
        column: 6,
    },
]


export const modalStoreBannerField: FieldType[] = [
    {
        id: 1,
        title: "Link Url",
        alias: "linkUrl",
        type: "url",
        column: 6,
    },
    {
        id: 2,
        title: "Image",
        alias: "image",
        type: "upload",
        column: 6,
    },
    {
        id: 3,
        title: "Sort Order",
        alias: "sortOrder",
        type: "text",
        column: 6,
    },
]


export const securityFormField: FieldType[] = [
    {
        id: 1,
        title: "Username",
        alias: "username",
        type: "text",
        column: 6,
    },
    {
        id: 2,
        title: "Password",
        alias: "password",
        type: "password",
        column: 6,
    },
    {
        id: 3,
        title: "New Password",
        alias: "newPassword",
        type: "password",
        column: 6,
    },
    {
        id: 4,
        title: "Re-New Password",
        alias: "reNewPassword",
        type: "password",
        column: 6,
    },
]

export const storeSettingFormField: FieldType[] = [
    {
        id: 1,
        title: "Title",
        alias: "title",
        type: "text",
        column: 6,
    },
    {
        id: 2,
        title: "Meta-Description",
        alias: "metaDescription",
        type: "text",
        column: 6,
    },
    {
        id: 3,
        title: "Meta-Keyword",
        alias: "metaKeyword",
        type: "text",
        column: 6,
    },
    {
        id: 4,
        title: "Best Sellers",
        alias: "bestSellers",
        type: "text",
        column: 6,
    },
    {
        id: 5,
        title: "Minimum Orders",
        alias: "minimumOrder",
        type: "text",
        column: 6,
    },
]