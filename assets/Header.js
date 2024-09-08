import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
  List,
  ListItemButton,
  Box,
  Button,
  Paper,
  Drawer,
  IconButton,
  Divider,
  Collapse,
} from '@mui/material';
import React, { useState } from 'react';
import {
  Close,
  KeyboardArrowDown,
  KeyboardArrowRight,
  PhoneInTalk,
} from '@mui/icons-material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
const menu = [
  { name: 'Home', url: '/', subItem: false },
  { name: 'About', url: '/about', subItem: false },
  {
    name: 'Education',
    url: '#',
    subItem: [
      { name: 'Study in Australia', url: '/education/study-in-australia' },
      { name: 'Education System', url: '/education/education-system' },
      { name: 'Popular Courses', url: '/education/popular-courses' },
      { name: 'Student Visa Process', url: '/education/student-visa-process' },
    ],
  },
  {
    name: 'Migration',
    url: '#',
    subItem: [
      {
        name: 'Employer Sponsored Visa',
        url: '/migration/employer-sponsored-visa',
      },
      {
        name: 'Australia Visitor Visa',
        url: '/migration/australia-visitor-visa',
      },
      { name: 'Partner Visa', url: '/migration/partner-visa' },
      { name: 'Parent Visa', url: '/migration/parent-visa' },
      {
        name: 'Family Sponsored Visa',
        url: '/migration/family-sponsored-visa',
      },
      { name: 'Student Visa', url: '/migration/student-visa' },
      {
        name: 'Temporary Activity Visa',
        url: '/migration/temporary-activity-visa',
      },
      {
        name: 'Business Visa',
        url: '/migration/business-visa',
      },
    ],
  },
  {
    name: 'Coaching & Services',
    url: '/coaching',
    subItem: [
      { name: 'PTE Coaching', url: '/coaching/pte-coaching' },
      {
        name: 'Personalised Online Coaching',
        url: '/coaching/personalised-online-coaching',
      },
    ],
  },
  {
    name: 'Contact Us',
    url: '/contact',
    subItem: false,
  },
];

const SumMenuItem = ({ data }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter().pathname;
  const active = data.subItem.filter((a) => a.url === router);
  return (
    <Box
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      sx={{
        borderRadius: 1,
        '& .active': {
          bgcolor: 'primary.main',
          color: '#fff',
        },
        '& .active:hover': {
          bgcolor: 'primary.main',
          color: '#fff',
        },
      }}
    >
      <ListItemButton
        sx={{
          borderRadius: 1,
        }}
        className={active?.length > 0 ? 'active' : ''}
      >
        <Typography variant={'nav'}>
          {data.name}{' '}
          {open ? (
            <KeyboardArrowDown sx={{ ml: 0.2, fontSize: '1rem' }} />
          ) : (
            <KeyboardArrowRight sx={{ ml: 0.2, fontSize: '1rem' }} />
          )}
        </Typography>
      </ListItemButton>

      <Collapse in={open}>
        <Paper
          sx={{ position: { md: 'absolute', xs: 'relative' }, minWidth: 150 }}
        >
          <List>
            {data.subItem.map((item) => (
              <Link href={item.url} key={item.name} passHref>
                <ListItemButton className={router === item.url ? 'active' : ''}>
                  <Typography variant={'nav'}>{item.name}</Typography>
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default function Header() {
  const [appDrawer, setAppDrawer] = useState(false);
  const trigger = useScrollTrigger();
  const router = useRouter();
  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          color="white"
          position="sticky"
          sx={{ boxShadow: 'var(--shadow)' }}
        >
          <Toolbar sx={{ height: 70 }}>
            <Box flexGrow={1}>
              <Link href="/" className="brand" passHref>
                <Image
                  src={'/images/logo/LOGO R.png'}
                  width={437}
                  height={354}
                  style={{ width: 60, height: 'auto' }}
                  alt="Winzoy Group"
                  priority
                />
              </Link>
            </Box>
            <Box sx={{ mx: 1, display: { xs: 'none', md: 'block' } }}>
              <List
                sx={{
                  display: 'flex',
                  width: '100%',
                }}
              >
                {menu.map((item) =>
                  !item.subItem ? (
                    <Link href={item.url} passHref key={item.name}>
                      <ListItemButton
                        sx={{
                          borderRadius: 1,
                          '&.active': {
                            bgcolor: 'primary.main',
                            color: '#fff',
                          },
                          '&.active:hover': {
                            bgcolor: 'primary.main',
                            color: '#fff',
                          },
                        }}
                        className={router.pathname === item.url ? 'active' : ''}
                      >
                        <Typography variant={'nav'}>{item.name}</Typography>
                      </ListItemButton>
                    </Link>
                  ) : (
                    <SumMenuItem data={item} key={item.name} />
                  )
                )}
              </List>
            </Box>
            <Button
              variant="contained"
              sx={{ mr: 1 }}
              startIcon={<PhoneInTalk />}
              component={'a'}
              href="tel:+1300946969"
            >
              1300 Winzoy
            </Button>
            {/* <Button
              variant="contained"
              color="secondary"
              sx={{ display: { md: 'block', xs: 'none' } }}
            >
              Enquire Now
            </Button> */}
            <Button
              variant="contained"
              color="secondary"
              sx={{ display: { md: 'none', xs: 'block' } }}
              onClick={() => setAppDrawer(!appDrawer)}
            >
              <MenuIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </Slide>
      <Drawer
        anchor={'right'}
        open={appDrawer}
        onClose={() => setAppDrawer(!appDrawer)}
      >
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <IconButton
            sx={{
              bgcolor: 'primary.main',
              color: '#fff',
              '&:hover': { bgcolor: 'primary.main' },
            }}
            size="small"
            onClick={() => setAppDrawer(false)}
          >
            <Close />
          </IconButton>
        </Toolbar>
        <Divider />
        <Box sx={{ minWidth: 250, px: 2 }}>
          <List>
            {menu.map((item) =>
              !item.subItem ? (
                <Link href={item.url} passHref key={item.name}>
                  <ListItemButton
                    sx={{
                      borderRadius: 1,
                      '&.active': {
                        bgcolor: 'primary.main',
                        color: '#fff',
                      },
                      '&.active:hover': {
                        bgcolor: 'primary.main',
                        color: '#fff',
                      },
                    }}
                    className={router.pathname === item.url ? 'active' : ''}
                  >
                    <Typography variant={'nav'}>{item.name}</Typography>
                  </ListItemButton>
                </Link>
              ) : (
                <SumMenuItem data={item} key={item.name} />
              )
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
