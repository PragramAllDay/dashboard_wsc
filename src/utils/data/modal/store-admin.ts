import { FieldType } from "@/utils/types/modal"

export const modalManageCategoryTitle = ["Add Parent Category", "Update Category"]
export const modalManageAttributeTitle = ["Add Attribute", "Update Attribute"]
export const modalManageProductTitle = ["Add product", "Update product"]
export const modalSalesAgentTitle = ["Add sales agent", "Update sales agent"]


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
        id:8,
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