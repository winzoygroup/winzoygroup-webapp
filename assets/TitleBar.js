import React from 'react';
import { Box } from '@mui/material';
import { HomeOutlined } from '@mui/icons-material';
import classes from '../styles/Classes.module.css';
import Link from 'next/link';
import ContainerFluid from './ContainerFluid';

export default function TitleBar({ title, subTitle }) {
  return (
    <Box sx={{ pt: 2 }}>
      <ContainerFluid>
        <Box className={classes.titleBar}>
          <ul className={classes.ul}>
            <li>
              <Link href={'/'}>
                <HomeOutlined color="primary" />
              </Link>
            </li>
            <li>{title}</li>
          </ul>
        </Box>
      </ContainerFluid>
    </Box>
  );
}
