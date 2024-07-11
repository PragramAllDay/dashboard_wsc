"use client";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import PageContainer from "@/components/container/PageContainer";
import { countryFilterField, cityListCells, cityListColumns } from "@/utils/data/table";
// import {
//     deleteStore,
//     getStore,
//     patchStore,
//     postStore,
// } from "@/lib/request/Store/request";
import { useDispatch, useSelector } from "@/store/hooks";
import { addCategory, deleteCategory, getCategoryList, updateCategory } from "@/store/slice/super-admin/category";
import { CityType, StateType } from "@/utils/types/categories";
import { PaginationType } from "@/utils/types/pagination";
import ReusableModal from "@/components/reusable-modal";
import ReusableTable2 from "@/components/reusable-table-2";
import { modalCityListFields, modalCityListTitle } from "@/utils/data/modal";
import { ModalMod } from "@/utils/enum";

export default function City() {
    const [isModal, setIsModal] = useState<boolean>(false);
    const pagination: PaginationType = useSelector((state) => state.categoryReducer.categoryPagination)
    const cityList: CityType[] = useSelector((state) => state.categoryReducer.categoryList)
    const dispatch = useDispatch()
    const [editStore, setEditStore] = useState<CityType>({
        id: "",
        name: "",
        stateID: "",
        status: false,
    });

    useEffect(() => {
        const fetchcityList = async () => {
            try {
                // const { StoreList, newPagination } = await getStore(pagination);
                // if (StoreList) {
                //     dispatch(GetStoreList({ list: StoreList, newPagination }))
                // }
            } catch (error) {
                console.log(error);
            }
        };
        if (pagination) {
            fetchcityList();
        }
    }, [dispatch, pagination]);

    const handleToggle = () => {
        setIsModal(!isModal);

        if (editStore.status) {
            setEditStore({
                id: "",
                name: "",
                stateID: "",
                status: false,
            });
        }
    };

    const handleAdd = async (values: any) => {
        try {
            dispatch(addCategory(values))
            setIsModal(false);
            // const { Store } = await postStore(values);
            // if (Store) {
            // }
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async (values: any) => {
        try {
            // const { Store } = await patchStore(values);
            dispatch(updateCategory(values))
            setIsModal(false);
            setEditStore({
                id: "",
                name: "",
                stateID: "",
                status: false,
            });
            // if (Store) {
            // }
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            dispatch(deleteCategory(id))
            // const { Store } = await deleteStore(id);
            // if (Store) {
            // }
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id: string) => {
        const state = cityList?.find((perm: any) => perm.id === id);

        if (state) {
            setIsModal(true);
            setEditStore({
                id: state.id,
                name: state.name,
                stateID: state.stateID,
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
        Store: any,
        newValue: string,
        fieldAlias: string,
        setValues: any,
    ) => {
        setValues({
            ...Store,
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
        <PageContainer title="City" description="this is City">
            <Box mt={3}>
                <ReusableTable2
                    rows={cityList}
                    columns={cityListColumns}
                    cells={cityListCells}
                    title={"City"}
                    pagination={pagination}
                    filterFieldList={countryFilterField}
                    handleCreate={handleToggle}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handleFilter={handleFilter}
                    handleFilterFieldOnChange={handleFilterFieldOnChange}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />

                {isModal && (
                    <ReusableModal
                        handleSubmit={editStore.status ? handleUpdate : handleAdd}
                        handleToggle={handleToggle}
                        handleModalFieldOnChange={handleModalFieldOnChange}
                        editData={editStore}
                        modalFields={modalCityListFields}
                        isModal={isModal}
                        title={
                            editStore.status
                                ? modalCityListTitle[ModalMod.EDIT]
                                : modalCityListTitle[ModalMod.NEW]
                        }
                    />
                )}
            </Box>
        </PageContainer>
    );
}