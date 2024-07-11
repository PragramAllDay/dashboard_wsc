"use client";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import PageContainer from "@/components/container/PageContainer";
import { sliderCells, sliderColumns } from "@/utils/data/table";
// import {
//     deleteStore,
//     getStore,
//     patchStore,
//     postStore,
// } from "@/lib/request/Store/request";
import { useDispatch, useSelector } from "@/store/hooks";
import { addSlider, deleteSlider, getSliderList, updateSlider } from "@/store/slice/super-admin/cms/slider";
import { SliderType } from "@/utils/types/cms";
import { PaginationType } from "@/utils/types/pagination";
import ReusableModal from "@/components/reusable-modal";
import ReusableTable2 from "@/components/reusable-table-2";
import { modalSliderFields, modalSliderTitle } from "@/utils/data/modal";
import { ModalMod } from "@/utils/enum";

export default function Slider() {
    const [isModal, setIsModal] = useState<boolean>(false);
    const pagination: PaginationType = useSelector((state) => state.sliderReducer.sliderPagination)
    const sliders: SliderType[] = useSelector((state) => state.sliderReducer.sliderList)
    const dispatch = useDispatch()
    const [editStore, setEditStore] = useState<SliderType>({
        id: "",
        title: "",
        text1: "",
        text2: "",
        text3: "",
        image1: {},
        image2: {},
        sortOrder: "",
        url: "",
        style: "",
        cStatus: "",
        status: false,
    });

    useEffect(() => {
        const fetchSlider = async () => {
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
            fetchSlider();
        }
    }, [dispatch, pagination]);

    const handleToggle = () => {
        setIsModal(!isModal);

        if (editStore.status) {
            setEditStore({
                id: "",
                title: "",
                text1: "",
                text2: "",
                text3: "",
                image1: {},
                image2: {},
                sortOrder: "",
                url: "",
                style: "",
                cStatus: "",
                status: false,
            });
        }
    };

    const handleAdd = async (values: any) => {
        try {
            console.log(values)
            dispatch(addSlider(values))
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
            dispatch(updateSlider(values))
            setIsModal(false);
            setEditStore({
                id: "",
                title: "",
                text1: "",
                text2: "",
                text3: "",
                image1: {},
                image2: {},
                sortOrder: "",
                url: "",
                style: "",
                cStatus: "",
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
            dispatch(deleteSlider(id))
            // if (Store) {
            // }
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id: string) => {
        const slider = sliders?.find((perm: any) => perm.id === id);

        if (slider) {
            setIsModal(true);
            setEditStore({
                id: slider.id,
                title: slider.title,
                text1: slider.text1,
                text2: slider.text2,
                text3: slider.text3,
                image1: slider.image1,
                image2: slider.image2,
                sortOrder: slider.sortOrder,
                url: slider.url,
                style: slider.style,
                cStatus: slider.cStatus,
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
                    rows={sliders}
                    columns={sliderColumns}
                    cells={sliderCells}
                    title={"Slider"}
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
                        modalFields={modalSliderFields}
                        isModal={isModal}
                        title={
                            editStore.status
                                ? modalSliderTitle[ModalMod.EDIT]
                                : modalSliderTitle[ModalMod.NEW]
                        }
                    />
                )}
            </Box>
        </PageContainer>
    );
}