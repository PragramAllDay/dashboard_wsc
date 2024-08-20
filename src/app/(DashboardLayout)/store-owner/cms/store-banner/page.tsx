"use client";

import { modalStoreBannerField, modalStoreBannerTitle } from "@/utils/data/modal/store-admin";
import { storeBannerCells, storeBannerColumns } from "@/utils/data/table/store-owner";
import { initialStoreBannerState } from "@/utils/data/initial-state/store-owner";
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
import { StoreBannerType } from "@/utils/types/cms";
import { addStoreBanner, deleteStoreBanner, getStoreBannerList, updateStoreBanner } from "@/store/slice/store-owner/cms/store-banner";
import { checkForSession } from "@/utils/session/session";


export default function StoreBanner() {
    const session = checkForSession()
    const storeBanners: StoreBannerType[] = useSelector((state) => state.storeBannerReducer.list);
    const pagination: PaginationType = useSelector((state) => state.storeBannerReducer.pagination);
    const [editStoreBanner, setEditStoreBanner] = useState<StoreBannerType>(initialStoreBannerState);
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
                //     dispatch(getStoreBannerList({ list: limitedData, newPagination }))
                // }
            } catch (error) {
                console.log(error);
            }
        };
        fetchStores();
    }, []);

    const handleToggle = () => {
        setIsModal(!isModal);

        if (editStoreBanner.status) {
            setEditStoreBanner(initialStoreBannerState);
        }
    };

    const handleAdd = async (values: any) => {
        try {
            const uuId = crypto.randomUUID()
            values.id = uuId
            await postStores(values)
            dispatch(addStoreBanner(values))
            setIsModal(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async (values: any) => {
        try {
            await patchStores(values)
            dispatch(updateStoreBanner(values))
            setIsModal(false);
            setEditStoreBanner(initialStoreBannerState);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteStores(id)
            dispatch(deleteStoreBanner(id))
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id: string) => {
        const banner = storeBanners?.find((perm: any) => perm.id === id);

        if (banner) {
            setIsModal(true);
            setEditStoreBanner({
                id: banner.id,
                image: banner.image,
                linkUrl: banner.linkUrl,
                sortOrder: banner.sortOrder,
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
                    columns={storeBannerColumns}
                    cells={storeBannerCells}
                    title={"Manage Galleries"}
                    rows={storeBanners}
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
                        handleSubmit={editStoreBanner.status ? handleUpdate : handleAdd}
                        handleToggle={handleToggle}
                        handleModalFieldOnChange={handleModalFieldOnChange}
                        editData={editStoreBanner}
                        modalFields={modalStoreBannerField}
                        isModal={isModal}
                        title={
                            editStoreBanner.status
                                ? modalStoreBannerTitle[ModalMod.EDIT]
                                : modalStoreBannerTitle[ModalMod.NEW]
                        }
                    />
                )}
            </Box>
        </PageContainer>
    );
}

