"use client";
import { cashRegisterCells, cashRegisterColumns } from "@/utils/data/table/store-owner";
import { cashRegisterFilterField } from "@/utils/data/table-filter/store-owner";
import PageContainer from "@/components/container/PageContainer";
import { CashRegistryType } from "@/utils/types/accounts";
import ReusableTable2 from "@/components/reusable-table-2";
import { PaginationType } from "@/utils/types/pagination";
import { useDispatch, useSelector } from "@/store/hooks";
import Box from "@mui/material/Box";
import { useEffect } from "react";
// import {
//     deleteStore,
//     getStore,
//     patchStore,
//     postStore,
// } from "@/lib/request/Store/request";


function CashRegister() {
    const pagination: PaginationType = useSelector((state) => state.cashRegistryReducer.pagination)
    const CashRegisterList: CashRegistryType[] = useSelector((state) => state.cashRegistryReducer.list)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchCashRegistersCC = async () => {
            try {
                // const { StoreList, newPagination } = await getStore(pagination);
                // if (StoreList) {
                //     dispatch(getCashRegistersCCList({ list: StoreList, newPagination }))
                // }
            } catch (error) {
                console.log(error);
            }
        };
        if (pagination) {
            fetchCashRegistersCC();
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
            // dispatch(getCashRegistersCCList({ performanceList, newPagination }))
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeRowsPerPage = async (evt: any) => {
        try {
            // const { performanceList, newPagination } = await getStore({ ...pagination, rowsPerPage: parseInt(evt.target.value) });
            // dispatch(getCashRegistersCCList({ performanceList, newPagination }))
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
                    rows={CashRegisterList}
                    columns={cashRegisterColumns}
                    cells={cashRegisterCells}
                    title={"Cheques"}
                    removeAction={true}
                    removeAddButton={true}
                    pagination={pagination}
                    handleFilter={handleFilter}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    filterFieldList={cashRegisterFilterField}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    handleFilterFieldOnChange={handleFilterFieldOnChange}
                />
            </Box>
        </PageContainer>
    );
}

export default CashRegister