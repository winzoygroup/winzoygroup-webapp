import React from 'react';
import Theme from './Theme';
import Header from './Header';
import SearchEngine from './SearchEngine';
import TitleBar from './TitleBar';
import Footer from './Footer';
import { Box, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Layout({ children, title, subTitle }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Theme>
      <SearchEngine title={title} />
      <Header />
      {loading ? (
        <Box
          sx={{
            height: 'calc(100vh - 70px)',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          {title && <TitleBar title={title} subTitle={subTitle} />}
          <Box sx={{ overflowX: 'hidden' }}>{children}</Box>
          <Footer />
        </>
      )}
    </Theme>
  );
}
