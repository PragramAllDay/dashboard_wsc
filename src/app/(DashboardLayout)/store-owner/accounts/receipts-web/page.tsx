"use client";
import { receiptCells, receiptColumns } from "@/utils/data/table/store-owner";
import { receiptFilterField } from "@/utils/data/table-filter/store-owner";
import PageContainer from "@/components/container/PageContainer";
import ReusableTable2 from "@/components/reusable-table-2";
import { PaginationType } from "@/utils/types/pagination";
import { useDispatch, useSelector } from "@/store/hooks";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { ReceiptType } from "@/utils/types/accounts";
// import {
//     deleteStore,
//     getStore,
//     patchStore,
//     postStore,
// } from "@/lib/request/Store/request";


function ReceiptsWeb() {
    const pagination: PaginationType = useSelector((state) => state.receiptReducer.pagination)
    const receiptList: ReceiptType[] = useSelector((state) => state.receiptReducer.list)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchReceiptsCC = async () => {
            try {
                // const { StoreList, newPagination } = await getStore(pagination);
                // if (StoreList) {
                //     dispatch(getReceiptsCCList({ list: StoreList, newPagination }))
                // }
            } catch (error) {
                console.log(error);
            }
        };
        if (pagination) {
            fetchReceiptsCC();
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
            // dispatch(getReceiptsCCList({ performanceList, newPagination }))
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeRowsPerPage = async (evt: any) => {
        try {
            // const { performanceList, newPagination } = await getStore({ ...pagination, rowsPerPage: parseInt(evt.target.value) });
            // dispatch(getReceiptsCCList({ performanceList, newPagination }))
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
        <PageContainer title="ReceiptsWeb" description="this is ReceiptsWeb">
            <Box mt={3}>
                <ReusableTable2
                    rows={receiptList}
                    columns={receiptColumns}
                    cells={receiptCells}
                    title={"ReceiptsWeb"}
                    removeAction={true}
                    removeAddButton={true}
                    pagination={pagination}
                    handleFilter={handleFilter}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    filterFieldList={receiptFilterField}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    handleFilterFieldOnChange={handleFilterFieldOnChange}
                />
            </Box>
        </PageContainer>
    );
}

export default ReceiptsWeb