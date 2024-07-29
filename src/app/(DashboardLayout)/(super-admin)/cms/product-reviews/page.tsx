"use client";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import PageContainer from "@/components/container/PageContainer";
import { productReviewCells, productReviewColumns } from "@/utils/data/table/super-admin";
// import {
//     deleteStore,
//     getStore,
//     patchStore,
//     postStore,
// } from "@/lib/request/Store/request";
import { useDispatch, useSelector } from "@/store/hooks";
import { PaginationType } from "@/utils/types/pagination";
import ReusableTable2 from "@/components/reusable-table-2";

import { ProductReviewType } from "@/utils/types/cms";
import { getProductReviewList } from "@/store/slice/super-admin/cms/product-review";

export default function ProductReviews() {
    const pagination: PaginationType = useSelector((state) => state.productReviewReducer.ProductReviewPagination)
    const productReview: ProductReviewType[] = useSelector((state) => state.productReviewReducer.ProductReviewList)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchproductReview = async () => {
            try {
                // const { StoreList, newPagination } = await getStore(pagination);
                // if (StoreList) {
                //     dispatch(getproductReviewList({ list: StoreList, newPagination }))
                // }
            } catch (error) {
                console.log(error);
            }
        };
        if (pagination) {
            fetchproductReview();
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
            // dispatch(getproductReviewList({ performanceList, newPagination }))
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeRowsPerPage = async (evt: any) => {
        try {
            // const { performanceList, newPagination } = await getStore({ ...pagination, rowsPerPage: parseInt(evt.target.value) });
            // dispatch(getproductReviewList({ performanceList, newPagination }))
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <PageContainer title="Uploads" description="this is Uploads">
            <Box mt={3}>
                <ReusableTable2
                    rows={productReview}
                    columns={productReviewColumns}
                    cells={productReviewCells}
                    title={"Product Review"}
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