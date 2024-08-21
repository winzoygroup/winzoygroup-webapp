import React from 'react';
import { Container } from '@mui/material';

export default function ContainerFluid({ children }) {
  return <Container maxWidth={'lg'}>{children}</Container>;
}
