'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled, useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import Header from '../../layout/vertical/header/Header';
import Sidebar from '../../layout/vertical/sidebar/Sidebar';
import Customizer from '../../layout/shared/customizer/Customizer';
import Navigation from '../../layout/horizontal/navbar/Navigation';
import HorizontalHeader from '../../layout/horizontal/header/Header';
import { useSelector } from '@/store/hooks';
import { AppState } from '@/store/store';
import AuthRoute from '../gaurd/AuthRoute';
import determineAllowedRoles from '../gaurd/RoleDeterminer';
import RoleBasedAccess from '../gaurd/RoleBase';
import { usePathname } from 'next/navigation';

const MainWrapper = styled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
  width: '100%',
}));

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flexGrow: 1,
  paddingBottom: '60px',
  flexDirection: 'column',
  zIndex: 1,
  width: '100%',
  backgroundColor: 'transparent',
}));

const RootLayout = ({ children, session }: { children: React.ReactNode; session: { isLoggedIn: boolean; role: string } }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const pathname = usePathname();

  const customizer = useSelector((state: AppState) => state.customizer);

  const theme = useTheme();
  usePathname;
  const checkAccess = () => {
    const allowedRoles = determineAllowedRoles(pathname);
    return (
      <RoleBasedAccess allowedRoles={allowedRoles} session={session}>
        <MainWrapper>
          {/* ------------------------------------------- */}
          {/* Sidebar */}
          {/* ------------------------------------------- */}
          {customizer.isHorizontal ? '' : <Sidebar session={session} />}
          {/* ------------------------------------------- */}
          {/* Main Wrapper */}
          {/* ------------------------------------------- */}
          <PageWrapper
            className="page-wrapper"
            sx={{
              ...(customizer.isCollapse && {
                [theme.breakpoints.up('lg')]: {
                  ml: `${customizer.MiniSidebarWidth}px`,
                },
              }),
            }}
          >
            {/* ------------------------------------------- */}
            {/* Header */}
            {/* ------------------------------------------- */}
            {customizer.isHorizontal ? <HorizontalHeader /> : <Header />}
            {/* PageContent */}
            {customizer.isHorizontal ? <Navigation /> : ''}
            <Container
              sx={{
                maxWidth: customizer.isLayout === 'boxed' ? 'lg' : '100%!important',
              }}
            >
              {/* ------------------------------------------- */}
              {/* PageContent */}
              {/* ------------------------------------------- */}

              <Box sx={{ minHeight: 'calc(100vh - 170px)' }}>
                {/* <Outlet /> */}
                {children}

                {/* <Index /> */}
              </Box>

              {/* ------------------------------------------- */}
              {/* End Page */}
              {/* ------------------------------------------- */}
            </Container>
            <Customizer />
          </PageWrapper>
        </MainWrapper>
      </RoleBasedAccess>
    );
  };

  return <>{checkAccess()}</>;
};

export default AuthRoute(RootLayout);
