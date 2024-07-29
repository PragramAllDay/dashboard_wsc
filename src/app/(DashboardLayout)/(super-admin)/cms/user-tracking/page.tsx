"use client";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import PageContainer from "@/components/container/PageContainer";
import { cmsUserTrackingCells, cmsUserTrackingColumns } from "@/utils/data/table/super-admin";
// import {
//     deleteStore,
//     getStore,
//     patchStore,
//     postStore,
// } from "@/lib/request/Store/request";
import { useDispatch, useSelector } from "@/store/hooks";

import { PaginationType } from "@/utils/types/pagination";
import ReusableTable2 from "@/components/reusable-table-2";
import { CMSUserTrackingType } from "@/utils/types/cms";

export default function UserTracking() {
    const pagination: PaginationType = useSelector((state) => state.userTracking.userTrackingPagination)
    const userTrackings: CMSUserTrackingType[] = useSelector((state) => state.userTracking.userTrackings)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                // const { StoreList, newPagination } = await getStore(pagination);
                // if (StoreList) {
                //     dispatch(getAccountsList({ list: StoreList, newPagination }))
                // }
            } catch (error) {
                console.log(error);
            }
        };
        if (pagination) {
            fetchAccounts();
        }
    }, []);


    const renderCell = (rowData: any, name: string, index: number) => {
        if (name === "id") {
            return index + 1;
        }

        return rowData[name as never];
    };


    const handleChangePage = async (evt: any, value: number) => {
        try {
            // const { performanceList, newPagination } = await getStore({ ...pagination, page: value });
            // dispatch(getAccountsList({ performanceList, newPagination }))
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeRowsPerPage = async (evt: any) => {
        try {
            // const { performanceList, newPagination } = await getStore({ ...pagination, rowsPerPage: parseInt(evt.target.value) });
            // dispatch(getAccountsList({ performanceList, newPagination }))
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <PageContainer title="User Tracking" description="This is User Tracking">
            <Box mt={3}>
                <ReusableTable2
                    rows={userTrackings}
                    columns={cmsUserTrackingColumns}
                    cells={cmsUserTrackingCells}
                    title={"User Tracking"}
                    removeAction={true}
                    removeAddButton={true}
                    pagination={pagination}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Box>
        </PageContainer>
    );
}