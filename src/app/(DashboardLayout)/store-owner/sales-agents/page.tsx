"use client";

import { modalSalesAgentField, modalSalesAgentTitle } from "@/utils/data/modal/store-admin";
import { SalesAgentCells, SalesAgentColumns } from "@/utils/data/table/store-owner";
import { initialSalesAgentState } from "@/utils/data/initial-state/store-owner";
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
import { salesAgentFilterField } from "@/utils/data/table-filter/store-owner";
import { SalesAgentType } from "@/utils/types/sale-agent";
import { addSalesAgent, deleteSalesAgent, getSalesAgentList, updateSalesAgent } from "@/store/slice/store-owner/sales-agents";
import { checkForSession } from "@/utils/session/session";


export default function SalesAgent() {
  const session = checkForSession()
  const salesAgents: SalesAgentType[] = useSelector((state) => state.salesAgentReducer.list);
  const pagination: PaginationType = useSelector((state) => state.salesAgentReducer.pagination);
  const [editSalesAgent, setEditSalesAgent] = useState<SalesAgentType>(initialSalesAgentState);
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
        //   dispatch(getSalesAgentList({ list: limitedData, newPagination }))
        // }
      } catch (error) {
        console.log(error);
      }
    };
    fetchStores();
  }, []);

  const handleToggle = () => {
    setIsModal(!isModal);

    if (editSalesAgent.status) {
      setEditSalesAgent(initialSalesAgentState);
    }
  };

  const handleAdd = async (values: any) => {
    try {
      const uuId = crypto.randomUUID()
      values.id = uuId
      await postStores(values)
      dispatch(addSalesAgent(values))
      setIsModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (values: any) => {
    try {
      await patchStores(values)
      dispatch(updateSalesAgent(values))
      setIsModal(false);
      setEditSalesAgent(initialSalesAgentState);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteStores(id)
      dispatch(deleteSalesAgent(id))
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id: string) => {
    const agent = salesAgents?.find((perm: any) => perm.id === id);

    if (agent) {
      setIsModal(true);
      setEditSalesAgent({
        id: agent.id,
        firstName: agent.firstName,
        lastName: agent.lastName,
        email: agent.email,
        commission: agent.commission,
        telephone: agent.telephone,
        country: agent.country,
        state: agent.state,
        city: agent.city,
        postCode: agent.postCode,
        address: agent.address,
        referenceCode: agent.referenceCode,
        status: true,
      });
    }
  };

  const renderCell = (rowData: any, name: string, index: number) => {
    if (name === "id") {
      return index + 1;
    }

    if (name === "name") {
      return `${rowData['firstName']} ${rowData['lastName']}`
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
          filterFieldList={salesAgentFilterField}
          columns={SalesAgentColumns}
          cells={SalesAgentCells}
          title={"Manage Attribute"}
          rows={salesAgents}
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
            handleSubmit={editSalesAgent.status ? handleUpdate : handleAdd}
            handleToggle={handleToggle}
            handleModalFieldOnChange={handleModalFieldOnChange}
            editData={editSalesAgent}
            modalFields={modalSalesAgentField}
            isModal={isModal}
            title={
              editSalesAgent.status
                ? modalSalesAgentTitle[ModalMod.EDIT]
                : modalSalesAgentTitle[ModalMod.NEW]
            }
          />
        )}
      </Box>
    </PageContainer>
  );
}

