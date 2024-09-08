import { iconButtonWhite } from '@/styles/stylesheet';
import { addressData } from '@/utils/data';
import {
  Copyright,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  NearMe,
  PhoneInTalk,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItemButton,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import Enquire from './Enquire';
import Link from 'next/link';

export const AddrOption = ({ item }) => {
  return (
    <>
      {item.map((item, index) => (
        <option value={item.name} key={index}>
          {item.name}
        </option>
      ))}
    </>
  );
};

export default function Footer() {
  const [AddressFilter, setAddressFilter] = useState('Muzaffarnagar');

  const filteredCountry = addressData.filter((country) => {
    const filteredCity = country.city.filter(
      (city) => city.name === AddressFilter
    );
    if (filteredCity.length > 0) {
      country.city = filteredCity.map((city) => {
        const { name, address, phone, email } = city;
        return { name, address, phone, email };
      });
      return true;
    }
    return false;
  });
  const [open, setOpen] = useState(false);

  const cityData = filteredCountry[0]?.city[0];
  return (
    <Box
      component={'footer'}
      sx={{
        bgcolor: 'primary.main',
        color: '#fff',
        fontSize: '0.9rem',
        fontWeight: 500,
      }}
    >
      <Box sx={{ py: 7, mb: 7, bgcolor: '#F2FBFE' }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={3}>
              <Image
                src="/images/logo.webp"
                width={437}
                height={354}
                priority
                className="img-fluid"
                style={{ width: 200 }}
                alt="winzoy"
              />
            </Grid>
            <Grid item md={6}>
              <Typography
                variant="subTitle"
                component="h3"
                sx={{ textTransform: 'unset' }}
              >
                Achieve Your Dream Career with <span>Promising Futures</span>{' '}
                and Top University Education.
              </Typography>
            </Grid>{' '}
            <Grid item md={3} sx={{ textAlign: { md: 'right', xs: 'left' } }}>
              <Button
                variant="contained"
                sx={{ py: 2, px: 6 }}
                onClick={() => setOpen(true)}
              >
                Enquire Now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={2}>
            <Typography variant="fHeading" component={'h3'}>
              About Winzoy
            </Typography>
            <List>
              <Link href={'/about'} passHref>
                <ListItemButton>About Us</ListItemButton>
              </Link>{' '}
              <Link href={'/contact/career'} passHref>
                <ListItemButton>Career </ListItemButton>
              </Link>
              {/* <Link href={'#'}>
              <ListItemButton>Blog </ListItemButton></Link> */}
            </List>
            <Typography variant="fHeading" component={'h3'}>
              Other Links
            </Typography>
            <List>
              <Link href={'/privacy-policy'} passHref>
                <ListItemButton>Privacy Policy</ListItemButton>
              </Link>
              <Link href={'/terms-and-conditions'} passHref>
                <ListItemButton>Terms & Conditions</ListItemButton>
              </Link>
            </List>
          </Grid>
          <Grid item md={2}>
            <Typography variant="fHeading" component={'h3'}>
              Education
            </Typography>
            <List>
              <Link href={'/education/study-in-australia'} passHref>
                <ListItemButton>Study in Australia</ListItemButton>
              </Link>
              {/* <Link href={'/education/education-system'}>  <ListItemButton>Earning & Spending </ListItemButton></Link> */}
              <Link href={'/education/education-system'} passHref>
                <ListItemButton>Education System </ListItemButton>
              </Link>
              <Link href={'/education/popular-courses'} passHref>
                <ListItemButton>Popular Courses </ListItemButton>
              </Link>
              <Link href={'/education/student-visa-process'} passHref>
                <ListItemButton>Student Visa Process </ListItemButton>
              </Link>
            </List>
          </Grid>
          <Grid item md={3}>
            <Typography variant="fHeading" component={'h3'}>
              Migration
            </Typography>
            <List>
              <Link href={'/migration/employer-sponsored-visa'} passHref>
                <ListItemButton>Employer Sponsored Visa </ListItemButton>
              </Link>
              <Link href={'/migration/business-visa'} passHref>
                <ListItemButton>Business Visa </ListItemButton>
              </Link>
              <Link href={'/migration/australia-visitor-visa'} passHref>
                <ListItemButton>Australia Visitor Visa </ListItemButton>
              </Link>{' '}
              <Link href={'/migration/family-sponsored-visa'} passHref>
                <ListItemButton>Family Sponsored Visa</ListItemButton>
              </Link>{' '}
              <Link href={'/migration/partner-visa'} passHref>
                <ListItemButton>Partner Visa </ListItemButton>
              </Link>{' '}
              <Link href={'/migration/parent-visa'} passHref>
                <ListItemButton>Parent Visa </ListItemButton>
              </Link>
            </List>
          </Grid>
          <Grid item md={2}>
            <Typography variant="fHeading" component={'h3'}>
              Coaching
            </Typography>
            <List>
              {' '}
              <Link href={'/coaching/pte-coaching'} passHref>
                <ListItemButton>PTE Coaching </ListItemButton>
              </Link>{' '}
              <Link href={'/coaching/personalised-online-coaching'} passHref>
                <ListItemButton>PTE Online Coaching </ListItemButton>
              </Link>{' '}
            </List>
            <Typography variant="fHeading" component={'h3'}>
              Offerings
            </Typography>
            <List>
              <ListItemButton
                component="a"
                href="https://www.masterpte.com.au/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Online PTE Coaching
              </ListItemButton>
            </List>
          </Grid>
          <Grid item md={3}>
            <Typography variant="fHeading" component={'p'} sx={{ mb: 2 }}>
              Follow us:
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
              <div>
                <IconButton
                  sx={iconButtonWhite}
                  component={'a'}
                  target="_blank"
                  // href="https://www.facebook.com/winzoygroup/"
                >
                  <Facebook />
                </IconButton>
              </div>
              <div>
                <IconButton
                  sx={iconButtonWhite}
                  component={'a'}
                  target="_blank"
                  // href="https://au.linkedin.com/company/winzoy-group"
                >
                  <LinkedIn />
                </IconButton>
              </div>
              <div>
                <IconButton
                  sx={iconButtonWhite}
                  component={'a'}
                  target="_blank"
                  // href="https://www.instagram.com/winzoy_group"
                >
                  <Instagram />
                </IconButton>
              </div>
            </Stack>
            <Divider
              mt={{ width: '100%', borderColor: 'rgb(255, 255, 255, 0.1)' }}
            />
            <Stack spacing={2} sx={{ mt: 3 }}>
              <Stack direction={'row'} spacing={1} alignItems={'center'}>
                <div>
                  <NearMe />
                </div>
                <div>
                  Suite 3, 71A Macquarie St, Parramatta NSW 2150, Australia
                </div>
              </Stack>
              <a
                href="mailto:info@winzoygroup.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Stack direction={'row'} spacing={1} alignItems={'center'}>
                  <div>
                    <Email />
                  </div>
                  <div>info@winzoygroup.com</div>
                </Stack>
              </a>

              <a href="tel:+61424687577">
                <Stack direction={'row'} spacing={1} alignItems={'center'}>
                  <div>
                    <PhoneInTalk />
                  </div>
                  <div>+13 00 946969</div>
                </Stack>
              </a>
            </Stack>
            {/* <List>
              <ListItem>
                <ListItemIcon sx={{ color: '#fff' }}>
                 
                </ListItemIcon>
                <ListItemText primary="" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: '#fff' }}>
                  <LocationCity />
                </ListItemIcon>
                <ListItemText primary="Suite 3, 71A Macquarie St, Parramatta NSW 2150, Australia" />
              </ListItem>
            </List> */}
            {/* <Card>
              <CardContent>
               <select onChange={(e) => setAddressFilter(e.target.value)}>
                  {addressData.map((item) => (
                    <optgroup label={item.country} key={item.country}>
                      <AddrOption item={item.city} />
                    </optgroup>
                  ))}
                </select>
                {cityData ? (
                  <>
                    <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                      <div>
                        <Room color="primary" />
                      </div>
                      <div>
                        {cityData.address}, {cityData.name}
                      </div>
                    </Stack>
                    <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                      <div>
                        <PhoneInTalk color="primary" />
                      </div>
                      <div>{cityData.phone}</div>
                    </Stack>
                    <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                      <div>
                        <Email color="primary" />
                      </div>
                      <div>{cityData.email}</div>
                    </Stack>
                  </>
                ) : (
                  <p>No matching city found.</p>
                )} 
              </CardContent>
            </Card> */}
          </Grid>
          <Grid item md={12}>
            <Box sx={{ mb: 3, textAlign: 'center', fontWeight: 500 }}>
              <Divider sx={{ my: 3, borderColor: 'rgb(255, 255, 255, 0.1)' }} />
              <p>
                Copyright <Copyright sx={{ fontSize: '1.2rem' }} /> 2023{' '}
                <b>Winzoy Group.</b> All rights reserved.
              </p>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Enquire open={open} setOpen={setOpen} />
    </Box>
  );
}
