import {
  Fastfood,
  Hotel,
  LaptopMac,
  Repeat,
  WifiProtectedSetup,
} from '@mui/icons-material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export default function OurStory() {
  return (
    <div>
      <Container>
        <Box sx={{ py: 7, textAlign: 'center' }}>
          <Typography variant="title" component="h2">
            Our Story So Far
          </Typography>
          <Typography variant="subTitle" component="h3">
            Here is our <span>JOURNEY</span>
          </Typography>
        </Box>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              2018
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <WifiProtectedSetup />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Establish
              </Typography>
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
                deleniti eum necessitatibus porro, voluptates perspiciatis
                ducimus dolor veniam animi libero assumenda dicta recusandae
                quasi quo natus laboriosam aperiam temporibus iure!
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              2019
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMac />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Setup in India
              </Typography>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis temporibus ut quo, similique, modi omnis ipsum sint
                odit autem odio architecto dicta nam officia veniam itaque.
                Similique sapiente saepe ipsa!
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              2019
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <WifiProtectedSetup />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Establish
              </Typography>
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
                deleniti eum necessitatibus porro, voluptates perspiciatis
                ducimus dolor veniam animi libero assumenda dicta recusandae
                quasi quo natus laboriosam aperiam temporibus iure!
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              2020
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMac />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Lorem, ipsum.{' '}
              </Typography>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis temporibus ut quo, similique, modi omnis ipsum sint
                odit autem odio architecto dicta nam officia veniam itaque.
                Similique sapiente saepe ipsa!
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </div>
  );
}
