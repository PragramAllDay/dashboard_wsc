"use client";

import { supplierOrderCells, supplierOrderColumns } from "@/utils/data/table/store-owner";
import { supplierOrderFilter } from "@/utils/data/table-filter/store-owner";
import PageContainer from "@/components/container/PageContainer";
import { CashRegistryType } from "@/utils/types/accounts";
import ReusableTable2 from "@/components/reusable-table-2";
import { PaginationType } from "@/utils/types/pagination";
import { useDispatch, useSelector } from "@/store/hooks";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { SupplierOrderType } from "@/utils/types/supplier";
// import {
//     deleteStore,
//     getStore,
//     patchStore,
//     postStore,
// } from "@/lib/request/Store/request";


function SupplierOrder() {
    const pagination: PaginationType = useSelector((state) => state.supplierOrderReducer.pagination)
    const supplierOrderList: SupplierOrderType[] = useSelector((state) => state.supplierOrderReducer.list)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchSupplierOrder = async () => {
            try {
                // const { StoreList, newPagination } = await getStore(pagination);
                // if (StoreList) {
                //     dispatch(getSupplierOrdersCCList({ list: StoreList, newPagination }))
                // }
            } catch (error) {
                console.log(error);
            }
        };
        if (pagination) {
            fetchSupplierOrder();
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
            // dispatch(getSupplierOrdersCCList({ performanceList, newPagination }))
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeRowsPerPage = async (evt: any) => {
        try {
            // const { performanceList, newPagination } = await getStore({ ...pagination, rowsPerPage: parseInt(evt.target.value) });
            // dispatch(getSupplierOrdersCCList({ performanceList, newPagination }))
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
        <PageContainer title="Cheques" description="this is Cheques">
            <Box mt={3}>
                <ReusableTable2
                    rows={supplierOrderList}
                    columns={supplierOrderColumns}
                    cells={supplierOrderCells}
                    title={"Cheques"}
                    removeAction={true}
                    removeAddButton={true}
                    pagination={pagination}
                    handleFilter={handleFilter}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    filterFieldList={supplierOrderFilter}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    handleFilterFieldOnChange={handleFilterFieldOnChange}
                />
            </Box>
        </PageContainer>
    );
}

export default SupplierOrder