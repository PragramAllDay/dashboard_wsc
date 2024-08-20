import { CategoryType, CityType, CountryType, StateType } from "@/utils/types/categories";
import { AddStoreType, CustomerType, StoreStateType, StoreType } from "@/utils/types/stores";

export const initialSliceStoreState: StoreStateType = {
    storeList: [],
    storePagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    editStore: false,
}


export const initialCityState: CityType = {
    id: "",
    name: "",
    status: false,
}


export const initialStateState: StateType = {
    id: "",
    name: "",
    status: false,
}


export const initialCountryState: CountryType = {
    id: "",
    name: "",
    status: false,
}


export const initialCategoriesState: CategoryType = {
    id: "",
    title: "",
    subTitle: "",
    parent: "",
    permalink: "",
    description:"",
    metaTitle: "",
    metaDescription: "",
    metaKeyWord: "",
    schemaMarkup: "",
    sortOrder: "",
    isFeature: true,
    image1: {},
    image2: {},
    icon: {},
    icon2: {},
    status: false,
}

export const initialCustomerState: CustomerType = {
    id: "",
    title: "",
    saleAgentCode: "",
    firstName: "",
    lastName: "",
    companyName: "",
    companyVat: "",
    companyRegistration: "",
    website: "",
    vat: false,
    discount: "",
    contactPerson: "",
    telephone: "",
    country: "",
    state: "",
    city: "",
    postCode: "",
    address: "",
    email: "",
    isNewsLetter: false,
    ebay: "Not applicable",
    amazon: "Not applicable	",
    saleYear: 0,
    saleToDate: 0,
    status: false,
}



export const initialStoreState: AddStoreType = {
    "store_name": "",
    "spermalink": "",
    "rent_per_month": 0,
    "minimum_order": 0,
    "commission_percentage": 0,
    "vat_number": "",
    "registration_number": "",
    "logo": "",
    "icon_primary": "",
    "icon_secondary": "",
    "banner_primary": "",
    "banner_secondary": "",
    "side_banner_primary": "",
    "side_banner_secondary": "",
    "telephone": "",
    "fax": "",
    "address_primary": "",
    "address_secondary": "",
    "description": "",
    "meta_title": "",
    "meta_description": "",
    "slug": "",
    "schema_markup": "",
    "is_active": false,
    "country_id": "",
    "state_id": "",
    "city_id": "",
    "zip": "",
    "store_paypal_detail": {
        "store_paypal_email": "",
        "store_paypal_api_username": "",
        "store_paypal_api_password": "",
        "store_paypal_api_signature": "",
    },
    "store_social_media": {
        "store_facebook": "",
        "store_twitter": "",
        "store_google_plus": "",
        "store_pinterest": "",
    },
    "store_card_payment": {
        "title": "",
        "detail": "",
    },
    "sort": 0,
    "dropship": false,
    "invoice_serial_number": "",
    "email": "",
    "password": "",
    status: false,
}
