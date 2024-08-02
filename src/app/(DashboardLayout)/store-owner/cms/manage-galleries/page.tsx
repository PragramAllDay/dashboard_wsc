"use client";

import { modalManageGalleriesField, modalManageGalleriesTitle } from "@/utils/data/modal/store-admin";
import { manageGalleriesCells, manageGalleriesColumns } from "@/utils/data/table/store-owner";
import { initialManageGalleriesState } from "@/utils/data/initial-state/store-owner";
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
import { ManageGalleriesType } from "@/utils/types/cms";
import { addManageGalleries, deleteManageGalleries, getManageGalleriesList, updateManageGalleries } from "@/store/slice/store-owner/cms/manage-galleries";

export default function ManageGalleries() {
    const manageGalleriess: ManageGalleriesType[] = useSelector((state) => state.manageGalleriesReducer.list);
    const pagination: PaginationType = useSelector((state) => state.manageGalleriesReducer.pagination);
    const [editManageGalleries, setEditManageGalleries] = useState<ManageGalleriesType>(initialManageGalleriesState);
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
                    dispatch(getManageGalleriesList({ list: limitedData, newPagination }))
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (pagination && ManageGalleries.length === 0 && data?.length !== 0) {
            fetchStores();
        }
    }, [dispatch, pagination, data]);

    const handleToggle = () => {
        setIsModal(!isModal);

        if (editManageGalleries.status) {
            setEditManageGalleries(initialManageGalleriesState);
        }
    };

    const handleAdd = async (values: any) => {
        try {
            const uuId = crypto.randomUUID()
            values.id = uuId
            await postStores(values)
            dispatch(addManageGalleries(values))
            setIsModal(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async (values: any) => {
        try {
            await patchStores(values)
            dispatch(updateManageGalleries(values))
            setIsModal(false);
            setEditManageGalleries(initialManageGalleriesState);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteStores(id)
            dispatch(deleteManageGalleries(id))
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id: string) => {
        const galleries = manageGalleriess?.find((perm: any) => perm.id === id);

        if (galleries) {
            setIsModal(true);
            setEditManageGalleries({
                id: galleries.id,
                name: galleries.name,
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



    return (
        <PageContainer title="Manage Galleries" description="This is Manage Galleries">
            <Box mt={3}>
                <ReusableTable2
                    columns={manageGalleriesColumns}
                    cells={manageGalleriesCells}
                    title={"Manage Galleries"}
                    rows={manageGalleriess}
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
                        handleSubmit={editManageGalleries.status ? handleUpdate : handleAdd}
                        handleToggle={handleToggle}
                        handleModalFieldOnChange={handleModalFieldOnChange}
                        editData={editManageGalleries}
                        modalFields={modalManageGalleriesField}
                        isModal={isModal}
                        title={
                            editManageGalleries.status
                                ? modalManageGalleriesTitle[ModalMod.EDIT]
                                : modalManageGalleriesTitle[ModalMod.NEW]
                        }
                    />
                )}
            </Box>
        </PageContainer>
    );
}

