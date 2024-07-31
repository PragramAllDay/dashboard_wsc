"use client";

import { modalUserField, modalUserTitle } from "@/utils/data/modal/store-admin";
import { userCells, userColumns } from "@/utils/data/table/store-admin";
import { initialUserState } from "@/utils/data/initial-state/store-owner";
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
import { UserType } from "@/utils/types/user";
import { addUser, deleteUser, getUserList, updateUser } from "@/store/slice/store-owner/users";


export default function User() {
    const pagination: PaginationType = useSelector((state) => state.userReducer.pagination);
    const Users: UserType[] = useSelector((state) => state.userReducer.list);
    const [editUser, setEditUser] = useState<UserType>(initialUserState);
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
                    dispatch(getUserList({ list: limitedData, newPagination }))
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (pagination && User.length === 0 && data?.length !== 0) {
            fetchStores();
        }
    }, [dispatch, pagination, data]);

    const handleToggle = () => {
        setIsModal(!isModal);

        if (editUser.status) {
            setEditUser(initialUserState);
        }
    };

    const handleAdd = async (values: any) => {
        try {
            const uuId = crypto.randomUUID()
            values.id = uuId
            await postStores(values)
            dispatch(addUser(values))
            setIsModal(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async (values: any) => {
        try {
            await patchStores(values)
            dispatch(updateUser(values))
            setIsModal(false);
            setEditUser(initialUserState);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteStores(id)
            dispatch(deleteUser(id))
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id: string) => {
        const user = Users?.find((perm: any) => perm.id === id);

        if (user) {
            setIsModal(true);
            setEditUser({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                username: user.username,
                password: user.password,
                rePassword: user.rePassword,
                catalogCategories: user.catalogCategories,
                catalogAttributes: user.catalogAttributes,
                catalogProducts: user.catalogProducts,
                catalogStockLog: user.catalogStockLog,
                salesAndOrderWholesale: user.salesAndOrderWholesale,
                salesAndOrderDropship: user.salesAndOrderDropship,
                salesAndOrderCashAndCarry: user.salesAndOrderCashAndCarry,
                salesAndOrderMakeReceiptCAndC: user.salesAndOrderMakeReceiptCAndC,
                salesAndOrderMakeReceiptWeb: user.salesAndOrderMakeReceiptWeb,
                salesAndOrderCreditNote: user.salesAndOrderCreditNote,
                salesAndOrderPurchaseOrder: user.salesAndOrderPurchaseOrder,
                backOrdersWholesale: user.backOrdersWholesale,
                backOrdersDropship: user.backOrdersDropship,
                supplierInvoices: user.supplierInvoices,
                supplierPayment: user.supplierPayment,
                supplierCreditNote: user.supplierCreditNote,
                supplierDebitNote: user.supplierDebitNote,
                supplierOrder: user.supplierOrder,
                supplierLedger: user.supplierLedger,
                supplierAnalytics: user.supplierAnalytics,
                cmsCmpPage: user.cmsCmpPage,
                accountWebSaleReport: user.accountWebSaleReport,
                accountCashCarryReport: user.accountCashCarryReport,
                accountSalesAgentReport: user.accountSalesAgentReport,
                accountReceiptRightsCC: user.accountReceiptRightsCC,
                accountReceiptRightsWeb: user.accountReceiptRightsWeb,
                accountChequeSupplier: user.accountChequeSupplier,
                accountCashRegister: user.accountCashRegister,
                accountExpenditures: user.accountExpenditures,
                accountExpendituresPayment: user.accountExpendituresPayment,
                cmsNewsLetter: user.cmsNewsLetter,
                status: true,
            });
        }
    };

    const renderCell = (rowData: any, name: string, index: number) => {
        if (name === "id") {
            return index + 1;
        }

        if (name === "name") {
            return `${rowData['firstName']} ${rowData['lastName']}`
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


    return (
        <PageContainer title="User" description="This is User">
            <Box mt={3}>
                <ReusableTable2
                    columns={userColumns}
                    cells={userCells}
                    title={"User"}
                    rows={Users}
                    pagination={pagination}
                    handleEdit={handleEdit}
                    handleCreate={handleToggle}
                    handleDelete={handleDelete}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />
                {isModal && (
                    <ReusableModal
                        handleSubmit={editUser.status ? handleUpdate : handleAdd}
                        handleToggle={handleToggle}
                        handleModalFieldOnChange={handleModalFieldOnChange}
                        editData={editUser}
                        modalFields={modalUserField}
                        isModal={isModal}
                        title={
                            editUser.status
                                ? modalUserTitle[ModalMod.EDIT]
                                : modalUserTitle[ModalMod.NEW]
                        }
                    />
                )}
            </Box>
        </PageContainer>
    );
}

