import { Alert, Snackbar } from '@mui/material';
import React from 'react';

export default function SnackbarComp({ open, onClose, severity, message }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
