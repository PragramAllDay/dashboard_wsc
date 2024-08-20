"use client";
import { modalStoresFields, modalStoresTitle } from "@/utils/data/modal/super-admin";
import { storesCells, storesColumns } from "@/utils/data/table/super-admin";
import { initialStoreState } from "@/utils/data/initial-state/super-admin";
import { useGetCountryQuery } from "@/store/slice/api/super-admin/country";
import { storeFilterField } from "@/utils/data/table-filter/super-admin";
import { useGetStateQuery } from "@/store/slice/api/super-admin/state";
import { useGetCityQuery } from "@/store/slice/api/super-admin/city";
import { AddStoreType, NewStoreType } from "@/utils/types/stores";
import PageContainer from "@/components/container/PageContainer";
import ReusableTable2 from "@/components/reusable-table-2";
import { PaginationType } from "@/utils/types/pagination";
import { checkForSession } from "@/utils/session/session";
import ReusableModal from "@/components/reusable-modal";
import { RequestDataType } from "@/utils/types/request";
import { useSelector } from "@/store/hooks";
import { ModalMod } from "@/utils/enum";
import Box from "@mui/material/Box";
import { useState } from "react";
import {
    useDeleteStoresMutation,
    useGetStoresQuery,
    usePatchStoresMutation,
    usePostStoresMutation
} from "@/store/slice/api/super-admin/store";
import {
    handleAddStore,
    populateStoreSelectFields,
    storeFilterFieldOnChange,
    storeModalFieldOnChange,
    storeRenderCell
} from "@/utils/help";


export default function Stores() {
    const session = checkForSession()
    const { data: stores, refetch } = useGetStoresQuery(session.token)
    const { data: countryList, isLoading } = useGetCountryQuery(session.token)
    const { data: cityList } = useGetCityQuery(session.token)
    const { data: stateList } = useGetStateQuery(session.token)
    const [isModal, setIsModal] = useState<boolean>(false);
    const [deleteStores] = useDeleteStoresMutation();
    const [patchStores] = usePatchStoresMutation()
    const [postStores, { error }] = usePostStoresMutation();
    const pagination: PaginationType = useSelector((state) => state.storesReducer.storePagination)
    const [editStore, setEditStore] = useState<AddStoreType>(initialStoreState);

    console.log(stores)

    if (countryList) {
        populateStoreSelectFields(40, modalStoresFields, countryList, "name", "id")
    }

    if (stateList) {
        populateStoreSelectFields(41, modalStoresFields, stateList, "name", "id")
    }

    if (cityList) {
        populateStoreSelectFields(42, modalStoresFields, cityList, "name", "id")
    }

    const handleToggle = () => {
        setIsModal(!isModal);

        if (editStore.status) {
            setEditStore(initialStoreState);
        }
    };

    const handleAdd = async (values: any) => {
        try {
            const newStore: NewStoreType = handleAddStore(values)
            if (session?.token) {
                await postStores({ ...newStore, token: session?.token as string })
            }
            refetch()
            setIsModal(false);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    const handleUpdate = async (values: any) => {
        try {
            await patchStores(values)
            refetch()
            setIsModal(false);
            setEditStore(initialStoreState);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            if (session.token) {
                await deleteStores({ id, token: session?.token })
                refetch()
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id: string) => {
        const store: (RequestDataType | undefined | null) = stores?.data?.find((perm: any) => perm.id === id);

        if (store) {
            setIsModal(true);
            refetch()
            /*setEditStore((state: AddStoreType) => ({
                ...state,
            }));*/
        }
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


    return (
        <PageContainer title="Store" description="this is Store">
            <Box mt={3}>
                {
                    !isLoading &&
                    <ReusableTable2
                        filterFieldList={storeFilterField}
                        rows={stores?.data as any}
                        columns={storesColumns}
                        cells={storesCells}
                        title={"Store"}
                        pagination={pagination}
                        handleEdit={handleEdit}
                        handleCreate={handleToggle}
                        handleDelete={handleDelete}
                        handleFilter={handleFilter}
                        handleRenderCell={storeRenderCell}
                        handleChangePage={handleChangePage}
                        handleChangeRowsPerPage={handleChangeRowsPerPage}
                        handleFilterFieldOnChange={storeFilterFieldOnChange}
                    />
                }

                {
                    isModal && (
                        <ReusableModal
                            handleSubmit={editStore.status ? handleUpdate : handleAdd}
                            handleModalFieldOnChange={storeModalFieldOnChange}
                            modalFields={modalStoresFields}
                            handleToggle={handleToggle}
                            editData={editStore}
                            isModal={isModal}
                            title={
                                editStore.status
                                    ? modalStoresTitle[ModalMod.EDIT]
                                    : modalStoresTitle[ModalMod.NEW]
                            }
                        />
                    )
                }
            </Box>
        </PageContainer>
    );
}

