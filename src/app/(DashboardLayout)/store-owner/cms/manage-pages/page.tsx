"use client";

import { modalManagePagesField, modalManagePagesTitle } from "@/utils/data/modal/store-admin";
import { managePagesCells, managePagesColumns } from "@/utils/data/table/store-owner";
import { initialManagePagesState } from "@/utils/data/initial-state/store-owner";
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
import { ManagePagesType } from "@/utils/types/cms";
import { addManagePages, deleteManagePages, getManagePagesList, updateManagePages } from "@/store/slice/store-owner/cms/manage-pages";
import { checkForSession } from "@/utils/session/session";


export default function ManagePages() {
    const session = checkForSession()
    const managePagesList: ManagePagesType[] = useSelector((state) => state.managePageReducer.list);
    const pagination: PaginationType = useSelector((state) => state.managePageReducer.pagination);
    const [editManagePages, setEditManagePages] = useState<ManagePagesType>(initialManagePagesState);
    const [isModal, setIsModal] = useState<boolean>(false);

    const { data, error, isLoading } = useGetStoresQuery(session.token);
    const [deleteStores] = useDeleteStoresMutation();
    const [patchStores] = usePatchStoresMutation();
    const [postStores] = usePostStoresMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchStores = async () => {
            try {
                // if (data) {
                //     const newPagination = {
                //         page: 1,
                //         totalSize: data.length,
                //         rowsPerPage: 10,
                //     }
                //     const limitedData = data.slice(0, newPagination.rowsPerPage)
                //     dispatch(getManagePagesList({ list: limitedData, newPagination }))
                // }
            } catch (error) {
                console.log(error);
            }
        };
        fetchStores();
    }, []);

    const handleToggle = () => {
        setIsModal(!isModal);

        if (editManagePages.status) {
            setEditManagePages(initialManagePagesState);
        }
    };

    const handleAdd = async (values: any) => {
        try {
            const uuId = crypto.randomUUID()
            values.id = uuId
            await postStores(values)
            dispatch(addManagePages(values))
            setIsModal(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async (values: any) => {
        try {
            await patchStores(values)
            dispatch(updateManagePages(values))
            setIsModal(false);
            setEditManagePages(initialManagePagesState);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteStores(id)
            dispatch(deleteManagePages(id))
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id: string) => {
        const page = managePagesList?.find((perm: any) => perm.id === id);

        if (page) {
            setIsModal(true);
            setEditManagePages({
                id: page.id,
                title: page.title,
                contents: page.contents,
                sortOrder: page.sortOrder,
                permaLink: page.permaLink,
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
        <PageContainer title="Manage page" description="This is Manage page">
            <Box mt={3}>
                <ReusableTable2
                    columns={managePagesColumns}
                    cells={managePagesCells}
                    title={"Manage page"}
                    rows={managePagesList}
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
                        handleSubmit={editManagePages.status ? handleUpdate : handleAdd}
                        handleToggle={handleToggle}
                        handleModalFieldOnChange={handleModalFieldOnChange}
                        editData={editManagePages}
                        modalFields={modalManagePagesField}
                        isModal={isModal}
                        title={
                            editManagePages.status
                                ? modalManagePagesTitle[ModalMod.EDIT]
                                : modalManagePagesTitle[ModalMod.NEW]
                        }
                    />
                )}
            </Box>
        </PageContainer>
    );
}

