"use client";

import { saleOrderCreditNoteCells, saleOrderCreditNoteColumns } from "@/utils/data/table/store-owner";
import { creditNoteFilterField } from "@/utils/data/table-filter/store-owner";
import PageContainer from "@/components/container/PageContainer";
import ReusableTable2 from "@/components/reusable-table-2";
import { PaginationType } from "@/utils/types/pagination";
import { useDispatch, useSelector } from "@/store/hooks";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { CreditNoteType } from "@/utils/types/supplier";
// import {
//     deleteStore,
//     getStore,
//     patchStore,
//     postStore,
// } from "@/lib/request/Store/request";


function CreditNote() {
  const pagination: PaginationType = useSelector((state) => state.creditNoteReducer.pagination)
  const creditNoteList: CreditNoteType[] = useSelector((state) => state.creditNoteReducer.list)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchCreditNote = async () => {
      try {
        // const { StoreList, newPagination } = await getStore(pagination);
        // if (StoreList) {
        //     dispatch(getCreditNotesCCList({ list: StoreList, newPagination }))
        // }
      } catch (error) {
        console.log(error);
      }
    };
    if (pagination) {
      fetchCreditNote();
    }
  }, [dispatch, pagination]);


  const renderCell = (rowData: any, name: string, index: number) => {
    if (name === "id") {
      return index + 1;
    }

    return rowData[name as never];
  };


  const handleChangePage = async (evt: any, value: number) => {
    try {
      // const { performanceList, newPagination } = await getStore({ ...pagination, page: value });
      // dispatch(getCreditNotesCCList({ performanceList, newPagination }))
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangeRowsPerPage = async (evt: any) => {
    try {
      // const { performanceList, newPagination } = await getStore({ ...pagination, rowsPerPage: parseInt(evt.target.value) });
      // dispatch(getCreditNotesCCList({ performanceList, newPagination }))
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = (evt: any) => {
    evt.preventDefault()
    console.log("DF")
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
    <PageContainer title="Sale and Order Credit Note" description="this is Sale and Order Credit Note">
      <Box mt={3}>
        <ReusableTable2
          rows={creditNoteList}
          columns={saleOrderCreditNoteColumns}
          cells={saleOrderCreditNoteCells}
          title={"Sale and Order Credit Note"}
          removeAction={true}
          removeAddButton={true}
          pagination={pagination}
          handleFilter={handleFilter}
          handleRenderCell={renderCell}
          handleChangePage={handleChangePage}
          filterFieldList={creditNoteFilterField}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleFilterFieldOnChange={handleFilterFieldOnChange}
        />
      </Box>
    </PageContainer>
  );
}

export default CreditNote