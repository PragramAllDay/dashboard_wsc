"use client";
import { useDispatch, useSelector } from "@/store/hooks";
import { useEffect } from "react";
import Box from "@mui/material/Box";

import PageContainer from "@/components/container/PageContainer";
import ReusableTable2 from "@/components/reusable-table-2";
import { PaginationType } from "@/utils/types/pagination";

import { CustomerType } from "@/utils/types/stores";

import { customerListCells, customerListColumns } from "@/utils/data/table/store-owner";
import { useGetCustomersQuery } from "@/store/slice/api/super-admin/customer";
import { customerFilterField } from "@/utils/data/table-filter/store-owner";
import { getCustomerList } from "@/store/slice/super-admin/customer";


export default function Customer() {
    const { data, error, isLoading } = useGetCustomersQuery()
    const pagination: PaginationType = useSelector((state) => state.customerReducer.customerPagination)
    const customerList: CustomerType[] = useSelector((state) => state.customerReducer.customerList)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchCustomerList = async () => {
            try {
                if (data) {
                    const newPagination = {
                        page: 1,
                        totalSize: data.length,
                        rowsPerPage: 10,
                    }
                    const limitedData = data.slice(0, newPagination.rowsPerPage)
                    dispatch(getCustomerList({ list: limitedData, newPagination }))
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (pagination && customerList.length === 0 && data?.length !== 0) {
            fetchCustomerList();
        }
    }, [dispatch, pagination, data]);


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
        <PageContainer title="Customer" description="this is Customer">
            <Box mt={3}>
                <ReusableTable2
                    filterFieldList={customerFilterField}
                    columns={customerListColumns}
                    cells={customerListCells}
                    pagination={pagination}
                    removeAddButton={true}
                    rows={customerList}
                    title={"Customer"}
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

