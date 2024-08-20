"use client";

import PageContainer from "@/components/container/PageContainer";
import ReusableTable2 from "@/components/reusable-table-2";
import { PaginationType } from "@/utils/types/pagination";
import { useDispatch, useSelector } from "@/store/hooks";
import ReusableModal from "@/components/reusable-modal";
import { useEffect, useState } from "react";
import { ModalMod } from "@/utils/enum";
import Box from "@mui/material/Box";

import {
  addManageCategory,
  deleteManageCategory,
  getManageCategoryList,
  updateManageCategory
} from "@/store/slice/store-owner/catalog/manage-categories";
import {
  modalManageCategoryField,
  modalManageCategoryTitle
} from "@/utils/data/modal/store-admin";
import {
  manageCategoryCells,
  manageCategoryColumns
} from "@/utils/data/table/store-owner";
import {
  useDeleteStoresMutation,
  useGetStoresQuery,
  usePatchStoresMutation,
  usePostStoresMutation
} from "@/store/slice/api/super-admin/store";
import { ManageCategoryType } from "@/utils/types/catalog";
import { initialManageCategoryState } from "@/utils/data/initial-state/store-owner";
import { checkForSession } from "@/utils/session/session";


export default function ManageCategories() {
  const session = checkForSession()
  const pagination: PaginationType = useSelector((state) => state.manageCategoryReducer.pagination);
  const [editManageCategory, setEditManageCategory] = useState<ManageCategoryType>(initialManageCategoryState);
  const manageCategories: ManageCategoryType[] = useSelector((state) => state.manageCategoryReducer.list);
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
        //   const newPagination = {
        //     page: 1,
        //     totalSize: data.length,
        //     rowsPerPage: 10,
        //   }
        //   const limitedData = data.slice(0, newPagination.rowsPerPage)
        //   dispatch(getManageCategoryList({ list: limitedData, newPagination }))
        // }
      } catch (error) {
        console.log(error);
      }
    };
    fetchStores();
  }, []);

  const handleToggle = () => {
    setIsModal(!isModal);

    if (editManageCategory.status) {
      setEditManageCategory(initialManageCategoryState);
    }
  };

  const handleAdd = async (values: any) => {
    try {
      const uuId = crypto.randomUUID()
      values.id = uuId
      await postStores(values)
      dispatch(addManageCategory(values))
      setIsModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (values: any) => {
    try {
      await patchStores(values)
      dispatch(updateManageCategory(values))
      setIsModal(false);
      setEditManageCategory(initialManageCategoryState);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteStores(id)
      dispatch(deleteManageCategory(id))
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id: string) => {
    const category = manageCategories?.find((perm: any) => perm.id === id);

    if (category) {
      setIsModal(true);
      setEditManageCategory({
        id: category.id,
        name: category.name,
        permaLink: category.permaLink,
        description: category.description,
        image: category.image,
        banner: category.banner,
        bannerUrl: category.bannerUrl,
        titleTag: category.titleTag,
        metaDescription: category.metaDescription,
        metaKeyword: category.metaKeyword,
        isTop: category.isTop,
        isLeft: category.isLeft,
        isFeature: category.isFeature,
        isDisplay: category.isDisplay,
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
    <PageContainer title="Manage Category" description="This is Manage Category">
      <Box mt={3}>
        <ReusableTable2
          columns={manageCategoryColumns}
          cells={manageCategoryCells}
          title={"Manage Category"}
          rows={manageCategories}
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
            handleSubmit={editManageCategory.status ? handleUpdate : handleAdd}
            handleToggle={handleToggle}
            handleModalFieldOnChange={handleModalFieldOnChange}
            editData={editManageCategory}
            modalFields={modalManageCategoryField}
            isModal={isModal}
            title={
              editManageCategory.status
                ? modalManageCategoryTitle[ModalMod.EDIT]
                : modalManageCategoryTitle[ModalMod.NEW]
            }
          />
        )}
      </Box>
    </PageContainer>
  );
}

