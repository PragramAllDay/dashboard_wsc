import { z } from "zod";

const imageSchema = z.instanceof(File)
    .refine((image) => image?.type.startsWith('image/'), 'Invalid image format');

export const CountrySchema = z.object({
    name: z.string().trim().min(1, "Name is required."),
});


export const StateSchema = z.object({
    name: z.string().trim().min(1, "Name is required."),
    country: z.string().trim().min(1, "Country is required."),
});


export const CitySchema = z.object({
    name: z.string().trim().min(1, "Name is required."),
    state: z.string().trim().min(1, "City is required."),
});

export const CustomerSchema = z.object({
    title: z.string().trim().min(1, "Title is required."),
    saleAgentCode: z.string().trim().min(1, "Sale Agent Code is required."),
    firstName: z.string().trim().min(1, "First Name is required."),
    lastName: z.string().trim().min(1, "First Name is required."),
    companyName: z.string().trim().min(1, "company Name is required."),
    companyVat: z.string().trim().min(1, "company Vat is required."),
    companyRegistration: z.string().trim().min(1, "Company Registration is required."),
    website: z.string().trim().min(1, "Web Site is required."),
    vat: z.boolean({ message: "Vat is required." }),
    discount: z.string().trim().min(1, "Discount is required."),
    contactPerson: z.string().trim().min(1, "Contact Person is required."),
    telephone: z.string().trim().min(1, "Telephone is required."),
    country: z.string().trim().min(1, "Country is required."),
    state: z.string().trim().min(1, "State is required."),
    city: z.string().trim().min(1, "City is required."),
    postCode: z.string().trim().min(1, "Post Code is required."),
    address: z.string().trim().min(1, "Address is required."),
    email: z.string().trim().min(1, "Email is required."),
    isNewsLetter: z.boolean({ message: "News Letter is required." })
});


export const StoreSchema = z.object({
    name: z.string().trim().min(1, "Name is required."),
    permalink: z.string().trim().min(1, "Name is required."),
    rent: z.string().trim().min(1, "Name is required."),
    minimumOrder: z.string().trim().min(1, "Name is required."),
    commission: z.string().trim().min(1, "Name is required."),
    vat: z.string().trim().min(1, "Name is required."),
    registrationNo: z.string().trim().min(1, "Name is required."),
    phone: z.string().trim().min(1, "Name is required."),
    log: imageSchema,
    icon: imageSchema,
    icon2: imageSchema,
    banner: imageSchema,
    banner2: imageSchema,
    sideBanner: imageSchema,
    fax: z.string().trim().min(1, "Fax is required."),
    address1: z.string().trim().min(1, "Address 1 is required."),
    address2: z.string().trim().min(1, "Address 2 is required."),
    description: z.string().trim().min(1, "Description is required."),
    metaTitle: z.string().trim().min(1, "Meta Title is required."),
    metaDescription: z.string().trim().min(1, "Meta Description is required."),
    schemaMarkup: z.string().trim().min(1, "Schema Markup is required."),
    catalogCategories: z.boolean().optional(),
    catalogAttributes: z.boolean().optional(),
    catalogProducts: z.boolean().optional(),
    salesAndOrderWholesale: z.boolean().optional(),
    salesAndOrderDropship: z.boolean().optional(),
    salesAndOrderCashAndCarry: z.boolean().optional(),
    backOrdersWholesale: z.boolean().optional(),
    backOrdersDropship: z.boolean().optional(),
    cmsPages: z.boolean().optional(),
    cmsNewsLetters: z.boolean().optional(),
    accountsWebSaleReport: z.boolean().optional(),
    accountsCashCarry: z.boolean().optional(),
    accountsSaleAgentReport: z.boolean().optional(),
    country: z.string().trim().min(1, "Country is required."),
    state: z.string().trim().min(1, "State is required."),
    city: z.string().trim().min(1, "City is required."),
    zip: z.string().trim().min(1, "Zip is required."),
    owner: z.string().trim().min(1, "Owner is required."),
    email: z.string().trim().min(1, "Email is required."),
    payPalEmail: z.string().trim().min(1, "PayPal Email is required."),
    payPalUsername: z.string().trim().min(1, "PayPal Username is required."),
    payPalPassword: z.string().trim().min(1, "PayPal Password is required."),
    payPalSignature: z.string().trim().min(1, "PayPal Signature is required."),
    psID: z.string().trim().min(1, "PSID is required."),
    userID: z.string().trim().min(1, "UserID is required."),
    psWD: z.string().trim().min(1, "PSWD is required."),
    password: z.string().trim().min(1, "Password is required."),
    rePassword: z.string().trim().min(1, "Re-Password is required."),
}).refine((data) => data.password === data.rePassword, {
    message: "Passwords don't match",
    path: ["rePassword"],
});


export const CategoriesSchema = z.object({
    title: z.string().trim().min(1, "Title is required."),
    subTitle: z.string().trim().min(1, "Sub Title is required."),
    parent: z.string().trim().min(1, "Parent is required."),
    permalink: z.string().trim().min(1, "Perma Link is required."),
    sortOrder: z.string().trim().min(1, "Sort Order is required."),
    metaTitle: z.string().trim().min(1, "Meta Title is required."),
    metaKeyword: z.string().trim().min(1, "Meta Keyword is required."),
    metaDescription: z.string().trim().min(1, "Meta Description is required."),
    schemaMarkup: z.string().trim().min(1, "Schema Markup is required."),
    isFeature: z.boolean({ message: "Is Feature is required." }),
    image1: imageSchema,
    image2: imageSchema,
    icon: imageSchema,
    icon2: imageSchema,
})


export const StoreCategorySchema = z.object({
    title: z.string().trim().min(1, "Title is required."),
    subTitle: z.string().trim().min(1, "Sub-Title is required."),
    parent: z.string().trim().min(1, "Parent is required."),
    permalink: z.string().trim().min(1, "Perma Link is required."),
    metaTitle: z.string().trim().min(1, "Meta Title  is required."),
    metaDescription: z.string().trim().min(1, "Meta Description is required."),
})


export const PagesSchema = z.object({
    title: z.string().trim().min(1, "Title is required."),
    permaLink: z.string().trim().min(1, "Perma Link is required."),
    sortOrder: z.string().trim().min(1, "Sort Order is required."),
    contents: z.string().trim().min(1, "Contents is required."),
})



export const ManageNewsLetterSchema = z.object({
    title: z.string().trim().min(1, "Title is required."),
    contents: z.string().trim().min(1, "Contents is required."),
})


export const SliderSchema = z.object({
    title: z.string().trim().min(1, "Title is required."),
    text1: z.string().trim().min(1, "Text1 is required."),
    text2: z.string().trim().min(1, "Text2 is required."),
    text3: z.string().trim().min(1, "Text3 is required."),
    sortOrder: z.string().trim().min(1, "Sort Order is required."),
    url: z.string().trim().min(1, "Url is required."),
    style: z.string().trim().min(1, "Style is required."),
    cStatus: z.string().trim().min(1, "Status is required."),
    image1: imageSchema,
    image2: imageSchema,
})

