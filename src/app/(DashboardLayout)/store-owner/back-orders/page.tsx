"use client";
import { useDispatch, useSelector } from "@/store/hooks";
import { useEffect } from "react";
import Box from "@mui/material/Box";

import PageContainer from "@/components/container/PageContainer";
import ReusableTable2 from "@/components/reusable-table-2";
import { PaginationType } from "@/utils/types/pagination";

import { BackOrderType } from "@/utils/types/web-order";

import { backOrderListCells, backOrderListColumns } from "@/utils/data/table/store-owner";
import { getBackOrderList } from "@/store/slice/store-owner/back-order";
import { useGetStoresQuery } from "@/store/slice/api/super-admin/store";
import { checkForSession } from "@/utils/session/session";


export default function BackOrder() {
    const session = checkForSession()
    const { data, error, isLoading } = useGetStoresQuery(session.token)
    const pagination: PaginationType = useSelector((state) => state.backOrderReducer.pagination)
    const BackOrderList: BackOrderType[] = useSelector((state) => state.backOrderReducer.list)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchBackOrderList = async () => {
            try {
                // if (data) {
                //     const newPagination = {
                //         page: 1,
                //         totalSize: data.length,
                //         rowsPerPage: 10,
                //     }
                //     const limitedData = data.slice(0, newPagination.rowsPerPage)
                //     dispatch(getBackOrderList({ list: limitedData, newPagination }))
                // }
            } catch (error) {
                console.log(error);
            }
        };
        if (data) {
            fetchBackOrderList();
        }
    }, []);


    const renderCell = (rowData: any, name: string, index: number) => {
        if (name === "id") {
            return index + 1;
        }
        if (name == "name") {
            return rowData['firstName'] + rowData['lastName']
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

    return (
        <PageContainer title="BackOrder" description="this is BackOrder">
            <Box mt={3}>
                <ReusableTable2
                    columns={backOrderListColumns}
                    cells={backOrderListCells}
                    pagination={pagination}
                    removeAddButton={true}
                    rows={BackOrderList}
                    title={"BackOrder"}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Box>
        </PageContainer>
    );
}

