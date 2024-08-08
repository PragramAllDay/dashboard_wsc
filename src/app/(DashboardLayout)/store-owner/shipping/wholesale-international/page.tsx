"use client";
import { useDispatch, useSelector } from "@/store/hooks";
import { useEffect } from "react";
import Box from "@mui/material/Box";

import PageContainer from "@/components/container/PageContainer";
import ReusableTable2 from "@/components/reusable-table-2";
import { PaginationType } from "@/utils/types/pagination";

import { wholeSaleInternationalListCells, wholeSaleInternationalListColumns } from "@/utils/data/table/store-owner";

import { getWholeSaleInternationalList } from "@/store/slice/store-owner/shipping/wholesale-international";
import { WholeSaleInternationalType } from "@/utils/types/shipping";
import { useGetStoresQuery } from "@/store/slice/api/super-admin/store";
import { wholesaleInternationalFilterField } from "@/utils/data/table-filter/store-owner";


export default function WholeSaleInternational() {
    const WholeSaleInternationalList: WholeSaleInternationalType[] = useSelector((state) => state.wholeSaleInternationalReducer.list)
    const pagination: PaginationType = useSelector((state) => state.wholeSaleInternationalReducer.pagination)
    const { data, error, isLoading } = useGetStoresQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchWholeSaleInternationalList = async () => {
            try {
                if (data) {
                    const newPagination = {
                        page: 1,
                        totalSize: data.length,
                        rowsPerPage: 10,
                    }
                    const limitedData = data.slice(0, newPagination.rowsPerPage)
                    dispatch(getWholeSaleInternationalList({ list: limitedData, newPagination }))
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (pagination && WholeSaleInternationalList.length === 0 && data?.length !== 0) {
            fetchWholeSaleInternationalList();
        }
    }, [dispatch, pagination, data]);


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
        <PageContainer title="Wholesale International" description="this is Wholesale International">
            <Box mt={3}>
                <ReusableTable2
                    filterFieldList={wholesaleInternationalFilterField}
                    columns={wholeSaleInternationalListColumns}
                    cells={wholeSaleInternationalListCells}
                    pagination={pagination}
                    removeAddButton={true}
                    handleFilter={handleFilter}
                    rows={WholeSaleInternationalList}
                    title={"Wholesale International"}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    handleFilterFieldOnChange={handleFilterFieldOnChange}
                />
            </Box>
        </PageContainer>
    );
}

