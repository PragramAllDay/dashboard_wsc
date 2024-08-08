import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const NotAuthorized = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          flexDirection: 'column',
        }}
      >
        <h1>Not Authorized</h1>
        <p>You do not have permission to view this page.</p>
        <Button variant="contained" color="primary">
          <Link href="/login" style={{ textDecoration: 'none', color: 'white' }}>
            Login
          </Link>
        </Button>
      </div>
    </>
  );
};

export default NotAuthorized;
