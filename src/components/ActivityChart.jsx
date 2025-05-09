import React, { useState } from 'react';
import { 
  Box, 
  Heading, 
  useColorMode, 
  Flex,
} from '@chakra-ui/react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

// Mock data for the chart
const activityData = [
  { day: '1 Sep', users: 200 },
  { day: '2 Sep', users: 750 },
  { day: '3 Sep', users: 380 },
  { day: '4 Sep', users: 900 },
  { day: '5 Sep', users: 150 },
  { day: '6 Sep', users: 680 },
  { day: '7 Sep', users: 320 }
];

const ActivityChart = () => {
  const { colorMode } = useColorMode();
  const [hoveredData, setHoveredData] = useState(null);
  
  const handleMouseEnter = (data) => {
    if (data && data.activePayload) {
      setHoveredData({
        name: data.activePayload[0].payload.day,
        value: data.activePayload[0].payload.users
      });
    }
  };
  
  const handleMouseLeave = () => {
    setHoveredData(null);
  };
  
  return (
    <Box
      bg={colorMode === 'dark' ? 'gray.700' : 'white'}
      borderRadius="lg"
      boxShadow="sm"
      p={5}
      h="400px" // Explicit height to ensure ResponsiveContainer renders
      transition="all 0.2s"
    >
      <Flex direction="column" h="100%">
        <Heading size="md" mb={4}>User Activity</Heading>
        
        <Box flex={1} position="relative">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={activityData}
              margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
              onMouseMove={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis 
                dataKey="day" 
                tick={{ fontSize: 12 }}
                stroke={colorMode === 'dark' ? '#CBD5E0' : '#718096'}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                stroke={colorMode === 'dark' ? '#CBD5E0' : '#718096'}
              />
              <Tooltip 
                cursor={{ stroke: colorMode === 'dark' ? '#CBD5E0' : '#718096', strokeWidth: 1 }}
                contentStyle={{ 
                  backgroundColor: colorMode === 'dark' ? '#2D3748' : 'white',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line
                type="monotone"
                dataKey="users"
                stroke={colorMode === 'dark' ? '#63B3ED' : '#3182CE'}
                strokeWidth={2}
                activeDot={{ r: 6, fill: colorMode === 'dark' ? '#63B3ED' : '#3182CE' }}
                dot={{ r: 4, fill: colorMode === 'dark' ? '#2D3748' : 'white', strokeWidth: 2 }}
                animationDuration={500}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Flex>
    </Box>
  );
};

export default ActivityChart;