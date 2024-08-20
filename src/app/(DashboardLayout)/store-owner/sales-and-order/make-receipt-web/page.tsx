"use client"

import { initialMakeReceiptsWebState } from "@/utils/data/initial-state/store-owner";
import { makeReceiptsWebFormField } from "@/utils/data/modal/store-admin"
import { MakeReceiptsWebType } from "@/utils/types/sale-and-order";
import PageContainer from "@/components/container/PageContainer"
import DashboardCard from "@/components/shared/DashboardCard"
import { Box, Button, Grid } from "@mui/material"
import { useState } from "react";
import { GenerateModalField } from "@/components/generate-modal-field";


const MakeReceiptsWeb = () => {
    const [values, setValues] = useState<MakeReceiptsWebType>(initialMakeReceiptsWebState);

    const handleFilterFieldOnChange = (
        rowData: any,
        newValue: string,
        fieldAlias: string,
        setValues: any,
    ) => {
        setValues({
            ...rowData,
            [fieldAlias]: newValue,
        });
    };

    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        // console.log(evt.target.elements)
    }

    return (
        <PageContainer title="User" description="this is User">
            <Box mt={3}>
                <DashboardCard title={"User"}>
                    <form onSubmit={handleSubmit}>
                        <Grid gap={2} container flexDirection={"column"} className="rt-field-container">
                            {
                                makeReceiptsWebFormField?.map((filter: any) => {
                                    return (
                                        <Grid key={filter.id} item xs={filter.columnSmall} md={filter.columnMedium} lg={filter.columnLarge} className="rt-field">
                                            <GenerateModalField
                                                values={values}
                                                setValues={setValues}
                                                handleModalFieldOnChange={handleFilterFieldOnChange}
                                                field={filter}
                                            />
                                        </Grid>
                                    )
                                })
                            }
                            <Grid alignSelf={"end"} item xs={12} lg={12}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ fontWeight: 700, width: 100, pt: 1, pb: 1 }}
                                    type="submit"
                                >
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </DashboardCard>
            </Box>
        </PageContainer>
    )
}

export default MakeReceiptsWeb