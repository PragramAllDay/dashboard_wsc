"use client";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import PageContainer from "@/components/container/PageContainer";
import { webOrderCells, webOrderColumns, webOrderFilterField } from "@/utils/data/table";
// import {
//     deleteStore,
//     getStore,
//     patchStore,
//     postStore,
// } from "@/lib/request/Store/request";
import { useDispatch, useSelector } from "@/store/hooks";
import { PaginationType } from "@/utils/types/pagination";
import ReusableTable2 from "@/components/reusable-table-2";
import { WebOrderType } from "@/utils/types/web-order";
import { getWebOrderList } from "@/store/slice/super-admin/web-order";

export default function WebOrder() {
    const pagination: PaginationType = useSelector((state) => state.webOrderReducer.webOrderPagination)
    const webOrder: WebOrderType[] = useSelector((state) => state.webOrderReducer.webOrderList)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchWebOrder = async () => {
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
            fetchWebOrder();
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
        console.log(evt.target.elements)
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
        <PageContainer title="Web Order" description="This is web order">
            <Box mt={3}>
                <ReusableTable2
                    rows={webOrder}
                    columns={webOrderColumns}
                    cells={webOrderCells}
                    title={"Web Order"}
                    removeAddButton={true}
                    removeAction={true}
                    pagination={pagination}
                    filterFieldList={webOrderFilterField}
                    handleFilter={handleFilter}
                    handleFilterFieldOnChange={handleFilterFieldOnChange}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Box>
        </PageContainer>
    );
}