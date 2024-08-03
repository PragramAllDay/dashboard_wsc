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


export const backOrderListColumns: CellType[] = [
    { id: 1, name: "ID" },
    { id: 2, name: "Product Name" },
    { id: 3, name: "Sku" },
    { id: 4, name: "Users" },
    { id: 5, name: "Existing Quantity" },
    { id: 6, name: "Requested Quantity" },
]

export const backOrderListCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "name" },
    { id: 3, name: "sku" },
    { id: 4, name: "usersNo" },
    { id: 5, name: "existing" },
    { id: 6, name: "requestedQuantity" },
]


export const userColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Name" },
    { id: 3, name: "Email" },
    { id: 4, name: "Phone" },
    { id: 5, name: "Action" },
]

export const userCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "name" },
    { id: 3, name: "email" },
    { id: 4, name: "phone" },
]

export const wholeSaleLocalListColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Post Code" },
    { id: 3, name: "Free Shipping" },
    { id: 4, name: "Plan B" },
    { id: 5, name: "Plan C" },
    { id: 6, name: "Plan B" },
]


export const wholeSaleLocalListCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "postCode" },
    { id: 3, name: "freeShipping" },
    { id: 4, name: "planB" },
    { id: 5, name: "planC" },
    { id: 6, name: "planD" },
]



export const wholeSaleInternationalListColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Post Code" },
    { id: 3, name: "Free Shipping" },
    { id: 4, name: "Plan B" },
    { id: 5, name: "Plan C" },
    { id: 6, name: "Plan B" },
]


export const wholeSaleInternationalListCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "postCode" },
    { id: 3, name: "freeShipping" },
    { id: 4, name: "planB" },
    { id: 5, name: "planC" },
    { id: 6, name: "planD" },
]

export const manageGalleriesColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Name" },
    { id: 6, name: "Action" },
]

export const manageGalleriesCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "name" },
]


export const managePagesColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Title" },
    { id: 3, name: "Contents" },
    { id: 6, name: "Action" },
]

export const managePagesCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "title" },
    { id: 2, name: "contents" },
]


export const storeBannerColumns: CellType[] = [
    { id: 1, name: "Id" },
    // { id: 2, name: "Image" },
    { id: 2, name: "Url Link" },
    { id: 3, name: "Sort Order" },
    { id: 6, name: "Action" },
]

export const storeBannerCells: CellType[] = [
    { id: 1, name: "id" },
    // { id: 2, name: "image" },
    { id: 2, name: "linkUrl" },
    { id: 3, name: "sortOrder" },
]


export const homeBiggerImageColumns: CellType[] = [
    { id: 1, name: "Id" },
    // { id: 2, name: "Image" },
    { id: 2, name: "Alt" },
    { id: 3, name: "Url" },
    // { id: 6, name: "Action" },
]

export const homeBiggerImageCells: CellType[] = [
    { id: 1, name: "id" },
    // { id: 2, name: "image" },
    { id: 2, name: "alt" },
    { id: 3, name: "linkUrl" },
]



export const homeSmallImageColumns: CellType[] = [
    { id: 1, name: "Id" },
    // { id: 2, name: "Image" },
    { id: 2, name: "Alt" },
    { id: 3, name: "Url" },
    { id: 3, name: "Sort Order" },
    // { id: 6, name: "Action" },
]

export const homeSmallImageCells: CellType[] = [
    { id: 1, name: "id" },
    // { id: 2, name: "image" },
    { id: 2, name: "alt" },
    { id: 3, name: "linkUrl" },
    { id: 4, name: "sortOrder" },
]

export const homeBannerImageColumns: CellType[] = [
    { id: 1, name: "Id" },
    // { id: 2, name: "Image" },
    { id: 2, name: "Alt" },
    { id: 3, name: "Url" },
    { id: 3, name: "Sort Order" },
    // { id: 6, name: "Action" },
]

export const homeBannerImageCells: CellType[] = [
    { id: 1, name: "id" },
    // { id: 2, name: "image" },
    { id: 2, name: "alt" },
    { id: 3, name: "linkUrl" },
    { id: 4, name: "sortOrder" },
]


export const receiptColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "RCPT#" },
    { id: 3, name: "Order" },
    { id: 4, name: "Date" },
    { id: 5, name: "Customer Name" },
    { id: 6, name: "Company" },
    { id: 7, name: "Amount" },
    { id: 8, name: "Payment Method" },
    { id: 9, name: "Description" },
]

export const receiptCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "rcpt" },
    { id: 3, name: "order" },
    { id: 4, name: "date" },
    { id: 5, name: "customerName" },
    { id: 6, name: "company" },
    { id: 7, name: "amount" },
    { id: 8, name: "paymentMethod" },
    { id: 9, name: "description" },
]

export const chequeToSupplierColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Cheque" },
    { id: 3, name: "Supplier" },
    { id: 4, name: "Issue Date" },
    { id: 5, name: "Cheque Date" },
    { id: 6, name: "Amount" },
    { id: 7, name: "Date Created" },
]

export const chequeToSupplierCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "cheque" },
    { id: 3, name: "supplier" },
    { id: 4, name: "issueDate" },
    { id: 5, name: "chequeDate" },
    { id: 6, name: "amount" },
    { id: 7, name: "dateCreated" },
]


export const cashRegisterColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Date" },
    { id: 3, name: "User" },
    { id: 4, name: "Opening Balance" },
    { id: 5, name: "Cash Sale" },
    { id: 6, name: "Closing" },
]

export const cashRegisterCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "date" },
    { id: 3, name: "user" },
    { id: 4, name: "openingBalance" },
    { id: 5, name: "cashSale" },
    { id: 6, name: "closing" },
]


export const allSupplierColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Supplier" },
    { id: 3, name: "Reg" },
    { id: 4, name: "Vat" },
    { id: 5, name: "Website" },
    { id: 6, name: "Of Products" },
    { id: 7, name: "Of Invoices" },
    { id: 8, name: "Of Credit Notes" },
]

export const allSupplierCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "supplier" },
    { id: 3, name: "reg" },
    { id: 4, name: "vat" },
    { id: 5, name: "website" },
    { id: 6, name: "ofProducts" },
    { id: 7, name: "ofInvoice" },
    { id: 8, name: "ofCreditNote" },
]


export const invoicesColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Our Ref" },
    { id: 3, name: "INV" },
    { id: 4, name: "INV. Date" },
    { id: 5, name: "Delivery Date" },
    { id: 6, name: "Supplier" },
    { id: 7, name: "Sub Total Standard" },
    { id: 8, name: "Sub Total Zero Rated" },
    { id: 9, name: "VAT" },
    { id: 10, name: "Total" },
    { id: 11, name: "Paid" },
    { id: 12, name: "Due Date" },
    { id: 13, name: "Status" },
    { id: 13, name: "Action" },
]



export const invoicesCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "ourRef" },
    { id: 3, name: "invoiceNo" },
    { id: 4, name: "invoiceDate" },
    { id: 5, name: "deliveryDate" },
    { id: 6, name: "supplier" },
    { id: 7, name: "subTotalStandard" },
    { id: 8, name: "subTotalZeroRated" },
    { id: 9, name: "vat" },
    { id: 10, name: "total" },
    { id: 11, name: "paid" },
    { id: 12, name: "dueDate" },
    { id: 13, name: "invoiceStatus" },
]


export const paymentColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Our Ref" },
    { id: 3, name: "INV." },
    { id: 4, name: "Date" },
    { id: 5, name: "Supplier" },
    { id: 6, name: "Amount" },
    { id: 7, name: "Payment Method" },
    { id: 8, name: "Description" },
    { id: 9, name: "Notes" },
    { id: 10, name: "Action" },
]

export const paymentCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "Our Ref" },
    { id: 3, name: "INV." },
    { id: 4, name: "paymentDate" },
    { id: 5, name: "supplier" },
    { id: 6, name: "amount" },
    { id: 7, name: "paymentMethod" },
    { id: 8, name: "description" },
    { id: 9, name: "note" },
]


export const creditNoteColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "CR" },
    { id: 2, name: "Date" },
    { id: 2, name: "Supplier Name" },
    { id: 2, name: "Sub-Total" },
    { id: 2, name: "Vat" },
    { id: 2, name: "Others" },
    { id: 2, name: "Others Amount" },
    { id: 2, name: "Amount" },
    { id: 2, name: "Adjusted" },
    { id: 2, name: "Payment Ref" },
    // { id: 6, name: "Action" },
]

export const creditNoteCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "creditNote" },
    { id: 2, name: "date" },
    { id: 2, name: "supplierName" },
    { id: 2, name: "subTotal" },
    { id: 2, name: "vat" },
    { id: 2, name: "others" },
    { id: 2, name: "othersAmount" },
    { id: 2, name: "amount" },
    { id: 2, name: "adjusted" },
    { id: 2, name: "paymentRef" },
]


export const debitNotesColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "CR" },
    { id: 2, name: "Date" },
    { id: 2, name: "Supplier Name" },
    { id: 2, name: "Sub-Total" },
    { id: 2, name: "Vat" },
    { id: 2, name: "Others" },
    { id: 2, name: "Others Amount" },
    { id: 2, name: "Amount" },
    { id: 2, name: "Adjusted" },
    { id: 2, name: "Payment Ref" },
    // { id: 6, name: "Action" },
]

export const debitNotesCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "creditNote" },
    { id: 2, name: "date" },
    { id: 2, name: "supplierName" },
    { id: 2, name: "subTotal" },
    { id: 2, name: "vat" },
    { id: 2, name: "others" },
    { id: 2, name: "othersAmount" },
    { id: 2, name: "amount" },
    { id: 2, name: "adjusted" },
    { id: 2, name: "paymentRef" },
]

export const supplierOrderColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Date" },
    { id: 3, name: "Supplier" },
    { id: 4, name: "Amount EV" },
    { id: 5, name: "Vat" },
    { id: 6, name: "Amount IV" },
    { id: 7, name: "Status" },
    // { id: 6, name: "Action" },
]

export const supplierOrderCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "date" },
    { id: 3, name: "supplier" },
    { id: 4, name: "amountEV" },
    { id: 5, name: "vat" },
    { id: 6, name: "amountIV" },
    { id: 7, name: "orderStatus" },
]


export const allOrderColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Invoice" },
    { id: 3, name: "Date" },
    { id: 4, name: "Ref" },
    { id: 5, name: "Customer" },
    { id: 6, name: "Email" },
    { id: 7, name: "Sub-Total Standard" },
    { id: 8, name: "Sub-Total Zero Rated" },
    { id: 9, name: "Vat" },
    { id: 10, name: "Discount" },
    { id: 11, name: "Shipping" },
    { id: 12, name: "Amount" },
    { id: 13, name: "Remaining" },
    { id: 14, name: "Status" },
    { id: 15, name: "Pmt. Date" },
]


export const allOrderCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "invoiceNo" },
    { id: 3, name: "date" },
    { id: 4, name: "refund" },
    { id: 5, name: "customer" },
    { id: 6, name: "email" },
    { id: 7, name: "subTotalStandard" },
    { id: 8, name: "subTotalStandard" },
    { id: 9, name: "vat" },
    { id: 10, name: "discount" },
    { id: 11, name: "shipping" },
    { id: 12, name: "amount" },
    { id: 13, name: "remaining" },
    { id: 14, name: "orderStatus" },
    { id: 15, name: "pmtdate" },
]




export const webSiteOrderColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Order" },
    { id: 3, name: "Date" },
    { id: 4, name: "Customer" },
    { id: 5, name: "Sub-Total Standard" },
    { id: 6, name: "Sub-Total Zero Rated" },
    { id: 7, name: "Vat" },
    { id: 8, name: "Shipping" },
    { id: 9, name: "Discount" },
    { id: 10, name: "Amount" },
    { id: 11, name: "Remaining" },
    { id: 12, name: "Refund" },
    { id: 13, name: "Payment" },
    { id: 14, name: "Paid" },
    { id: 15, name: "Printed" },
    { id: 16, name: "Shipped" },
]


export const webSiteOrderCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "orderNo" },
    { id: 3, name: "date" },
    { id: 4, name: "customer" },
    { id: 5, name: "subTotalStandard" },
    { id: 6, name: "subTotalZeroRated" },
    { id: 7, name: "vat" },
    { id: 8, name: "shipping" },
    { id: 9, name: "discount" },
    { id: 10, name: "amount" },
    { id: 11, name: "remaining" },
    { id: 12, name: "refund" },
    { id: 13, name: "payment" },
    { id: 14, name: "paid" },
    { id: 15, name: "printed" },
    { id: 16, name: "shipped" },
]



export const cashAndCarryOrderColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Invoice" },
    { id: 3, name: "Date" },
    { id: 4, name: "Ref" },
    { id: 5, name: "Customer" },
    { id: 6, name: "Email" },
    { id: 7, name: "Sub-Total Standard" },
    { id: 8, name: "Sub-Total Zero Rated" },
    { id: 9, name: "Vat" },
    { id: 10, name: "Discount" },
    { id: 11, name: "Shipping" },
    { id: 12, name: "Amount" },
    { id: 13, name: "Remaining" },
    { id: 14, name: "Status" },
    { id: 15, name: "Pmt. Date" },
]


export const cashAndCarryOrderCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "invoiceNo" },
    { id: 3, name: "date" },
    { id: 4, name: "refund" },
    { id: 5, name: "customer" },
    { id: 6, name: "email" },
    { id: 7, name: "subTotalStandard" },
    { id: 8, name: "subTotalStandard" },
    { id: 9, name: "vat" },
    { id: 10, name: "discount" },
    { id: 11, name: "shipping" },
    { id: 12, name: "amount" },
    { id: 13, name: "remaining" },
    { id: 14, name: "orderStatus" },
    { id: 15, name: "pmtdate" },
]


export const saleOrderCreditNoteColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "CR" },
    { id: 3, name: "Date" },
    { id: 4, name: "Customer Name" },
    { id: 5, name: "Company" },
    { id: 6, name: "Sub-Total Standard" },
    { id: 7, name: "Vat" },
    { id: 8, name: "Others" },
    { id: 9, name: "Others Amount" },
    { id: 10, name: "Amount" },
    { id: 11, name: "Adjusted" },
    { id: 12, name: "Payment Ref" },
    { id: 13, name: "Payment Method" },
    // { id: 6, name: "Action" },
]

export const saleOrderCreditNoteCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "creditNote" },
    { id: 3, name: "date" },
    { id: 4, name: "customerName" },
    { id: 5, name: "company" },
    { id: 6, name: "subTotal" },
    { id: 7, name: "vat" },
    { id: 8, name: "others" },
    { id: 9, name: "othersAmount" },
    { id: 10, name: "amount" },
    { id: 11, name: "adjusted" },
    { id: 12, name: "paymentRef" },
    { id: 13, name: "paymentMethod" },
]


export const badDebtsCellsColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "Name" },
    { id: 2, name: "Company" },
    { id: 2, name: "Email" },
    { id: 2, name: "Total" },
]

export const badDebtsCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "name" },
    { id: 3, name: "company" },
    { id: 4, name: "email" },
    { id: 5, name: "total" },
]


export const monthWiseSaleCellsColumns: CellType[] = [
    { id: 1, name: "Id" },
    // { id: 2, name: "IMG" },
    { id: 3, name: "Product Code" },
    { id: 4, name: "Product Name" },
    { id: 5, name: "Attribute" },
    { id: 6, name: "Sale" },
    { id: 7, name: "stock" },
]

export const monthWiseSaleCells: CellType[] = [
    { id: 1, name: "id" },
    // { id: 2, name: "image" },
    { id: 3, name: "code" },
    { id: 4, name: "name" },
    { id: 5, name: "attribute" },
    { id: 6, name: "sale" },
    { id: 7, name: "stock" },
]


export const purchaseOrderColumns: CellType[] = [
    { id: 1, name: "Id" },
    { id: 2, name: "PO Number" },
    { id: 3, name: "Date" },
    { id: 4, name: "Customer" },
    { id: 5, name: "Email" },
    { id: 6, name: "PO Date" },
    { id: 7, name: "Exp. Coll. Date" },
    { id: 8, name: "Coll. Date" },
    { id: 9, name: "Invoice" },
    { id: 10, name: "Source" },
    { id: 11, name: "Contact" },
    { id: 12, name: "Comments" },
]

export const purchaseOrderCells: CellType[] = [
    { id: 1, name: "id" },
    { id: 2, name: "poNumber" },
    { id: 3, name: "date" },
    { id: 4, name: "customer" },
    { id: 5, name: "email" },
    { id: 6, name: "poDate" },
    { id: 7, name: "expCollDate" },
    { id: 8, name: "collDate" },
    { id: 9, name: "invoiceNo" },
    { id: 10, name: "source" },
    { id: 11, name: "contact" },
    { id: 12, name: "comments" },
]


