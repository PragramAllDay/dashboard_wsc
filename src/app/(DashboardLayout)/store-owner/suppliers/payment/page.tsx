"use client";

import { modalPaymentField, modalPaymentTitle } from "@/utils/data/modal/store-admin";
import { paymentCells, paymentColumns } from "@/utils/data/table/store-owner";
import { initialPaymentState } from "@/utils/data/initial-state/store-owner";
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
import { paymentFilterField } from "@/utils/data/table-filter/store-owner";
import { PaymentType } from "@/utils/types/supplier";
import { addPayment, deletePayment, getPaymentList, updatePayment } from "@/store/slice/store-owner/suppliers/payment";


export default function Payment() {
    const pagination: PaginationType = useSelector((state) => state.paymentReducer.pagination);
    const paymentList: PaymentType[] = useSelector((state) => state.paymentReducer.list);
    const [editPayment, setEditPayment] = useState<PaymentType>(initialPaymentState);
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
                    dispatch(getPaymentList({ list: limitedData, newPagination }))
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (pagination && paymentList.length === 0 && data?.length !== 0) {
            fetchStores();
        }
    }, [dispatch, pagination, data]);

    const handleToggle = () => {
        setIsModal(!isModal);

        if (editPayment.status) {
            setEditPayment(initialPaymentState);
        }
    };

    const handleAdd = async (values: any) => {
        try {
            const uuId = crypto.randomUUID()
            values.id = uuId
            await postStores(values)
            dispatch(addPayment(values))
            setIsModal(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async (values: any) => {
        try {
            await patchStores(values)
            dispatch(updatePayment(values))
            setIsModal(false);
            setEditPayment(initialPaymentState);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteStores(id)
            dispatch(deletePayment(id))
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id: string) => {
        const payment = paymentList?.find((perm: any) => perm.id === id);

        if (payment) {
            setIsModal(true);
            setEditPayment({
                id: payment.id,
                supplier: payment.supplier,
                amount: payment.amount,
                creditNote: payment.creditNote,
                debitNote: payment.debitNote,
                total: payment.total,
                paymentDate: payment.paymentDate,
                description: payment.description,
                note: payment.note,
                attachment: payment.attachment,
                paymentMethod: payment.paymentMethod,
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
        <PageContainer title="Manage Payment" description="This is Payment">
            <Box mt={3}>
                <ReusableTable2
                    filterFieldList={paymentFilterField}
                    columns={paymentColumns}
                    cells={paymentCells}
                    title={"Payment"}
                    rows={paymentList}
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
                        handleSubmit={editPayment.status ? handleUpdate : handleAdd}
                        handleToggle={handleToggle}
                        handleModalFieldOnChange={handleModalFieldOnChange}
                        editData={editPayment}
                        modalFields={modalPaymentField}
                        isModal={isModal}
                        title={
                            editPayment.status
                                ? modalPaymentTitle[ModalMod.EDIT]
                                : modalPaymentTitle[ModalMod.NEW]
                        }
                    />
                )}
            </Box>
        </PageContainer>
    );
}

