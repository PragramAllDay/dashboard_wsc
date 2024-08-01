"use client";

import { modalManageAttributeField, modalManageAttributeTitle } from "@/utils/data/modal/store-admin";
import { manageAttributeCells, manageAttributeColumns } from "@/utils/data/table/store-admin";
import { initialManageAttributeState } from "@/utils/data/initial-state/store-owner";
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
import { ManageAttributeType } from "@/utils/types/catalog";
import {
  addManageAttribute,
  deleteManageAttribute,
  getManageAttributeList,
  updateManageAttribute
} from "@/store/slice/store-owner/catalog/manage-attribute";
import { manageAttributeFilterField } from "@/utils/data/table-filter/store-admin";


export default function ManageAttribute() {
  const manageAttributes: ManageAttributeType[] = useSelector((state) => state.manageAttributeReducer.list);
  const pagination: PaginationType = useSelector((state) => state.manageAttributeReducer.pagination);
  const [editManageAttribute, setEditManageAttribute] = useState<ManageAttributeType>(initialManageAttributeState);
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
          dispatch(getManageAttributeList({ list: limitedData, newPagination }))
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (pagination && ManageAttribute.length === 0 && data?.length !== 0) {
      fetchStores();
    }
  }, [dispatch, pagination, data]);

  const handleToggle = () => {
    setIsModal(!isModal);

    if (editManageAttribute.status) {
      setEditManageAttribute(initialManageAttributeState);
    }
  };

  const handleAdd = async (values: any) => {
    try {
      const uuId = crypto.randomUUID()
      values.id = uuId
      await postStores(values)
      dispatch(addManageAttribute(values))
      setIsModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (values: any) => {
    try {
      await patchStores(values)
      dispatch(updateManageAttribute(values))
      setIsModal(false);
      setEditManageAttribute(initialManageAttributeState);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteStores(id)
      dispatch(deleteManageAttribute(id))
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id: string) => {
    const attribute = manageAttributes?.find((perm: any) => perm.id === id);

    if (attribute) {
      setIsModal(true);
      setEditManageAttribute({
        id: attribute.id,
        name: attribute.name,
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
    <PageContainer title="Manage Attribute" description="This is Manage Attribute">
      <Box mt={3}>
        <ReusableTable2
          filterFieldList={manageAttributeFilterField}
          columns={manageAttributeColumns}
          cells={manageAttributeCells}
          title={"Manage Attribute"}
          rows={manageAttributes}
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
            handleSubmit={editManageAttribute.status ? handleUpdate : handleAdd}
            handleToggle={handleToggle}
            handleModalFieldOnChange={handleModalFieldOnChange}
            editData={editManageAttribute}
            modalFields={modalManageAttributeField}
            isModal={isModal}
            title={
              editManageAttribute.status
                ? modalManageAttributeTitle[ModalMod.EDIT]
                : modalManageAttributeTitle[ModalMod.NEW]
            }
          />
        )}
      </Box>
    </PageContainer>
  );
}

