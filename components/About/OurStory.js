import {
  HomeRepairServiceRounded,
  OpenWithRounded,
  TravelExploreRounded,
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
          <Typography
            variant="subTitle"
            component="h3"
            sx={{ fontSize: 18, color: 'var(--asset-color2)' }}
          >
            Our Journey So Far
          </Typography>
          <Typography variant="title" component="h2">
            How We’ve Evolved
          </Typography>
        </Box>
        <Timeline
          position="alternate"
          sx={{
            '.MuiTypography-body2': {
              fontSize: 20,
              fontWeight: 700,
              color: 'secondary.main',
            },
            '.MuiTypography-h6': {
              color: 'primary.main',
            },
          }}
        >
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
              <TimelineDot color="secondary">
                <WifiProtectedSetup />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Established
              </Typography>
              <Typography>
                We began our journey with a vision to make a difference. Over
                the years, our commitment to excellence has driven us to achieve
                significant milestones.
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
                <TravelExploreRounded />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Setup in India
              </Typography>
              <Typography>
                We expanded our operations to India, broadening our reach and
                enhancing our ability to serve a diverse range of clients.
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
              <TimelineDot color="secondary">
                <OpenWithRounded />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Further Expansion
              </Typography>
              <Typography>
                Our growth continued as we ventured into new markets, further
                establishing our presence and capabilities.
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
                <HomeRepairServiceRounded />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                New Developments
              </Typography>
              <Typography>
                We introduced new initiatives and services, adapting to the
                evolving needs of our clients and the industry.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </div>
  );
}
