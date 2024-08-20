import { RequestDataType, RequestResponseType } from "../types/request";
import { FieldType, SelectOption } from "../types/modal";
import { AddStoreType } from "../types/stores";

export function populateStoreSelectFields(
    fieldIndex: number,
    modalFields: FieldType[],
    selectFieldData: RequestResponseType,
    fieldName: string,
    FieldValue: string,
) {

    const optionsList = selectFieldData?.data?.map(
        (element: RequestDataType, index: number): SelectOption => ({
            id: index + 1,
            name: element[fieldName as never],
            value: element[FieldValue as never],
        })
    );
    modalFields[fieldIndex].selectField = optionsList
}

export const handleAddStore = (value: AddStoreType) => {
    const store = {
        store_name: value.store_name,
        spermalink: value.spermalink,
        //  rent_per_month: parseInt(value.rent_per_month.toString()),
        minimum_order: value.minimum_order,
        commission_percentage: value.commission_percentage,
        vat_number: value.vat_number,
        registration_number: value.registration_number,
        logo: "https://example.com/logo.png",
        icon_primary: "https://example.com/icon_primary.png",
        icon_secondary: "https://example.com/icon_secondary.png",
        banner_primary: "https://example.com/banner_primary.png",
        banner_secondary: "https://example.com/banner_secondary.png",
        side_banner_primary: "https://example.com/side_banner_primary.png",
        side_banner_secondary: "https://example.com/side_banner_secondary.png",
        telephone: value.telephone,
        fax: value.address_primary,
        address_primary: value.address_primary,
        address_secondary: value.address_secondary,
        description: value.description,
        meta_title: value.meta_title,
        meta_description: value.meta_description,
        slug: value.store_name.toLowerCase().replace(" ", "_"),
        schema_markup: value.schema_markup,
        is_active: true,
        country_id: value.country_id,
        state_id: value.state_id,
        city_id: value.city_id,
        zip: value.zip,
        "store_paypal_detail": {
            "store_paypal_email": value.store_paypal_email,
            "store_paypal_api_username": value.store_paypal_api_username,
            "store_paypal_api_password": value.store_paypal_api_password,
            "store_paypal_api_signature": value.store_paypal_api_signature,
        },
        store_social_media: {
            "store_facebook": "facebook_handle",
            "store_twitter": "twitter_handle",
            "store_google_plus": "google_plus_handle",
            "store_pinterest": "pinterest_handle"
        },
        store_card_payment: {
            title: "Card Payment Title",
            detail: "Card Payment Detail in JSON format",
        },
        sort: 1,
        dropship: false,
        invoice_serial_number: "1234567890",
        email: value.email,
        password: value.password,
    };

    return store;
};


export const storeRenderCell = (rowData: any, name: string, index: number) => {
    if (name === "id") {
        return index + 1;
    }

    if (name === "owner") {
        return `${rowData['owner']['first_name']} ${rowData['owner']['last_name']}`
    }

    if (name === "name") {
        return rowData['store_name']
    }

    if (name === "email") {
        return rowData['owner']['email']
    }

    return rowData[name as never];
};


export const storeFilterFieldOnChange = (
    filterField: any,
    newValue: string,
    fieldAlias: string,
    setValues: any,
) => {
    setValues({
        ...filterField,
        [fieldAlias]: newValue,
    });
};


export const storeModalFieldOnChange = (
    rowData: any,
    newValue: string,
    fieldAlias: string,
    setValues: any,
) => {
    setValues({
        ...rowData,
        [fieldAlias]: newValue,
    });
};

export const categoryFilterFieldOnChange = (
    filterField: any,
    newValue: string,
    fieldAlias: string,
    setValues: any,
) => {
    setValues({
        ...filterField,
        [fieldAlias]: newValue,
    });
};

