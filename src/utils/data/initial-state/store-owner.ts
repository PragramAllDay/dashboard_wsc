import { ManageAttributeType, ManageCategoryType, ManageProductType } from "@/utils/types/catalog";
import { ManageGalleriesType, ManagePagesType, SecurityType, StoreBannerType, StoreSettingType } from "@/utils/types/cms";
import { SalesAgentType } from "@/utils/types/sale-agent";
import { UserType } from "@/utils/types/user";
import { string } from "zod";

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


export const initialUserState: UserType = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    rePassword: "",
    catalogCategories: false,
    catalogAttributes: false,
    catalogProducts: false,
    catalogStockLog: false,
    salesAndOrderWholesale: false,
    salesAndOrderDropship: false,
    salesAndOrderCashAndCarry: false,
    salesAndOrderMakeReceiptCAndC: false,
    salesAndOrderMakeReceiptWeb: false,
    salesAndOrderCreditNote: false,
    salesAndOrderPurchaseOrder: false,
    backOrdersWholesale: false,
    backOrdersDropship: false,
    supplierInvoices: false,
    supplierPayment: false,
    supplierCreditNote: false,
    supplierDebitNote: false,
    supplierOrder: false,
    supplierLedger: false,
    supplierAnalytics: false,
    cmsCmpPage: false,
    accountWebSaleReport: false,
    accountCashCarryReport: false,
    accountSalesAgentReport: false,
    accountReceiptRightsCC: false,
    accountReceiptRightsWeb: false,
    accountChequeSupplier: false,
    accountCashRegister: false,
    accountExpenditures: false,
    accountExpendituresPayment: false,
    cmsNewsLetter: false,
    status: false,
}


export const initialManageGalleriesState: ManageGalleriesType = {
    name: "",
    status: false,
}


export const initialManagePagesState: ManagePagesType = {
    title: "",
    permaLink: "",
    sortOrder: "",
    contents: "",
    status: false,
}

export const initialStoreBannerState: StoreBannerType = {
    image: {},
    linkUrl: "",
    sortOrder: "",
    status: false,
}



export const initialSecurityState: SecurityType = {
    username: "",
    password: "",
    newPassword: "",
    reNewPassword: "",
    status: false,
}


export const initialStoreSettingState: StoreSettingType = {
    title: "",
    metaDescription: "",
    metaKeyword: "",
    bestSellers: "",
    minimumOrder: 0,
    status: false,
}