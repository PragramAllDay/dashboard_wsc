"use client";

import { webSiteOrderCells, webSiteOrderColumns } from "@/utils/data/table/store-owner";
import { webSiteOrderFilter } from "@/utils/data/table-filter/store-owner";
import PageContainer from "@/components/container/PageContainer";
import ReusableTable2 from "@/components/reusable-table-2";
import { PaginationType } from "@/utils/types/pagination";
import { useDispatch, useSelector } from "@/store/hooks";
import { OrderType } from "@/utils/types/sale-and-order";
import Box from "@mui/material/Box";
import { useEffect } from "react";
// import {
//     deleteStore,
//     getStore,
//     patchStore,
//     postStore,
// } from "@/lib/request/Store/request";


function WebSiteOrder() {
    const pagination: PaginationType = useSelector((state) => state.webSiteReducer.pagination)
    const webSiteOrderList: OrderType[] = useSelector((state) => state.webSiteReducer.list)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchWebSiteOrder = async () => {
            try {
                // const { StoreList, newPagination } = await getStore(pagination);
                // if (StoreList) {
                //     dispatch(getWebSiteOrdersCCList({ list: StoreList, newPagination }))
                // }
            } catch (error) {
                console.log(error);
            }
        };
        if (pagination) {
            fetchWebSiteOrder();
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
            // dispatch(getWebSiteOrdersCCList({ performanceList, newPagination }))
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeRowsPerPage = async (evt: any) => {
        try {
            // const { performanceList, newPagination } = await getStore({ ...pagination, rowsPerPage: parseInt(evt.target.value) });
            // dispatch(getWebSiteOrdersCCList({ performanceList, newPagination }))
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
        <PageContainer title="WebSite Order" description="this is WebSite Order">
            <Box mt={3}>
                <ReusableTable2
                    rows={webSiteOrderList}
                    columns={webSiteOrderColumns}
                    cells={webSiteOrderCells}
                    title={"WebSite Order"}
                    removeAction={true}
                    removeAddButton={true}
                    pagination={pagination}
                    handleFilter={handleFilter}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    filterFieldList={webSiteOrderFilter}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    handleFilterFieldOnChange={handleFilterFieldOnChange}
                />
            </Box>
        </PageContainer>
    );
}

export default WebSiteOrder


