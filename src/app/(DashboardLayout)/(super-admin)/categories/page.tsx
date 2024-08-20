"use client";
import { useDeleteCategoriesMutation, useGetCategoriesQuery, usePostCategoriesMutation } from "@/store/slice/api/super-admin/categories";
import { modalCategoriesFields, modalCategoriesTitle } from "@/utils/data/modal/super-admin";
import { categoriesCells, categoriesColumns } from "@/utils/data/table/super-admin";
import { initialCategoriesState } from "@/utils/data/initial-state/super-admin";
import { categoryFilterField } from "@/utils/data/table-filter/super-admin";
import PageContainer from "@/components/container/PageContainer";
import ReusableTable2 from "@/components/reusable-table-2";
import { categoryFilterFieldOnChange } from "@/utils/help";
import { checkForSession } from "@/utils/session/session";
import { PaginationType } from "@/utils/types/pagination";
import { CategoryType } from "@/utils/types/categories";
import ReusableModal from "@/components/reusable-modal";
import { useSelector } from "@/store/hooks";
import { ModalMod } from "@/utils/enum";
import Box from "@mui/material/Box";
import { useState } from "react";


export default function Categories() {
    const session = checkForSession()
    const pagination: PaginationType = useSelector((state) => state.categoryReducer.categoryPagination)
    const [editStore, setEditStore] = useState<CategoryType>(initialCategoriesState);
    const { data: categories, refetch } = useGetCategoriesQuery(session.token)
    const [postcategories, { error }] = usePostCategoriesMutation()
    const [deleteCategories] = useDeleteCategoriesMutation()
    const [isModal, setIsModal] = useState<boolean>(false);

    const handleToggle = () => {
        setIsModal(!isModal);

        if (editStore.status) {
            setEditStore(initialCategoriesState);
        }
    };

    const handleAdd = async (values: any) => {
        try {
            if (session.token) {
                const newCategory = {
                    title: values.title,
                    sub_title: values.sub_title,
                    description: values.description,
                    permalink: values.permalink,
                    meta_title: values.meta_title,
                    meta_description: values.meta_description,
                    meta_keywords: values.meta_keywords.split(","),
                    schema_markup: values.schema_markup,
                    sort_order: values.sort_order,
                    is_featured: values.is_featured,
                    image_primary: "test",
                    image_secondary: "test",
                    icon_primary: "test",
                    icon_secondary: "test",
                    slug: values.title.toLowerCase().replace(" ", "-"),
                    is_active: true,
                }
                console.log(newCategory)
                await postcategories({ ...newCategory, token: session.token })
                refetch()
            }
            setIsModal(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async (values: any) => {
        try {
            // const { Store } = await patchStore(values);
            // dispatch(updateCategory(values))
            setIsModal(false);
            setEditStore(initialCategoriesState);
            // if (Store) {
            // }
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            if (session.token) {
                await deleteCategories({ id, token: session.token })
                refetch()
            }

        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id: string) => {
        const category = categories?.find((perm: any) => perm.id === id);

        if (category) {
            setIsModal(true);
            setEditStore({
                id: category.id,
                title: category.title,
                sub_title: category.sub_title,
                description: category.description,
                permalink: category.permalink,
                meta_title: category.meta_title,
                meta_description: category.meta_description,
                meta_keywords: category.meta_keywords,
                schema_markup: category.schema_markup,
                sort_order: category.sort_order,
                is_featured: category.is_featured,
                image_primary: category.image_primary,
                image_secondary: category.image_secondary,
                icon_primary: category.icon_primary,
                icon_secondary: category.icon_secondary,
                slug: category.title.toLowerCase().replace(" ", "-"),
                is_active: true,
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
        //Filter
    }


    return (
        <PageContainer title="Categories" description="this is Categories">
            <Box mt={3}>
                <ReusableTable2
                    filterFieldList={categoryFilterField}
                    columns={categoriesColumns}
                    cells={categoriesCells}
                    pagination={pagination}
                    title={"Categories"}
                    rows={categories?.data}
                    handleEdit={handleEdit}
                    handleCreate={handleToggle}
                    handleDelete={handleDelete}
                    handleFilter={handleFilter}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    handleFilterFieldOnChange={categoryFilterFieldOnChange}
                />

                {isModal && (
                    <ReusableModal
                        handleSubmit={editStore.status ? handleUpdate : handleAdd}
                        handleModalFieldOnChange={handleModalFieldOnChange}
                        modalFields={modalCategoriesFields}
                        handleToggle={handleToggle}
                        editData={editStore}
                        isModal={isModal}
                        title={
                            editStore.status
                                ? modalCategoriesTitle[ModalMod.EDIT]
                                : modalCategoriesTitle[ModalMod.NEW]
                        }
                    />
                )}
            </Box>
        </PageContainer>
    );
}
