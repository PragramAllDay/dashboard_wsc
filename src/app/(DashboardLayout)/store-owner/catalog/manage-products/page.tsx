"use client";

import { modalManageProductField, modalManageProductTitle } from "@/utils/data/modal/store-admin";
import { manageProductCells, manageProductColumns } from "@/utils/data/table/store-admin";
import { initialManageProductState } from "@/utils/data/initial-state/store-owner";
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
} from "@/store/slice/api/store";
import { ManageProductType } from "@/utils/types/catalog";
import { manageProductFilterField } from "@/utils/data/table-filter/store-admin";
import { addManageProduct, deleteManageProduct, getManageProductList, updateManageProduct } from "@/store/slice/store-owner/catalog/manage-product";


export default function ManageProduct() {
    const manageProducts: ManageProductType[] = useSelector((state) => state.manageProductReducer.list);
    const pagination: PaginationType = useSelector((state) => state.manageProductReducer.pagination);

    const [editManageProduct, setEditManageProduct] = useState<ManageProductType>(initialManageProductState);
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
                    dispatch(getManageProductList({ list: limitedData, newPagination }))
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (pagination && ManageProduct.length === 0 && data?.length !== 0) {
            fetchStores();
        }
    }, [dispatch, pagination, data]);

    const handleToggle = () => {
        setIsModal(!isModal);

        if (editManageProduct.status) {
            setEditManageProduct(initialManageProductState);
        }
    };

    const handleAdd = async (values: any) => {
        try {
            const uuId = crypto.randomUUID()
            values.id = uuId
            await postStores(values)
            dispatch(addManageProduct(values))
            setIsModal(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async (values: any) => {
        try {
            await patchStores(values)
            dispatch(updateManageProduct(values))
            setIsModal(false);
            setEditManageProduct(initialManageProductState);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteStores(id)
            dispatch(deleteManageProduct(id))
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id: string) => {
        const product = manageProducts?.find((perm: any) => perm.id === id);

        if (product) {
            setIsModal(true);
            setEditManageProduct({
                id: product.id,
                name: product.name,
                permaLink: product.permaLink,
                defaultImage: product.defaultImage,
                additionalImages: product.additionalImages,
                measuringUnit: product.measuringUnit,
                pack: product.pack,
                range: product.range,
                customsCode: product.customsCode,
                vat: product.vat,
                width: product.width,
                height: product.height,
                length: product.length,
                weight: product.weight,
                isle: product.isle,
                shortDescription: product.shortDescription,
                fullDescription: product.fullDescription,
                selectedAttribute: product.selectedAttribute,
                supplier: product.supplier,
                isFeature: product.isFeature,
                isSpecial: product.isSpecial,
                freeShipping: product.freeShipping,
                keywords: product.keywords,
                relatedProductSku: product.relatedProductSku,
                pageTitle: product.pageTitle,
                metaDescription: product.metaDescription,
                metaKeyword: product.metaKeyword,
                parentCategory: product.parentCategory,
                childCategory: product.childCategory,
                productCode: product.productCode,
                origin: product.origin,
                variations: product.variations,
                stock: product.stock,
                createdOn: "",
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
        <PageContainer title="Manage Product" description="This is Manage Product">
            <Box mt={3}>
                <ReusableTable2
                    filterFieldList={manageProductFilterField}
                    columns={manageProductColumns}
                    cells={manageProductCells}
                    title={"Manage Product"}
                    rows={manageProducts}
                    pagination={pagination}
                    handleEdit={handleEdit}
                    handleCreate={handleToggle}
                    handleDelete={handleDelete}
                    handleFilter={handleFilter}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    handleFilterFieldOnChange={handleFilterFieldOnChange}
                />
                {isModal && (
                    <ReusableModal
                        handleSubmit={editManageProduct.status ? handleUpdate : handleAdd}
                        handleToggle={handleToggle}
                        handleModalFieldOnChange={handleModalFieldOnChange}
                        editData={editManageProduct}
                        modalFields={modalManageProductField}
                        isModal={isModal}
                        title={
                            editManageProduct.status
                                ? modalManageProductTitle[ModalMod.EDIT]
                                : modalManageProductTitle[ModalMod.NEW]
                        }
                    />
                )}
            </Box>
        </PageContainer>
    );
}

