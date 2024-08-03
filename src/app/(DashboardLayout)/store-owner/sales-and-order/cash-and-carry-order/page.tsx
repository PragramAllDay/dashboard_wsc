"use client";

import { cashAndCarryOrderCells, cashAndCarryOrderColumns } from "@/utils/data/table/store-owner";
import { cashAndCarryOrderFilter } from "@/utils/data/table-filter/store-owner";
import PageContainer from "@/components/container/PageContainer";
import ReusableTable2 from "@/components/reusable-table-2";
import { PaginationType } from "@/utils/types/pagination";
import { useDispatch, useSelector } from "@/store/hooks";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { OrderType } from "@/utils/types/sale-and-order";
// import {
//     deleteStore,
//     getStore,
//     patchStore,
//     postStore,
// } from "@/lib/request/Store/request";


function CashAndCarryOrder() {
    const pagination: PaginationType = useSelector((state) => state.cashAndCarryOrderReducer.pagination)
    const cashAndCarryOrderList: OrderType[] = useSelector((state) => state.cashAndCarryOrderReducer.list)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchCashAndCarryOrder = async () => {
            try {
                // const { StoreList, newPagination } = await getStore(pagination);
                // if (StoreList) {
                //     dispatch(getCashAndCarryOrdersCCList({ list: StoreList, newPagination }))
                // }
            } catch (error) {
                console.log(error);
            }
        };
        if (pagination) {
            fetchCashAndCarryOrder();
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
            // dispatch(getCashAndCarryOrdersCCList({ performanceList, newPagination }))
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeRowsPerPage = async (evt: any) => {
        try {
            // const { performanceList, newPagination } = await getStore({ ...pagination, rowsPerPage: parseInt(evt.target.value) });
            // dispatch(getCashAndCarryOrdersCCList({ performanceList, newPagination }))
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
        <PageContainer title="Cash and Carry Order" description="this is Cash and Carry Order">
            <Box mt={3}>
                <ReusableTable2
                    rows={cashAndCarryOrderList}
                    columns={cashAndCarryOrderColumns}
                    cells={cashAndCarryOrderCells}
                    title={"Cash and Carry Order"}
                    removeAction={true}
                    removeAddButton={true}
                    pagination={pagination}
                    handleFilter={handleFilter}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    filterFieldList={cashAndCarryOrderFilter}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    handleFilterFieldOnChange={handleFilterFieldOnChange}
                />
            </Box>
        </PageContainer>
    );
}

export default CashAndCarryOrder


