"use client";

import { modalInvoicesField, modalInvoicesTitle } from "@/utils/data/modal/store-admin";
import { invoicesCells, invoicesColumns } from "@/utils/data/table/store-owner";
import { initialInvoicesState } from "@/utils/data/initial-state/store-owner";
import PageContainer from "@/components/container/PageContainer";
import ReusableTable2 from "@/components/reusable-table-2";
import { PaginationType } from "@/utils/types/pagination";
import { useDispatch, useSelector } from "@/store/hooks";
import ReusableModal from "@/components/reusable-modal";
import { useEffect, useState } from "react";
import { ModalMod } from "@/utils/enum";
import Box from "@mui/material/Box";
import {
    useDeleteStoresMutation,
    useGetStoresQuery,
    usePatchStoresMutation,
    usePostStoresMutation
} from "@/store/slice/api/super-admin/store";
import { invoicesFilterField } from "@/utils/data/table-filter/store-owner";
import { addInvoice, deleteInvoice, getInvoiceList, updateInvoice } from "@/store/slice/store-owner/suppliers/invoices";
import { InvoicesType } from "@/utils/types/supplier";


export default function Invoices() {
    const invoicesList: InvoicesType[] = useSelector((state) => state.invoiceReducer.list);
    const pagination: PaginationType = useSelector((state) => state.invoiceReducer.pagination);
    const [editInvoices, setEditInvoices] = useState<InvoicesType>(initialInvoicesState);
    const [isModal, setIsModal] = useState<boolean>(false);

    const { data, error, isLoading } = useGetStoresQuery();
    const [deleteStores] = useDeleteStoresMutation();
    const [patchStores] = usePatchStoresMutation();
    const [postStores] = usePostStoresMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchStores = async () => {
            try {
                if (data) {
                    const newPagination = {
                        page: 1,
                        totalSize: data.length,
                        rowsPerPage: 10,
                    }
                    const limitedData = data.slice(0, newPagination.rowsPerPage)
                    dispatch(getInvoiceList({ list: limitedData, newPagination }))
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (pagination && invoicesList.length === 0 && data?.length !== 0) {
            fetchStores();
        }
    }, [dispatch, pagination, data]);

    const handleToggle = () => {
        setIsModal(!isModal);

        if (editInvoices.status) {
            setEditInvoices(initialInvoicesState);
        }
    };

    const handleAdd = async (values: any) => {
        try {
            const uuId = crypto.randomUUID()
            values.id = uuId
            await postStores(values)
            dispatch(addInvoice(values))
            setIsModal(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async (values: any) => {
        try {
            await patchStores(values)
            dispatch(updateInvoice(values))
            setIsModal(false);
            setEditInvoices(initialInvoicesState);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteStores(id)
            dispatch(deleteInvoice(id))
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id: string) => {
        const invoice = invoicesList?.find((perm: any) => perm.id === id);

        if (invoice) {
            setIsModal(true);
            setEditInvoices({
                id: invoice.id,
                supplier: invoice.supplier,
                invoiceNo: invoice.invoiceNo,
                accountNo: invoice.accountNo,
                subTotalStandard: invoice.subTotalStandard,
                subTotalZeroRated: invoice.subTotalZeroRated,
                vat: invoice.vat,
                total: invoice.total,
                invoiceDate: invoice.invoiceDate,
                dueDate: invoice.dueDate,
                deliveryDate: invoice.deliveryDate,
                description: invoice.description,
                notes: invoice.notes,
                attachInvoice: invoice.attachInvoice,
                attachDeliveryNote: invoice.attachDeliveryNote,
                status: true,
            });
        }
    };

    const renderCell = (rowData: any, name: string, index: number) => {
        if (name === "id") {
            return index + 1;
        }

        return rowData[name as never];
    };

    const handleModalFieldOnChange = (
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

    const handleChangePage = async (evt: any, value: number) => {
        try {
            // const { performanceList, newPagination } = await getStore({ ...pagination, page: value });
            // dispatch(GetStoreList({ performanceList, newPagination }))
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeRowsPerPage = async (evt: any) => {
        try {
            // const { performanceList, newPagination } = await getStore({ ...pagination, rowsPerPage: parseInt(evt.target.value) });
            // dispatch(GetStoreList({ performanceList, newPagination }))
        } catch (error) {
            console.log(error);
        }
    };

    const handleFilter = (evt: any) => {
        evt.preventDefault()
        //Filter
    }

    const handleFilterFieldOnChange = (
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


    return (
        <PageContainer title="Manage Invoices" description="This is Invoices">
            <Box mt={3}>
                <ReusableTable2
                    filterFieldList={invoicesFilterField}
                    columns={invoicesColumns}
                    cells={invoicesCells}
                    title={"Invoice"}
                    rows={invoicesList}
                    pagination={pagination}
                    handleEdit={handleEdit}
                    handleCreate={handleToggle}
                    handleDelete={handleDelete}
                    handleFilter={handleFilter}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    handleFilterFieldOnChange={handleFilterFieldOnChange}
                />
                {isModal && (
                    <ReusableModal
                        handleSubmit={editInvoices.status ? handleUpdate : handleAdd}
                        handleToggle={handleToggle}
                        handleModalFieldOnChange={handleModalFieldOnChange}
                        editData={editInvoices}
                        modalFields={modalInvoicesField}
                        isModal={isModal}
                        title={
                            editInvoices.status
                                ? modalInvoicesTitle[ModalMod.EDIT]
                                : modalInvoicesTitle[ModalMod.NEW]
                        }
                    />
                )}
            </Box>
        </PageContainer>
    );
}

