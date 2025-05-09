import React from 'react';
import { Grid, GridItem, Box, useColorMode } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import StatCards from '../components/StatCards';
import ActivityChart from '../components/ActivityChart';
import AnalyticsPanel from '../components/AnalyticsPanel';
import ActivityLog from '../components/ActivityLog';

function Dashboard() {
  const { colorMode } = useColorMode();
  
  return (
    <Grid
      templateColumns={{ base: "1fr", sm: "250px 1fr" }}
      templateRows={{ base: "auto", sm: "repeat(4, auto)" }}
      gap={4}
      p={4}
      bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}
      minHeight="100vh"
    >
      {/* Sidebar */}
      <GridItem
        rowSpan={{ base: 1, sm: 4 }}
        colSpan={1}
        as={Box}
        borderRadius="lg"
        overflow="hidden"
        position={{ base: 'static', sm: 'sticky' }}
        top="4"
        height={{ base: 'auto', sm: 'calc(100vh - 2rem)' }}
      >
        <Sidebar />
      </GridItem>

      {/* Main Content Area */}
      <GridItem colSpan={1}>
        <Grid
          templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
          gap={4}
        >
          {/* Left Column */}
          <GridItem>
            <StatCards />
            <Box mt={4}>
              <ActivityChart />
            </Box>
          </GridItem>

          {/* Right Column */}
          <GridItem>
            <AnalyticsPanel />
          </GridItem>
        </Grid>

        {/* Activity Log - Full Width */}
        <Box mt={4}>
          <ActivityLog />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default Dashboard;