'use client';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PageContainer from '@/components/container/PageContainer';

// components
import YearlyBreakup from '@/components/dashboard/YearlyBreakup';
import MonthlyEarnings from '@/components/dashboard/MonthlyEarnings';
import SellingProducts from '@/components/dashboard/modern/SellingProducts';
import TopCards from '@/components/dashboard/modern/TopCards';
import RevenueUpdates from '@/components/dashboard/modern/RevenueUpdates';
import EmployeeSalary from '@/components/dashboard/modern/EmployeeSalary';
import Customers from '@/components/dashboard/modern/Customers';
import Projects from '@/components/dashboard/modern/Projects';
import Social from '@/components/dashboard/modern/Social';
import TopPerformers from '@/components/dashboard/modern/TopPerformers';
import WeeklyStats from '@/components/dashboard/modern/WeeklyStats';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box mt={3}>
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={12} lg={12}>
            <TopCards />
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={8}>
            <RevenueUpdates isLoading={isLoading} />
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} lg={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12} sm={6} lg={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={4}>
            <EmployeeSalary isLoading={isLoading} />
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Customers isLoading={isLoading} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Projects isLoading={isLoading} />
              </Grid>
              <Grid item xs={12}>
                <Social />
              </Grid>
            </Grid>
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={4}>
            <WeeklyStats isLoading={isLoading} />
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={8}>
            <TopPerformers />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
