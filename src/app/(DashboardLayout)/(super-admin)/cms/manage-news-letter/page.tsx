"use client";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import PageContainer from "@/components/container/PageContainer";
import { manageNewsLetterCells, manageNewsLetterColumns } from "@/utils/data/table/super-admin";
import { useDispatch, useSelector } from "@/store/hooks";
import { addManageNewsLetter, deleteManageNewsLetter, getManageNewsLetterList, updateManageNewsLetter } from "@/store/slice/super-admin/cms/manage-news-letter";
import { ManageNewsLetterType } from "@/utils/types/cms";
import { PaginationType } from "@/utils/types/pagination";
import ReusableModal from "@/components/reusable-modal";
import ReusableTable2 from "@/components/reusable-table-2";
import { modalManageNewsLetterFields, modalManageNewsLetterTitle } from "@/utils/data/modal/super-admin";
import { ModalMod } from "@/utils/enum";
// import {
//     deleteStore,
//     getStore,
//     patchStore,
//     postStore,
// } from "@/lib/request/Store/request";

export default function ManageNewsLetter() {
    const [isModal, setIsModal] = useState<boolean>(false);
    const pagination: PaginationType = useSelector((state) => state.manageNewsLetterReducer.pagination)
    const ManageNewsLetter: ManageNewsLetterType[] = useSelector((state) => state.manageNewsLetterReducer.list)
    const dispatch = useDispatch()
    const [editStore, setEditStore] = useState<ManageNewsLetterType>({
        id: "",
        title: "",
        contents: "",
        status: false,
    });

    useEffect(() => {
        const fetchManageNewsLetter = async () => {
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
            fetchManageNewsLetter();
        }
    }, [dispatch, pagination]);

    const handleToggle = () => {
        setIsModal(!isModal);

        if (editStore.status) {
            setEditStore({
                id: "",
                title: "",
                contents: "",
                status: false,
            });
        }
    };

    const handleAdd = async (values: any) => {
        try {
            console.log(values)
            dispatch(addManageNewsLetter(values))
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
            dispatch(updateManageNewsLetter(values))
            setIsModal(false);
            setEditStore({
                id: "",
                title: "",
                contents: "",
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
            // const { Store } = await deleteStore(id);
            dispatch(deleteManageNewsLetter(id))
            // if (Store) {
            // }
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id: string) => {
        const page = ManageNewsLetter?.find((perm: any) => perm.id === id);

        if (page) {
            setIsModal(true);
            setEditStore({
                id: page.id,
                title: page.title,
                contents: page.contents,
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


    return (
        <PageContainer title="Uploads" description="this is Uploads">
            <Box mt={3}>
                <ReusableTable2
                    rows={ManageNewsLetter}
                    columns={manageNewsLetterColumns}
                    cells={manageNewsLetterCells}
                    title={"Manage News Letter"}
                    pagination={pagination}
                    handleCreate={handleToggle}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
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
                        modalFields={modalManageNewsLetterFields}
                        isModal={isModal}
                        title={
                            editStore.status
                                ? modalManageNewsLetterTitle[ModalMod.EDIT]
                                : modalManageNewsLetterTitle[ModalMod.NEW]
                        }
                    />
                )}
            </Box>
        </PageContainer>
    );
}