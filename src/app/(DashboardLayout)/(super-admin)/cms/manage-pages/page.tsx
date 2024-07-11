"use client";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import PageContainer from "@/components/container/PageContainer";
import { pagesCells, pagesColumns } from "@/utils/data/table";
// import {
//     deleteStore,
//     getStore,
//     patchStore,
//     postStore,
// } from "@/lib/request/Store/request";
import { useDispatch, useSelector } from "@/store/hooks";
import { addCmsPages, deleteCmsPages, getCmsPagesList, updateCmsPages } from "@/store/slice/super-admin/cms/cms-pages";
import { CMSPagesType } from "@/utils/types/cms";
import { PaginationType } from "@/utils/types/pagination";
import ReusableModal from "@/components/reusable-modal";
import ReusableTable2 from "@/components/reusable-table-2";
import { modalPagesFields, modalPagesTitle } from "@/utils/data/modal";
import { ModalMod } from "@/utils/enum";

export default function ManagePages() {
    const [isModal, setIsModal] = useState<boolean>(false);
    const pagination: PaginationType = useSelector((state) => state.cmsPagesReducer.cmsPagesPagination)
    const pages: CMSPagesType[] = useSelector((state) => state.cmsPagesReducer.cmsPagesList)
    const dispatch = useDispatch()
    const [editStore, setEditStore] = useState<CMSPagesType>({
        id: "",
        title: "",
        contents: "",
        permaLink: "",
        sortOrder: "",
        status: false,
    });

    useEffect(() => {
        const fetchPages = async () => {
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
            fetchPages();
        }
    }, [dispatch, pagination]);

    const handleToggle = () => {
        setIsModal(!isModal);

        if (editStore.status) {
            setEditStore({
                id: "",
                title: "",
                contents: "",
                permaLink: "",
                sortOrder: "",
                status: false,
            });
        }
    };

    const handleAdd = async (values: any) => {
        try {
            console.log(values)
            dispatch(addCmsPages(values))
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
            dispatch(updateCmsPages(values))
            setIsModal(false);
            setEditStore({
                id: "",
                title: "",
                contents: "",
                permaLink: "",
                sortOrder: "",
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
            dispatch(deleteCmsPages(id))
            // if (Store) {
            // }
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id: string) => {
        const page = pages?.find((perm: any) => perm.id === id);

        if (page) {
            setIsModal(true);
            setEditStore({
                id: page.id,
                title: page.title,
                permaLink: page.permaLink,
                sortOrder: page.sortOrder,
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
                    rows={pages}
                    columns={pagesColumns}
                    cells={pagesCells}
                    title={"Pages"}
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
                        modalFields={modalPagesFields}
                        isModal={isModal}
                        title={
                            editStore.status
                                ? modalPagesTitle[ModalMod.EDIT]
                                : modalPagesTitle[ModalMod.NEW]
                        }
                    />
                )}
            </Box>
        </PageContainer>
    );
}