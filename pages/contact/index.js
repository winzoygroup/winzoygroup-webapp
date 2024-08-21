import Layout from '@/assets/Layout';
import SnackbarComp from '@/assets/function/SnackbarComp';
import { getError } from '@/utils/error';
import { Email, MyLocation, PhoneInTalk } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Icon,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const infoBox = {
  display: 'flex',
  alignItems: 'center',
  mt: 4,
  '& .icon': {
    height: 50,
    width: 50,
    transition: '0.3s',
    backgroundColor: 'rgb(255 255 255 / 90%)',
    backdropFilter: ' blur(10px) brightness(100%)',
    border: '1px solid var(--asset-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    mr: 1.2,
    '& svg': { fontSize: '1.8rem' },
  },
  '& p': {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: 'primary.main',
  },
  transition: '0.3s',
  '&:hover': {
    '& .icon': {
      bgcolor: 'primary.main',
      '& svg': {
        color: '#ffff',
      },
    },
  },
};

export default function Contact() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
    message: '',
  });
  const [open, setOpen] = useState(false);

  const [alertMessage, setAlertMessage] = useState({ type: '', message: '' });

  const closeHandler = () => {
    setOpen(false);
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
      .post('/api/contact', inputs)
      .then((res) => {
        setOpen(true);
        setAlertMessage({
          type: 'success',
          message: 'Submit Your Form Successfully',
        });
        setInputs({
          name: '',
          email: '',
          phone: '',
          query: '',
          message: '',
        });
      })
      .catch((err) => {
        setOpen(true);
        setAlertMessage({
          type: 'error',
          message: getError(err),
        });
        console.log(err);
      });
  };
  return (
    <Layout title={'Contact'}>
      <Box sx={{ my: 7 }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item md={6}>
              <Typography variant="title" component={'h2'}>
                Contact Us
              </Typography>
              <Typography variant="p" component="p">
                If you want more specific advice, one of our Education
                Consultants will be happy to help you.
              </Typography>
              <Box>
                <Box sx={infoBox}>
                  <Icon className="icon">
                    <Email color="primary" />
                  </Icon>
                  <p>info@winzoygroup.com</p>
                </Box>
                <Box sx={infoBox}>
                  <Icon className="icon">
                    <PhoneInTalk color="primary" />
                  </Icon>
                  <p>+1 300 946969</p>
                </Box>
                <Box sx={infoBox}>
                  <Icon className="icon">
                    <MyLocation color="primary" />
                  </Icon>
                  <p>
                    Suite 3, 71A Macquarie St, Parramatta NSW 2150, Australia
                  </p>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6}>
              <div
                className="overlay-style-2"
                style={{ left: '0%', top: '60%', opacity: 0.3 }}
              ></div>

              <div className="overlay-style-3"></div>
              <Card
                sx={{ boxShadow: 'var(--shadow)', textAlign: 'center' }}
                component="form"
                onSubmit={submitHandler}
              >
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                      <TextField
                        type="text"
                        name="name"
                        label="Full Name"
                        size="small"
                        required
                        fullWidth
                        value={inputs.name}
                        onChange={changeHandler}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        type="tel"
                        name="phone"
                        label="Phone No."
                        size="small"
                        required
                        fullWidth
                        value={inputs.phone}
                        onChange={changeHandler}
                      />
                    </Grid>
                    <Grid item md={12} xs={12}>
                      <TextField
                        type="mail"
                        name="email"
                        label="Email"
                        size="small"
                        fullWidth
                        value={inputs.email}
                        onChange={changeHandler}
                      />
                    </Grid>
                    <Grid item md={12} xs={12}>
                      <TextField
                        type="text"
                        name="query"
                        label="Your Query"
                        required
                        size="small"
                        fullWidth
                        value={inputs.query}
                        onChange={changeHandler}
                      />
                    </Grid>
                    <Grid item md={12} xs={12}>
                      <TextField
                        type="text"
                        name="message"
                        label="Message"
                        size="small"
                        minRows={5}
                        multiline
                        fullWidth
                        value={inputs.message}
                        onChange={changeHandler}
                      />
                    </Grid>
                    <Grid item md={12} xs={12}>
                      {open && (
                        <SnackbarComp
                          severity={alertMessage.type}
                          message={alertMessage.message}
                          onClose={closeHandler}
                          open={open}
                        />
                      )}
                      <Button
                        startIcon={
                          <CircularProgress
                            color="white"
                            size={18}
                            sx={{
                              display:
                                alertMessage.type === 'loading'
                                  ? 'block'
                                  : 'none',
                            }}
                          />
                        }
                        variant="contained"
                        size="large"
                        fullWidth
                        type="submit"
                      >
                        Submit Your Query
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.8930576863686!2d150.99771057432545!3d-33.81507275713286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a36285933135%3A0x2295f4e64498ab59!2sWinzoy%20Group!5e0!3m2!1sen!2sin!4v1686569101312!5m2!1sen!2sin"
        style={{ border: 0, width: '100%', height: 400 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Layout>
  );
}
