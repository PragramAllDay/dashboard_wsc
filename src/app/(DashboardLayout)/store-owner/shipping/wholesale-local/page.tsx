"use client";
import { useDispatch, useSelector } from "@/store/hooks";
import { useEffect } from "react";
import Box from "@mui/material/Box";

import PageContainer from "@/components/container/PageContainer";
import ReusableTable2 from "@/components/reusable-table-2";
import { PaginationType } from "@/utils/types/pagination";

import { wholeSaleLocalListCells, wholeSaleLocalListColumns } from "@/utils/data/table/store-owner";
import { getWholeSaleLocalList } from "@/store/slice/store-owner/shipping/wholesale-local";
import { useGetStoresQuery } from "@/store/slice/api/super-admin/store";
import { WholeSaleLocalType } from "@/utils/types/shipping";
import { wholesaleFilterField } from "@/utils/data/table-filter/store-owner";
import { checkForSession } from "@/utils/session/session";


export default function WholeSaleLocal() {
    const session = checkForSession()
    const WholeSaleLocalList: WholeSaleLocalType[] = useSelector((state) => state.wholeSaleLocalReducer.list)
    const pagination: PaginationType = useSelector((state) => state.wholeSaleLocalReducer.pagination)
    const { data, error, isLoading } = useGetStoresQuery(session.token)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchWholeSaleLocalList = async () => {
            try {
                // if (data) {
                //     const newPagination = {
                //         page: 1,
                //         totalSize: data.length,
                //         rowsPerPage: 10,
                //     }
                //     const limitedData = data.slice(0, newPagination.rowsPerPage)
                //     dispatch(getWholeSaleLocalList({ list: limitedData, newPagination }))
                // }
            } catch (error) {
                console.log(error);
            }
        };
        fetchWholeSaleLocalList();
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
        <PageContainer title="Wholesale Local" description="this is Wholesale Local">
            <Box mt={3}>
                <ReusableTable2
                    filterFieldList={wholesaleFilterField}
                    columns={wholeSaleLocalListColumns}
                    cells={wholeSaleLocalListCells}
                    pagination={pagination}
                    removeAddButton={true}
                    rows={WholeSaleLocalList}
                    title={"Wholesale Local"}
                    handleFilter={handleFilter}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    handleFilterFieldOnChange={handleFilterFieldOnChange}
                />
            </Box>
        </PageContainer>
    );
}

