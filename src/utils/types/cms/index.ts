export type CMSUserTrackingType = {
    id?: string;
    customer?: string;
    company?: string;
    email?: string;
    url?: string;
    status?: boolean;
}


export type AbandonedCartType = {
    id?: string;
    customer: string;
    signupDate: string;
    company: string;
    email: string;
    phone: string;
    ofProduct: string;
    status?: boolean;
}


export type CMSPagesType = {
    id?: string;
    title: string;
    contents: string;
    permaLink: string;
    sortOrder: string;
    status?: boolean;
}


export type ManageNewsLetterType = {
    id?: string;
    title: string;
    contents: string;
    status?: boolean;
}

export type DesignNewsLetterType = {
    id?: string;
    bannerUrl: string;
    categoryImage1: string;
    categoryImage2: string;
    categoryImage3: string;
    products: string;
    newsLetterFor: string;
    displayPrice: boolean;
    status?: boolean;
}

export type SliderType = {
    id?: string;
    title: string;
    text1: string;
    text2: string;
    text3: string;
    sortOrder: string;
    url: string;
    cStatus: string;
    style: string;
    image1: any;
    image2: any;
    status?: boolean;
}


export type ProductReviewType = {
    id?: string;
    image: string;
    prodCode: string;
    product: string;
    company: string;
    review: string;
    status?: string;
}


export type ManageGalleriesType = {
    id?: string;
    name: string;
    status?: boolean;
}


export type ManagePagesType = {
    id?: string;
    title: string;
    permaLink: string;
    sortOrder: string;
    contents: string;
    status?: boolean;
}

export type StoreBannerType = {
    id?: string;
    image: any;
    linkUrl: string;
    sortOrder: string;
    status?: boolean;
}


export type SecurityType = {
    id?: string;
    username: string;
    password: string;
    newPassword: string;
    reNewPassword: string;
    status?: boolean;
}


export type StoreSettingType = {
    id?: string;
    title: string;
    metaDescription: string;
    metaKeyword: string;
    bestSellers: string;
    minimumOrder: number;
    status?: boolean;
}

export type HomePageSettingType = {
    id?: string;
    image: any;
    alt: string;
    url: string;
    sortOrder: string;
    status?: boolean;
}

