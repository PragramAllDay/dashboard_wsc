"use client";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import PageContainer from "@/components/container/PageContainer";
import { customerFilterField, customerListCells, customerListColumns } from "@/utils/data/table";
import { useDispatch, useSelector } from "@/store/hooks";
import { addCustomer, deleteCustomerOnID, getCustomerList, updateCustomer } from "@/store/slice/super-admin/customer";
import { PaginationType } from "@/utils/types/pagination";
import ReusableModal from "@/components/reusable-modal";
import ReusableTable2 from "@/components/reusable-table-2";
import { modalCustomerListFields, modalCustomerListTitle } from "@/utils/data/modal";
import { ModalMod } from "@/utils/enum";
import { CustomerType } from "@/utils/types/stores";
import { useDeleteCustomerMutation, useGetCustomersQuery, usePatchCustomerMutation, usePostCustomerMutation } from "@/store/slice/api/customer";

export default function Customer() {
    const { data, error, isLoading } = useGetCustomersQuery()
    const [postCustomer] = usePostCustomerMutation();
    const [patchCustomer] = usePatchCustomerMutation();
    const [deleteCustomer] = useDeleteCustomerMutation()

    const [isModal, setIsModal] = useState<boolean>(false);
    const pagination: PaginationType = useSelector((state) => state.customerReducer.customerPagination)
    const customerList: CustomerType[] = useSelector((state) => state.customerReducer.customerList)
    const dispatch = useDispatch()
    const [editStore, setEditStore] = useState<CustomerType>({
        id: "",
        title: "",
        saleAgentCode: "",
        firstName: "",
        lastName: "",
        companyName: "",
        companyVat: "",
        companyRegistration: "",
        website: "",
        vat: false,
        discount: "",
        contactPerson: "",
        telephone: "",
        country: "",
        state: "",
        city: "",
        postCode: "",
        address: "",
        email: "",
        isNewsLetter: false,
        ebay: "Not applicable",
        amazon: "Not applicable	",
        saleYear: 0,
        saleToDate: 0,
        status: false,
    });

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
            setEditStore({
                id: "",
                title: "",
                saleAgentCode: "",
                firstName: "",
                lastName: "",
                companyName: "",
                companyVat: "",
                companyRegistration: "",
                website: "",
                vat: false,
                discount: "",
                contactPerson: "",
                telephone: "",
                country: "",
                state: "",
                city: "",
                postCode: "",
                address: "",
                email: "",
                isNewsLetter: false,
                ebay: "Not applicable",
                amazon: "Not applicable	",
                saleYear: 0,
                saleToDate: 0,
                status: false,
            });
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
            setEditStore({
                id: "",
                title: "",
                saleAgentCode: "",
                firstName: "",
                lastName: "",
                companyName: "",
                companyVat: "",
                companyRegistration: "",
                website: "",
                vat: false,
                discount: "",
                contactPerson: "",
                telephone: "",
                country: "",
                state: "",
                city: "",
                postCode: "",
                address: "",
                email: "",
                isNewsLetter: false,
                ebay: "Not applicable",
                amazon: "Not applicable	",
                saleYear: 0,
                saleToDate: 0,
                status: false,
            });
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
                    rows={customerList}
                    columns={customerListColumns}
                    cells={customerListCells}
                    title={"Customer"}
                    pagination={pagination}
                    filterFieldList={customerFilterField}
                    handleCreate={handleToggle}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    handleFilter={handleFilter}
                    handleFilterFieldOnChange={handleFilterFieldOnChange}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />

                {isModal && (
                    <ReusableModal
                        handleSubmit={editStore.status ? handleUpdate : handleAdd}
                        handleToggle={handleToggle}
                        handleModalFieldOnChange={handleModalFieldOnChange}
                        editData={editStore}
                        modalFields={modalCustomerListFields}
                        isModal={isModal}
                        title={
                            editStore.status
                                ? modalCustomerListTitle[ModalMod.EDIT]
                                : modalCustomerListTitle[ModalMod.NEW]
                        }
                    />
                )}
            </Box>
        </PageContainer>
    );
}

