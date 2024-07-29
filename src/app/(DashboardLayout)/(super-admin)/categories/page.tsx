"use client";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import PageContainer from "@/components/container/PageContainer";
import { categoriesCells, categoriesColumns } from "@/utils/data/table/super-admin";
// import {
//     deleteStore,
//     getStore,
//     patchStore,
//     postStore,
// } from "@/lib/request/Store/request";
import { useDispatch, useSelector } from "@/store/hooks";
import { addCategory, deleteCategory, updateCategory } from "@/store/slice/super-admin/category";
import { modalCategoriesFields, modalCategoriesTitle } from "@/utils/data/modal/super-admin";
import { categoryFilterField } from "@/utils/data/table-filter/super-admin";
import { PaginationType } from "@/utils/types/pagination";
import ReusableTable2 from "@/components/reusable-table-2";
import { CategoryType } from "@/utils/types/categories";
import ReusableModal from "@/components/reusable-modal";
import { ModalMod } from "@/utils/enum";
import { initialCategoriesState } from "@/utils/data/initial-state/super-admin";




export default function Categories() {
  const [isModal, setIsModal] = useState<boolean>(false);
  const pagination: PaginationType = useSelector((state) => state.categoryReducer.categoryPagination)
  const categories: CategoryType[] = useSelector((state) => state.categoryReducer.categoryList)
  const dispatch = useDispatch()
  const [editStore, setEditStore] = useState<CategoryType>(initialCategoriesState);

  useEffect(() => {
    const fetchCategories = async () => {
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
      fetchCategories();
    }
  }, [dispatch, pagination]);

  const handleToggle = () => {
    setIsModal(!isModal);

    if (editStore.status) {
      setEditStore(initialCategoriesState);
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
      setEditStore(initialCategoriesState);
      // if (Store) {
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      // const { Store } = await deleteStore(id);
      dispatch(deleteCategory(id))
      // if (Store) {
      // }
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
        subTitle: category.subTitle,
        parent: category.parent,
        permalink: category.permalink,
        metaTitle: category.metaTitle,
        metaDescription: category.metaDescription,
        metaKeyWord: category.metaKeyWord,
        schemaMarkup: category.schemaMarkup,
        sortOrder: category.sortOrder,
        isFeature: category.isFeature,
        image1: category.image1,
        image2: category.image2,
        icon: category.icon,
        icon2: category.icon2,
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
    <PageContainer title="Uploads" description="this is Uploads">
      <Box mt={3}>
        <ReusableTable2
          rows={categories}
          columns={categoriesColumns}
          cells={categoriesCells}
          title={"Store"}
          filterFieldList={categoryFilterField}
          pagination={pagination}
          handleCreate={handleToggle}
          handleDelete={handleDelete}
          handleFilter={handleFilter}
          handleEdit={handleEdit}
          handleRenderCell={renderCell}
          handleChangePage={handleChangePage}
          handleFilterFieldOnChange={handleFilterFieldOnChange}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />

        {isModal && (
          <ReusableModal
            handleSubmit={editStore.status ? handleUpdate : handleAdd}
            handleToggle={handleToggle}
            handleModalFieldOnChange={handleModalFieldOnChange}
            editData={editStore}
            modalFields={modalCategoriesFields}
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