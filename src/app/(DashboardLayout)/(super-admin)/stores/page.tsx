"use client";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import PageContainer from "@/components/container/PageContainer";
import { storesCells, storesColumns } from "@/utils/data/table/super-admin";
import { useDispatch, useSelector } from "@/store/hooks";
import { addStore, deleteStore, getStoreList, updateStore } from "@/store/slice/super-admin/stores";
import { StoreType } from "@/utils/types/stores";
import { PaginationType } from "@/utils/types/pagination";
import ReusableModal from "@/components/reusable-modal";
import ReusableTable2 from "@/components/reusable-table-2";
import { modalStoresFields, modalStoresTitle } from "@/utils/data/modal/super-admin";
import { ModalMod } from "@/utils/enum";
import { useDeleteStoresMutation, useGetStoresQuery, usePatchStoresMutation, usePostStoresMutation } from "@/store/slice/api/super-admin/store";
import { storeFilterField } from "@/utils/data/table-filter/super-admin";

const initialState = {
    id: "",
    name: "",
    permalink: "",
    rent: "",
    minimumOrder: "",
    commission: "",
    vat: "",
    registrationNo: "",
    phone: "",
    logo: "",
    icon: "",
    icon2: "",
    banner: "",
    banner2: "",
    sideBanner: "",
    fax: "",
    address1: "",
    address2: "",
    description: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    schemaMarkup: "",
    catalogCategories: false,
    catalogAttributes: false,
    catalogProducts: false,
    salesAndOrderWholesale: false,
    salesAndOrderDropship: false,
    salesAndOrderCashAndCarry: false,
    backOrdersWholesale: false,
    backOrdersDropship: false,
    cmsPages: false,
    cmsNewsLetters: false,
    accountsWebSaleReport: false,
    accountsCashCarry: false,
    accountsSaleAgentReport: false,
    country: "",
    state: "",
    city: "",
    zip: "",
    owner: "",
    email: "",
    payPalDetails: "",
    payPalEmail: "",
    payPalUsername: "",
    payPalPassword: "",
    payPalSignature: "",
    psID: "",
    userID: "",
    psWD: "",
    password: "",
    rePassword: "",
    status: false,
}

export default function Stores() {
    const { data, error, isLoading } = useGetStoresQuery()
    const [postStores] = usePostStoresMutation();
    const [deleteStores] = useDeleteStoresMutation();
    const [patchStores] = usePatchStoresMutation()
    const [isModal, setIsModal] = useState<boolean>(false);
    const pagination: PaginationType = useSelector((state) => state.storesReducer.storePagination)
    const stores: StoreType[] = useSelector((state) => state.storesReducer.storeList)
    const dispatch = useDispatch()
    const [editStore, setEditStore] = useState<StoreType>(initialState);

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
                    dispatch(getStoreList({ list: limitedData, newPagination }))
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (pagination && stores.length === 0 && data?.length !== 0) {
            fetchStores();
        }
    }, [dispatch, pagination, data]);

    const handleToggle = () => {
        setIsModal(!isModal);

        if (editStore.status) {
            setEditStore(initialState);
        }
    };

    const handleAdd = async (values: any) => {
        try {
            const uuId = crypto.randomUUID()
            values.id = uuId
            await postStores(values)
            dispatch(addStore(values))
            setIsModal(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async (values: any) => {
        try {
            await patchStores(values)
            dispatch(updateStore(values))
            setIsModal(false);
            setEditStore(initialState);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteStores(id)
            dispatch(deleteStore(id))
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id: string) => {
        const store = stores?.find((perm: any) => perm.id === id);

        if (store) {
            setIsModal(true);
            setEditStore({
                id: store.id,
                name: store.name,
                permalink: store.permalink,
                rent: store.rent,
                minimumOrder: store.minimumOrder,
                commission: store.commission,
                vat: store.vat,
                registrationNo: store.registrationNo,
                phone: store.phone,
                logo: store.logo,
                icon: store.icon,
                icon2: store.icon2,
                banner: store.banner,
                banner2: store.banner2,
                sideBanner: store.sideBanner,
                fax: store.fax,
                address1: store.address1,
                address2: store.address2,
                description: store.description,
                metaTitle: store.metaTitle,
                metaDescription: store.metaDescription,
                metaKeywords: store.metaKeywords,
                schemaMarkup: store.schemaMarkup,
                catalogCategories: store.catalogCategories,
                catalogAttributes: store.catalogAttributes,
                catalogProducts: store.catalogProducts,
                salesAndOrderWholesale: store.salesAndOrderWholesale,
                salesAndOrderDropship: store.salesAndOrderDropship,
                salesAndOrderCashAndCarry: store.salesAndOrderCashAndCarry,
                backOrdersWholesale: store.backOrdersWholesale,
                backOrdersDropship: store.backOrdersDropship,
                cmsPages: store.cmsPages,
                cmsNewsLetters: store.cmsNewsLetters,
                accountsWebSaleReport: store.accountsWebSaleReport,
                accountsCashCarry: store.accountsCashCarry,
                accountsSaleAgentReport: store.accountsSaleAgentReport,
                country: store.country,
                state: store.state,
                city: store.city,
                zip: store.zip,
                owner: store.owner,
                email: store.email,
                payPalDetails: store.payPalDetails,
                payPalEmail: store.payPalEmail,
                payPalUsername: store.payPalUsername,
                payPalPassword: store.payPalPassword,
                payPalSignature: store.payPalSignature,
                psID: store.psID,
                userID: store.userID,
                psWD: store.psWD,
                password: store.password,
                rePassword: store.rePassword,
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

    const handleFilter = (data: any) => {
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
        <PageContainer title="Uploads" description="this is Uploads">
            <Box mt={3}>
                <ReusableTable2
                    rows={stores}
                    columns={storesColumns}
                    cells={storesCells}
                    title={"Store"}
                    pagination={pagination}
                    filterFieldList={storeFilterField}
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
                        modalFields={modalStoresFields}
                        isModal={isModal}
                        title={
                            editStore.status
                                ? modalStoresTitle[ModalMod.EDIT]
                                : modalStoresTitle[ModalMod.NEW]
                        }
                    />
                )}
            </Box>
        </PageContainer>
    );
}

