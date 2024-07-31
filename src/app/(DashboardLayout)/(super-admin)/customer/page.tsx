"use client";
import { useDeleteCustomerMutation, useGetCustomersQuery, usePatchCustomerMutation, usePostCustomerMutation } from "@/store/slice/api/super-admin/customer";
import { addCustomer, deleteCustomerOnID, getCustomerList, updateCustomer } from "@/store/slice/super-admin/customer";
import { modalCustomerListFields, modalCustomerListTitle } from "@/utils/data/modal/super-admin";
import { customerListCells, customerListColumns } from "@/utils/data/table/super-admin";
import { initialCustomerState } from "@/utils/data/initial-state/super-admin";
import { customerFilterField } from "@/utils/data/table-filter/super-admin";
import PageContainer from "@/components/container/PageContainer";
import ReusableTable2 from "@/components/reusable-table-2";
import { PaginationType } from "@/utils/types/pagination";
import { useDispatch, useSelector } from "@/store/hooks";
import ReusableModal from "@/components/reusable-modal";
import { CustomerType } from "@/utils/types/stores";
import { useEffect, useState } from "react";
import { ModalMod } from "@/utils/enum";
import Box from "@mui/material/Box";


export default function Customer() {
    const { data, error, isLoading } = useGetCustomersQuery()
    const [postCustomer] = usePostCustomerMutation();
    const [patchCustomer] = usePatchCustomerMutation();
    const [deleteCustomer] = useDeleteCustomerMutation()

    const [isModal, setIsModal] = useState<boolean>(false);
    const pagination: PaginationType = useSelector((state) => state.customerReducer.customerPagination)
    const customerList: CustomerType[] = useSelector((state) => state.customerReducer.customerList)
    const dispatch = useDispatch()
    const [editStore, setEditStore] = useState<CustomerType>(initialCustomerState);

    useEffect(() => {
        const fetchCustomerList = async () => {
            try {
                if (data) {
                    const newPagination = {
                        page: 1,
                        totalSize: data.length,
                        rowsPerPage: 10,
                    }
                    const limitedData = data.slice(0, newPagination.rowsPerPage)
                    dispatch(getCustomerList({ list: limitedData, newPagination }))
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (pagination && customerList.length === 0 && data?.length !== 0) {
            fetchCustomerList();
        }
    }, [dispatch, pagination, data]);

    const handleToggle = () => {
        setIsModal(!isModal);

        if (editStore.status) {
            setEditStore(initialCustomerState);
        }
    };

    const handleAdd = async (values: any) => {
        try {
            const uuId = crypto.randomUUID()
            values.id = uuId
            await postCustomer(values)
            console.log(values)
            dispatch(addCustomer(values))
            setIsModal(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async (values: any) => {
        try {
            await patchCustomer(values)
            dispatch(updateCustomer(values))
            setIsModal(false);
            setEditStore(initialCustomerState);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteCustomer(id)
            dispatch(deleteCustomerOnID(id))
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id: string) => {
        const customer = customerList?.find((perm: any) => perm.id === id);

        if (customer) {
            setIsModal(true);
            setEditStore({
                id: customer.id,
                title: customer.title,
                saleAgentCode: customer.saleAgentCode,
                firstName: customer.firstName,
                lastName: customer.lastName,
                companyName: customer.companyName,
                companyVat: customer.companyVat,
                companyRegistration: customer.companyRegistration,
                website: customer.website,
                vat: customer.vat,
                discount: customer.discount,
                contactPerson: customer.contactPerson,
                telephone: customer.telephone,
                country: customer.country,
                state: customer.state,
                city: customer.city,
                postCode: customer.postCode,
                address: customer.address,
                email: customer.email,
                isNewsLetter: false,
                ebay: "Not applicable",
                amazon: "Not applicable	",
                saleYear: 0,
                saleToDate: 0,
                status: true,
            });
        }
    };

    const renderCell = (rowData: any, name: string, index: number) => {
        if (name === "id") {
            return index + 1;
        }
        if (name == "name") {
            return rowData['firstName'] + rowData['lastName']
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
        <PageContainer title="Customer" description="this is Customer">
            <Box mt={3}>
                <ReusableTable2
                    filterFieldList={customerFilterField}
                    columns={customerListColumns}
                    cells={customerListCells}
                    pagination={pagination}
                    rows={customerList}
                    title={"Customer"}
                    handleEdit={handleEdit}
                    handleCreate={handleToggle}
                    handleDelete={handleDelete}
                    handleFilter={handleFilter}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    handleFilterFieldOnChange={handleFilterFieldOnChange}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />

                {isModal && (
                    <ReusableModal
                        title={
                            editStore.status
                                ? modalCustomerListTitle[ModalMod.EDIT]
                                : modalCustomerListTitle[ModalMod.NEW]
                        }
                        modalFields={modalCustomerListFields}
                        isModal={isModal}
                        editData={editStore}
                        handleToggle={handleToggle}
                        handleModalFieldOnChange={handleModalFieldOnChange}
                        handleSubmit={editStore.status ? handleUpdate : handleAdd}
                    />
                )}
            </Box>
        </PageContainer>
    );
}

