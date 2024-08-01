"use client"

import RevenueUpdates from "@/components/dashboard/modern/RevenueUpdates";
import PageContainer from "@/components/container/PageContainer";
import SalesOverview from "@/components/dashboard/SalesOverview";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import Expence from "@/components/dashboard/Expence";
import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Sales from "@/components/dashboard/Sales";

const StoreOwner = () => {

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <PageContainer title="StoreOwner Dashboard" description="this is StoreOwner Dashboard">
      <Box mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <WelcomeCard />
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <RevenueUpdates isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <SalesOverview stores={[]} />
          </Grid>
        </Grid>

      </Box>
    </PageContainer>
  );
};

export default StoreOwner;