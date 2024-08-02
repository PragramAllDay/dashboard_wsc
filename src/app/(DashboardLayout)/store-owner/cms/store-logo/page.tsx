"use client"

import PageContainer from "@/components/container/PageContainer"
import DashboardCard from "@/components/shared/DashboardCard"
import { Box, Button } from "@mui/material"
import { IconFileUpload } from "@tabler/icons-react"

const StoreLogo = () => {
    const handleLogoUpload = (evt: React.ChangeEvent<HTMLInputElement>) => {
        if (evt.target.files) {
            const storeLogo = evt?.target?.files[0]
            console.log(storeLogo)
        }
    }

    return (
        <PageContainer title="Store Logs" description="this is Store Logs">
            <Box mt={3}>
                <DashboardCard title={"Store Logo"}>
                    <Box display={"flex"} justifyContent={"center"} alignContent={"center"}>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<IconFileUpload />}
                        >
                            Upload file
                            <input type="file" accept=".png,.jpeg,jpg,.webp" hidden onChange={handleLogoUpload} />
                        </Button>
                    </Box>
                </DashboardCard>
            </Box>
        </PageContainer>
    )
}

export default StoreLogo