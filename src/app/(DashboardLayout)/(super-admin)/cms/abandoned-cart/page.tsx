"use client";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import PageContainer from "@/components/container/PageContainer";
import { cmsAbandonedCartCells, cmsAbandonedCartColumns } from "@/utils/data/table/super-admin";
// import {
//     deleteStore,
//     getStore,
//     patchStore,
//     postStore,
// } from "@/lib/request/Store/request";
import { useDispatch, useSelector } from "@/store/hooks";

import { PaginationType } from "@/utils/types/pagination";
import ReusableTable2 from "@/components/reusable-table-2";
import { AbandonedCartType } from "@/utils/types/cms";
import { getAbandonedCartList } from "@/store/slice/super-admin/cms/abandoned-cart";


export default function AbandonedCart() {
    const pagination: PaginationType = useSelector((state) => state.abandonedCart.abandonedCartPagination)
    const abandonedCarts: AbandonedCartType[] = useSelector((state) => state.abandonedCart.abandonedCarts)
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
        <PageContainer title="Abandoned Cart" description="This is Abandoned Cart">
            <Box mt={3}>
                <ReusableTable2
                    rows={abandonedCarts}
                    columns={cmsAbandonedCartColumns}
                    cells={cmsAbandonedCartCells}
                    title={"Abandoned Cart"}
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