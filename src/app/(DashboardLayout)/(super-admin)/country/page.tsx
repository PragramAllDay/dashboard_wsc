"use client";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import PageContainer from "@/components/container/PageContainer";
import { countryListCells, countryListColumns } from "@/utils/data/table/super-admin";
import { useDispatch, useSelector } from "@/store/hooks";
import { CountryType } from "@/utils/types/categories";
import { PaginationType } from "@/utils/types/pagination";
import ReusableModal from "@/components/reusable-modal";
import ReusableTable2 from "@/components/reusable-table-2";
import { modalCountryListFields, modalCountryListTitle } from "@/utils/data/modal/super-admin";
import { ModalMod } from "@/utils/enum";
import { addCountry, deleteCountryById, getCountryList, updateCountry } from "@/store/slice/super-admin/country";
import { useDeleteCountryMutation, useGetCountryQuery, usePatchCountryMutation, usePostCountryMutation } from "@/store/slice/api/super-admin/country";
import { countryFilterField } from "@/utils/data/table-filter/super-admin";
import { initialCountryState } from "@/utils/data/initial-state/super-admin";
import { checkForSession } from "@/utils/session/session";

export default function Country() {
    const [isModal, setIsModal] = useState<boolean>(false);
    const session = checkForSession()
    const dispatch = useDispatch()
    const { data: countries, error, isLoading } = useGetCountryQuery(session.token)
    const pagination: PaginationType = useSelector((state) => state.countryReducer.countryPagination)
    const countryList: CountryType[] = useSelector((state) => state.countryReducer.countryList)
    const [editStore, setEditStore] = useState<CountryType>(initialCountryState);

    const [deleteCountry] = useDeleteCountryMutation();
    const [patchCountry] = usePatchCountryMutation()
    const [postCountry] = usePostCountryMutation();

    useEffect(() => {
        const fetchCountryList = async () => {
            try {
                if (countries) {
                    const newPagination = {
                        page: 1,
                        totalSize: countries.data?.length,
                        rowsPerPage: 10,
                    }
                    const limitedData = countries.data.slice(0, newPagination.rowsPerPage)
                    dispatch(getCountryList({ list: limitedData, newPagination }))
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (countries) {
            fetchCountryList();
        }
    }, []);


    const handleToggle = () => {
        setIsModal(!isModal);

        if (editStore.status) {
            setEditStore({
                id: "",
                name: "",
                status: false,
            });
        }
    };

    const handleAdd = async (values: any) => {
        try {
            const uuId = crypto.randomUUID()
            values.id = uuId
            await postCountry(values)
            dispatch(addCountry(values))
            setIsModal(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async (values: any) => {
        try {
            await patchCountry(values)
            dispatch(updateCountry(values))
            setIsModal(false);
            setEditStore(initialCountryState);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteCountry(id)
            dispatch(deleteCountryById(id))
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id: string) => {
        const category = countryList?.find((perm: any) => perm.id === id);

        if (category) {
            setIsModal(true);
            setEditStore({
                id: category.id,
                name: category.name,
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
        <PageContainer title="Country" description="this is Country       ">
            <Box mt={3}>
                {
                    !isLoading &&
                    <ReusableTable2
                        filterFieldList={countryFilterField}
                        columns={countryListColumns}
                        cells={countryListCells}
                        pagination={pagination}
                        rows={countryList}
                        title={"Country"}
                        handleEdit={handleEdit}
                        handleCreate={handleToggle}
                        handleDelete={handleDelete}
                        handleFilter={handleFilter}
                        handleRenderCell={renderCell}
                        handleChangePage={handleChangePage}
                        handleChangeRowsPerPage={handleChangeRowsPerPage}
                        handleFilterFieldOnChange={handleFilterFieldOnChange}
                    />
                }

                {isModal && (
                    <ReusableModal
                        handleSubmit={editStore.status ? handleUpdate : handleAdd}
                        handleToggle={handleToggle}
                        handleModalFieldOnChange={handleModalFieldOnChange}
                        editData={editStore}
                        modalFields={modalCountryListFields}
                        isModal={isModal}
                        title={
                            editStore.status
                                ? modalCountryListTitle[ModalMod.EDIT]
                                : modalCountryListTitle[ModalMod.NEW]
                        }
                    />
                )}
            </Box>
        </PageContainer>
    );
}