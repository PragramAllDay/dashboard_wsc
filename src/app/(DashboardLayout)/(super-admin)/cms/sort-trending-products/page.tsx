'use client'

import PageContainer from "@/components/container/PageContainer"
import Draggable from "@/components/draggable"
import { Box, Typography } from "@mui/material"


const SortTrendingProducts = () => {
    return (
        <PageContainer title="Menu Sort" description="This is Menu Sort">
            <Box sx={{ boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)', padding: "1rem" }} mt={3}>
                <Typography variant="h1">Trending Product Sorting</Typography>
                <Draggable />
            </Box>
        </PageContainer>
    )
}

export default SortTrendingProducts