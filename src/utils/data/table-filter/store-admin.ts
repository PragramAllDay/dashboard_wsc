import { FieldType } from "@/utils/types/modal";

export const manageAttributeFilterField: FieldType[] = [
    {
        id: 1,
        title: "Search:",
        alias: "search",
        column: 3,
        type: "text",
    },
]


export const manageProductFilterField: FieldType[] = [
    {
        id: 1,
        title: "Search:",
        alias: "search",
        column: 3,
        type: "text",
    },
]

export const customerFilterField: FieldType[] = [
    {
        id: 1,
        title: "Search:",
        alias: "search",
        column: 3,
        type: "text",
        placeholder: "Customer name, email, postcode"
    },
]


export const salesAgentFilterField: FieldType[] = [
    {
        id: 1,
        title: "Search:",
        alias: "search",
        column: 3,
        type: "text",
        placeholder: "Sales agent name"
    },
]