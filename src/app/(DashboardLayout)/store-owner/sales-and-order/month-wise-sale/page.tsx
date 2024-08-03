"use client";

import { monthWiseSaleCells, monthWiseSaleCellsColumns } from "@/utils/data/table/store-owner";
import { monthWiseSaleFilterField } from "@/utils/data/table-filter/store-owner";
import { MonthWiseSaleType } from "@/utils/types/sale-and-order";
import PageContainer from "@/components/container/PageContainer";
import ReusableTable2 from "@/components/reusable-table-2";
import { PaginationType } from "@/utils/types/pagination";
import { useDispatch, useSelector } from "@/store/hooks";
import Box from "@mui/material/Box";
import { useEffect } from "react";
// import {
//     deleteStore,
//     getStore,
//     patchStore,
//     postStore,
// } from "@/lib/request/Store/request";


function MonthWiseSale() {
    const pagination: PaginationType = useSelector((state) => state.monthWiseSaleReducer.pagination)
    const MonthWiseSaleList: MonthWiseSaleType[] = useSelector((state) => state.monthWiseSaleReducer.list)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchMonthWiseSale = async () => {
            try {
                // const { StoreList, newPagination } = await getStore(pagination);
                // if (StoreList) {
                //     dispatch(getMonthWiseSalesCCList({ list: StoreList, newPagination }))
                // }
            } catch (error) {
                console.log(error);
            }
        };
        if (pagination) {
            fetchMonthWiseSale();
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
            // dispatch(getMonthWiseSalesCCList({ performanceList, newPagination }))
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeRowsPerPage = async (evt: any) => {
        try {
            // const { performanceList, newPagination } = await getStore({ ...pagination, rowsPerPage: parseInt(evt.target.value) });
            // dispatch(getMonthWiseSalesCCList({ performanceList, newPagination }))
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
        <PageContainer title="Month Wise Sale" description="this is Month Wise Sale">
            <Box mt={3}>
                <ReusableTable2
                    rows={MonthWiseSaleList}
                    columns={monthWiseSaleCellsColumns}
                    cells={monthWiseSaleCells}
                    title={"Month Wise Sale"}
                    removeAction={true}
                    removeAddButton={true}
                    pagination={pagination}
                    handleFilter={handleFilter}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    filterFieldList={monthWiseSaleFilterField}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    handleFilterFieldOnChange={handleFilterFieldOnChange}
                />
            </Box>
        </PageContainer>
    );
}

export default MonthWiseSale