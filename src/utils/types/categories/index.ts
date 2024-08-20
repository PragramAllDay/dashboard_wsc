export type CategoryType = {
    id?: string;
    title: string,
    sub_title: string;
    permalink: string;
    description: string;
    meta_title: string;
    meta_description: string;
    meta_keywords: string[];
    schema_markup: string;
    image_primary: string;
    image_secondary: string;
    icon_primary: string;
    icon_secondary: string;
    sort_order: number;
    is_featured: boolean;
    is_active: boolean;
    slug: string;
    parent_id?: string;
    status?: boolean;
};


export type CategoryIdType = string

export type CountryType = {
    id?: string;
    name: string;
    shortCode?: string;
    code?: string;
    created_at?: string;
    updated_at?: string;
    status?: boolean;
};

export type StateType = {
    id?: string;
    name: string,
    country?: CountryType,
    created_at?: string,
    updated_at?: string,
    status?: boolean;
};

export type CityType = {
    id?: string;
    name: string,
    country?: CountryType,
    state?: StateType,
    created_at?: string,
    updated_at?: string
    status?: boolean;
};

export type AuthType = {
    email: string;
    password: string;
};



