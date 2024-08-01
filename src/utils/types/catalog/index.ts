export type ManageCategoryType = {
    id?: string;
    name: string;
    permaLink: string;
    description: string;
    image: any;
    banner: any;
    bannerUrl: string;
    titleTag: string;
    metaDescription: string;
    metaKeyword: string;
    isTop: boolean;
    isLeft: boolean;
    isFeature: boolean;
    isDisplay: boolean;
    status: boolean;
}


export type ManageAttributeType = {
    id?: string;
    name: string;
    status: boolean;
}

export type ManageProductType = {
    id?: string;
    name: string;
    permaLink: string;
    defaultImage: any;
    additionalImages: any[];
    measuringUnit: number;
    pack: number;
    range: string;
    customsCode: string;
    vat: number;
    width: number;
    height: number;
    length: number;
    weight: number;
    isle: string;
    shortDescription: string;
    fullDescription: string;
    selectedAttribute: string[];
    supplier: string;
    isFeature: boolean;
    isSpecial: boolean;
    freeShipping: boolean;
    keywords: string;
    relatedProductSku: string;
    pageTitle: string;
    metaDescription: string;
    metaKeyword: string;
    parentCategory: string;
    childCategory: String;
    productCode: string;
    origin: string;
    variations: number;
    stock: string;
    createdOn: string;
    status: boolean;
}