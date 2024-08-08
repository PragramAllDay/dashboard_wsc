"use client";

import { getAccountCreditNoteList, getAccountSaleReportList } from "@/store/slice/store-owner/accounts/web-sale-report";
import { accountSaleReportListCells, accountSaleReportListColumns } from "@/utils/data/table/store-owner";
import { AccountCreditNoteType, AccountSaleReportType, AccountSaleSummaryType } from "@/utils/types/cms";
import { accountSaleSummaryCells, accountSaleSummaryColumns } from "@/utils/data/table/store-owner";
import { accountCreditNoteCells, accountCreditNoteColumns } from "@/utils/data/table/store-owner";
import { useGetStoresQuery } from "@/store/slice/api/super-admin/store";
import PageContainer from "@/components/container/PageContainer";
import ReusableTable2 from "@/components/reusable-table-2";
import { PaginationType } from "@/utils/types/pagination";
import { useDispatch, useSelector } from "@/store/hooks";
import Box from "@mui/material/Box";
import { useEffect } from "react";


export default function CashAndCarrySaleReport() {
    const accountCreditNote: AccountCreditNoteType[] = useSelector((state) => state.cashAndCarrySaleReportReducer.accountCreditNoteList);
    const accountSaleSummary: AccountSaleSummaryType[] = useSelector((state) => state.cashAndCarrySaleReportReducer.accountSaleSummaryList);
    const accountSaleReportList: AccountSaleReportType[] = useSelector((state) => state.cashAndCarrySaleReportReducer.accountSaleReportList);

    const accountSaleSummaryPagination: PaginationType = useSelector((state) => state.cashAndCarrySaleReportReducer.accountSaleSummaryPagination);
    const accountCreditNotePagination: PaginationType = useSelector((state) => state.cashAndCarrySaleReportReducer.accountCreditNotePagination);
    const accountSaleReportPagination: PaginationType = useSelector((state) => state.cashAndCarrySaleReportReducer.accountSaleReportPagination);

    const { data, error, isLoading } = useGetStoresQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (data) {
                    const newPagination = {
                        page: 1,
                        totalSize: data.length,
                        rowsPerPage: 10,
                    }
                    const limitedData = data.slice(0, newPagination.rowsPerPage)
                    dispatch(getAccountCreditNoteList({ list: limitedData, newPagination }))
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (accountCreditNotePagination && accountCreditNote.length === 0 && data?.length !== 0) {
            fetchData();
        }
    }, [dispatch, accountCreditNotePagination, data]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (data) {
                    const newPagination = {
                        page: 1,
                        totalSize: data.length,
                        rowsPerPage: 10,
                    }
                    const limitedData = data.slice(0, newPagination.rowsPerPage)
                    dispatch(getAccountSaleReportList({ list: limitedData, newPagination }))
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (accountSaleSummaryPagination && accountSaleSummary.length === 0 && data?.length !== 0) {
            fetchData();
        }
    }, [dispatch, accountSaleSummaryPagination, data]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (data) {
                    const newPagination = {
                        page: 1,
                        totalSize: data.length,
                        rowsPerPage: 10,
                    }
                    const limitedData = data.slice(0, newPagination.rowsPerPage)
                    dispatch(getAccountCreditNoteList({ list: limitedData, newPagination }))
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (accountSaleReportPagination && accountSaleReportList.length === 0 && data?.length !== 0) {
            fetchData();
        }
    }, [dispatch, accountSaleReportPagination, data]);


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



    return (
        <PageContainer title="Web Sale Report" description="This is Web Sale Report">
            <Box mt={3}>
                <ReusableTable2
                    columns={accountSaleSummaryColumns}
                    cells={accountSaleSummaryCells}
                    title={"Website Sale Summary "}
                    rows={accountCreditNote}
                    pagination={accountCreditNotePagination}
                    removeAddButton={true}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />
                <ReusableTable2
                    columns={accountCreditNoteColumns}
                    cells={accountCreditNoteCells}
                    title={"Website Sale Report From"}
                    removeAddButton={true}
                    rows={accountSaleSummary}
                    pagination={accountSaleSummaryPagination}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />
                <ReusableTable2
                    columns={accountSaleReportListColumns}
                    cells={accountSaleReportListCells}
                    title={"Credit Notes (Web)"}
                    removeAddButton={true}
                    rows={accountSaleReportList}
                    pagination={accountSaleReportPagination}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Box>
        </PageContainer>
    );
}

