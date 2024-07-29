import { CellType } from "@/utils/types/table"

export const manageCategoryColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Title" },
    { id: 6, name: "Action" },
]

export const manageCategoryCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "name" },
]


export const manageAttributeColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Name" },
    { id: 3, name: "Action" },
]

export const manageAttributeCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "name" },
]

export const manageProductCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "name" },
    { id: 3, name: "createdOn" },
    { id: 4, name: "isle" },
    { id: 5, name: "productCode" },
    { id: 6, name: "customsCode" },
    { id: 7, name: "weight" },
    { id: 8, name: "origin" },
    { id: 9, name: "range" },
    { id: 10, name: "variations" },
    { id: 11, name: "stock" },
    { id: 12, name: "pack" },
]

export const manageProductColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Name" },
    { id: 3, name: "Created On" },
    { id: 4, name: "ISLE" },
    { id: 5, name: "Product Code" },
    { id: 6, name: "Custom Code" },
    { id: 7, name: "Weight(G)" },
    { id: 8, name: "Origin" },
    { id: 9, name: "Range" },
    { id: 10, name: "Variations" },
    { id: 11, name: "Stock" },
    { id: 12, name: "Pack" },
    { id: 13, name: "Action" },
]

export const customerListColumns: CellType[] = [
    { id: 1, name: "ID" },
    { id: 2, name: "Name" },
    { id: 3, name: "Company" },
    { id: 4, name: "Sale year" },
    { id: 5, name: "Sale To date" },
]

export const customerListCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "name" },
    { id: 3, name: "companyName" },
    { id: 4, name: "saleYear" },
    { id: 5, name: "saleToDate" },
]


export const SalesAgentColumns: CellType[] = [
    { id: 1, name: "Name" },
    { id: 2, name: "Email" },
    { id: 3, name: "Reference_code" },
    { id: 4, name: "Commission" },
    { id: 5, name: "Action" },
]

export const SalesAgentCells: CellType[] = [
    { id: 1, name: "name" },
    { id: 2, name: "email" },
    { id: 3, name: "referenceCode" },
    { id: 4, name: "commission" },
]
