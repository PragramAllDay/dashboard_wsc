import { ManageAttributeType, ManageCategoryType, ManageProductType } from "@/utils/types/catalog";
import { SalesAgentType } from "@/utils/types/sale-agent";
import { CustomerType } from "@/utils/types/stores";

export const initialManageCategoryState: ManageCategoryType = {
    name: "",
    permaLink: "",
    description: "",
    image: {},
    banner: {},
    bannerUrl: "",
    titleTag: "",
    metaDescription: "",
    metaKeyword: "",
    isTop: false,
    isLeft: false,
    isFeature: false,
    isDisplay: false,
    status: false,
}


export const initialManageAttributeState: ManageAttributeType = {
    name: "",
    status: false,
}

export const initialManageProductState: ManageProductType = {
    name: "",
    permaLink: "",
    defaultImage: {},
    additionalImages: [],
    measuringUnit: 0,
    pack: 0,
    range: "",
    customsCode: "",
    vat: 0,
    width: 0,
    height: 0,
    length: 0,
    weight: 0,
    isle: "",
    shortDescription: "",
    fullDescription: "",
    selectedAttribute: [],
    supplier: "",
    isFeature: false,
    isSpecial: false,
    freeShipping: false,
    keywords: "",
    relatedProductSku: "",
    pageTitle: "",
    metaDescription: "",
    metaKeyword: "",
    parentCategory: "",
    childCategory: "",
    productCode: "",
    origin: "",
    variations: 0,
    stock: "",
    createdOn: "",
    status: false,
}


export const initialSalesAgentState: SalesAgentType = {
    firstName: "",
    lastName: "",
    email: "",
    commission: 0,
    telephone: "",
    country: "",
    state: "",
    city: "",
    postCode: "",
    address: "",
    referenceCode: "",
    status: false,
}