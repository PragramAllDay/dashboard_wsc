"use client";

import { homeBiggerImageCells, homeBiggerImageColumns } from "@/utils/data/table/store-owner";
import { homeBannerImageCells, homeBannerImageColumns } from "@/utils/data/table/store-owner";
import { homeSmallImageCells, homeSmallImageColumns } from "@/utils/data/table/store-owner";
import { getSmallImageList } from "@/store/slice/store-owner/cms/home-page-setting";
import { useGetStoresQuery } from "@/store/slice/api/super-admin/store";
import PageContainer from "@/components/container/PageContainer";
import ReusableTable2 from "@/components/reusable-table-2";
import { PaginationType } from "@/utils/types/pagination";
import { useDispatch, useSelector } from "@/store/hooks";
import { HomePageSettingType } from "@/utils/types/cms";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { checkForSession } from "@/utils/session/session";


export default function HomePageSetting() {
    const session = checkForSession()
    const smallImageList: HomePageSettingType[] = useSelector((state) => state.homePageSettingReducer.smallImageList);
    const biggerImageList: HomePageSettingType[] = useSelector((state) => state.homePageSettingReducer.biggerImageList);
    const bannerImageList: HomePageSettingType[] = useSelector((state) => state.homePageSettingReducer.bannerImageList);
    const smallImagePagination: PaginationType = useSelector((state) => state.homePageSettingReducer.smallImagePagination);
    const biggerImagePagination: PaginationType = useSelector((state) => state.homePageSettingReducer.biggerImagePagination);
    const bannerImagePagination: PaginationType = useSelector((state) => state.homePageSettingReducer.bannerImagePagination);
    const { data, error, isLoading } = useGetStoresQuery(session.token);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // if (data) {
                //     const newPagination = {
                //         page: 1,
                //         totalSize: data.length,
                //         rowsPerPage: 10,
                //     }
                //     const limitedData = data.slice(0, newPagination.rowsPerPage)
                //     dispatch(getSmallImageList({ list: limitedData, newPagination }))
                // }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // if (data) {
                //     const newPagination = {
                //         page: 1,
                //         totalSize: data.length,
                //         rowsPerPage: 10,
                //     }
                //     const limitedData = data.slice(0, newPagination.rowsPerPage)
                //     dispatch(getSmallImageList({ list: limitedData, newPagination }))
                // }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // if (data) {
                //     const newPagination = {
                //         page: 1,
                //         totalSize: data.length,
                //         rowsPerPage: 10,
                //     }
                //     const limitedData = data.slice(0, newPagination.rowsPerPage)
                //     dispatch(getSmallImageList({ list: limitedData, newPagination }))
                // }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
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
        <PageContainer title="Manage page" description="This is Manage page">
            <Box mt={3}>
                <ReusableTable2
                    columns={homeBiggerImageColumns}
                    cells={homeBiggerImageCells}
                    title={"Bigger Image(442*265)"}
                    rows={smallImageList}
                    pagination={smallImagePagination}
                    removeAddButton={true}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />
                <ReusableTable2
                    columns={homeSmallImageColumns}
                    cells={homeSmallImageCells}
                    title={"Small Images(217*265)"}
                    removeAddButton={true}
                    rows={biggerImageList}
                    pagination={biggerImagePagination}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />
                <ReusableTable2
                    columns={homeBannerImageColumns}
                    cells={homeBannerImageCells}
                    title={"Banner Images(451*550)"}
                    removeAddButton={true}
                    rows={bannerImageList}
                    pagination={bannerImagePagination}
                    handleRenderCell={renderCell}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Box>
        </PageContainer>
    );
}

