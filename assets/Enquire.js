import { getError } from '@/utils/error';
import { Close } from '@mui/icons-material';
import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import SnackbarComp from './function/SnackbarComp';

export default function Enquire({ open, setOpen }) {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    nationality: '',
    service: '',
    message: '',
  });
  const [openAl, setOpenAl] = useState(false);

  const [alertMessage, setAlertMessage] = useState({ type: '', message: '' });

  const closeHandler = () => {
    setOpenAl(false);
  };
  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();

    setAlertMessage({
      type: 'loading',
      message: '',
    });
    axios
      .post('/api/enquire', inputs)
      .then((res) => {
        setOpenAl(true);
        setAlertMessage({
          type: 'success',
          message: 'Submit Your Form Successfully',
        });
        setInputs({
          name: '',
          email: '',
          phone: '',
          country: '',
          nationality: '',
          service: '',
          message: '',
        });
      })
      .catch((err) => {
        setOpenAl(true);
        setAlertMessage({
          type: 'error',
          message: getError(err),
        });
      });
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} sx={{ width: '100' }}>
      <DialogContent sx={{ width: '100%' }}>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          sx={{ mb: 2 }}
        >
          <Typography variant="subTitle" component={'h2'}>
            Enquire
          </Typography>
          <IconButton
            sx={{
              bgcolor: 'error.main',
              color: '#fff',
              '&:hover': { bgcolor: 'error.dark', color: '#fff' },
            }}
            onClick={() => setOpen(false)}
          >
            <Close />
          </IconButton>
        </Stack>
        <Grid spacing={2} container component={'form'} onSubmit={submitHandler}>
          <Grid item md={6} xs={12} flexGrow={1}>
            <TextField
              label="Full Name"
              name="name"
              size="small"
              onChange={changeHandler}
              value={inputs.name}
              required
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12} flexGrow={1}>
            <TextField
              label="Phone No"
              name="phone"
              onChange={changeHandler}
              value={inputs.phone}
              size="small"
              required
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12} flexGrow={1}>
            <TextField
              label="Email"
              name="email"
              size="small"
              onChange={changeHandler}
              value={inputs.email}
              required
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12} flexGrow={1}>
            <TextField
              label="Country"
              name="country"
              onChange={changeHandler}
              value={inputs.country}
              size="small"
              required
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12} flexGrow={1}>
            <TextField
              label="Nationality"
              name="nationality"
              onChange={changeHandler}
              value={inputs.nationality}
              size="small"
              required
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12} flexGrow={1}>
            <TextField
              label="Services"
              name="service"
              size="small"
              onChange={changeHandler}
              value={inputs.service}
              required
              fullWidth
            />
          </Grid>
          <Grid item md={12} xs={12} flexGrow={1}>
            <TextField
              label="Message"
              name="message"
              onChange={changeHandler}
              value={inputs.message}
              size="small"
              multiline
              minRows={4}
              fullWidth
            />
          </Grid>
          <Grid item md={12} xs={12} flexGrow={1}>
            {openAl && (
              <SnackbarComp
                severity={alertMessage.type}
                message={alertMessage.message}
                onClose={closeHandler}
                open={openAl}
              />
            )}
            <Button
              variant="contained"
              fullWidth
              type="submit"
              startIcon={
                <CircularProgress
                  color="white"
                  size={18}
                  sx={{
                    display: alertMessage.type === 'loading' ? 'block' : 'none',
                  }}
                />
              }
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
