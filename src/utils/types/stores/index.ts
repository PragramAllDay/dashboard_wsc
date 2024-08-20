import { RequestResponseType, ResponseErrorType } from "../request";
import { PaginationType } from "../pagination";
import { CityType, CountryType, StateType } from "../categories";


export type RequestResponse = RequestResponseType | ResponseErrorType


export type StoreType = {
    id?: string;
    "store_name": string;
    "spermalink": string;
    "rent_per_month": number;
    "minimum_order": number;
    "commission_percentage": number;
    "vat_number": number;
    "registration_number": string;
    "logo": string;
    "icon_primary": string;
    "icon_secondary": string;
    "banner_primary": string;
    "banner_secondary": string;
    "side_banner_primary": string;
    "side_banner_secondary": string;
    "telephone": string;
    "fax": string;
    "address_primary": string;
    "address_secondary": string;
    "description": string;
    "meta_title": string;
    "meta_description": string;
    "slug": string;
    "is_active": boolean;
    owner?: StoreOwnerType;
    owner_id: string;
    "schema_markup": string;
    "country_id": string;
    "state_id": string;
    "city_id": string;
    country?: CountryType;
    state?: StateType;
    city?: CityType;
    "zip": string;
    store_card_payment_id: string;
    store_social_media_id: string;
    store_paypal_detail_id:string;
    store_paypal_detail?: StorePaypalType;
    store_social_media?: StoreSocialMediaType;
    store_card_payment?: StoreCardPaymentType;
    "sort": number;
    "dropship": boolean;
    "invoice_serial_number": string;
    "email"?: string;
    "password"?: string;
    updated_at: string;
    status?: boolean;
}


export type NewStoreType = {
    "store_name": string;
    "spermalink": string;
    "rent_per_month"?: number;
    "minimum_order": number;
    "commission_percentage": number;
    "vat_number": number;
    "registration_number": string;
    "logo": string;
    "icon_primary": string;
    "icon_secondary": string;
    "banner_primary": string;
    "banner_secondary": string;
    "side_banner_primary": string;
    "side_banner_secondary": string;
    "telephone": string;
    "fax": string;
    "address_primary": string;
    "address_secondary": string;
    "description": string;
    "meta_title": string;
    "meta_description": string;
    "slug": string;
    "schema_markup": string;
    "is_active": boolean;
    "country_id": string;
    "state_id": string;
    "city_id": string;
    "zip": string;
    store_card_payment: StoreCardPaymentType;
    store_paypal_detail: StorePaypalType;
    store_social_media: StoreSocialMediaType;
    "sort": number,
    "dropship": boolean,
    "invoice_serial_number": string;
    "email": string;
    "password": string;
    status?: boolean,

}


export type StoreOwnerType = {
    id?: string;
    email: string;
    first_name: string;
    middle_name?: string;
    last_name: string;
    role: string;
    dob: string;
    is_active: boolean;
    title: string;
    gender: string;
    telephone?: string;
    image_uri?: string;
    created_at: string;
    updated_at: string;
}


export type StoreSocialMediaType = {
    id?: string;
    "store_facebook": string;
    "store_twitter": string;
    "store_google_plus": string;
    "store_pinterest": string;
    created_at?: string;
    updated_at?: string;
}

export type StorePaypalType = {
    id?: string;
    "store_paypal_email": string;
    "store_paypal_api_username": string;
    "store_paypal_api_password": string;
    "store_paypal_api_signature": string;
    created_at?: string;
    updated_at?: string;
}

export type StoreCardPaymentType = {
    id?: string;
    "title": string;
    "detail": string;
    created_at?: string;
    updated_at?: string;
}


export type AddStoreType = {
    "store_name": string;
    "spermalink": string;
    "rent_per_month": number;
    "minimum_order": number;
    "commission_percentage": number;
    "vat_number": number;
    "registration_number": string;
    "logo": string;
    "icon_primary": string;
    "icon_secondary": string;
    "banner_primary": string;
    "banner_secondary": string;
    "side_banner_primary": string;
    "side_banner_secondary": string;
    "telephone": string;
    "fax": string;
    "address_primary": string;
    "address_secondary": string;
    "description": string;
    "meta_title": string;
    "meta_description": string;
    "slug": string;
    "schema_markup": string;
    "is_active": boolean;
    "country_id": string;
    "state_id": string;
    "city_id": string;
    "zip": string;
    "store_paypal_email": string;
    "store_paypal_api_username": string;
    "store_paypal_api_password": string;
    "store_paypal_api_signature": string;
    "store_facebook": string;
    "store_twitter": string;
    "store_google_plus": string;
    "store_pinterest": string;
    "title": string;
    "detail": string;
    "sort": number,
    "dropship": boolean,
    "invoice_serial_number": string;
    "email": string;
    "password": string;
    status?: boolean,
}

export type CustomerType = {
    id?: string;
    title: string;
    saleAgentCode: string;
    firstName: string;
    lastName: string;
    companyName: string;
    companyVat: string;
    companyRegistration: string;
    website: string;
    vat: boolean;
    discount: string;
    contactPerson: string;
    telephone: string;
    country: string;
    state: string;
    city: string;
    postCode: string;
    address: string;
    email: string;
    isNewsLetter: boolean;
    ebay?: string;
    amazon?: string;
    saleYear?: number;
    saleToDate?: number;
    createdDate?: string;
    status?: boolean;
}


export type StoreStateType = {
    storePagination: PaginationType;
    storeList: StoreType[];
}

