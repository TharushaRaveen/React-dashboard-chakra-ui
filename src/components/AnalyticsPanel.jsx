import React from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  useColorMode, 
  VStack, 
  HStack, 
  Divider,
  Flex,
  Badge,
  SimpleGrid
} from '@chakra-ui/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// Mock data for the pie chart
const userData = [
  { name: 'Staff', value: 151, color: '#3182CE' },
  { name: 'Students', value: 200, color: '#38A169' },
  { name: 'Faculty', value: 200, color: '#805AD5' },
  { name: 'Other', value: 200, color: '#DD6B20' },
];

// Auth method data
const authData = [
  { method: 'Microsoft', count: 100 },
  { method: 'Internal', count: 100 },
  { method: 'SAML', count: 100 },
];

const CustomTooltip = ({ active, payload }) => {
  const { colorMode } = useColorMode();
  
  if (active && payload && payload.length) {
    return (
      <Box 
        bg={colorMode === 'dark' ? 'gray.700' : 'white'} 
        p={2} 
        borderRadius="md" 
        boxShadow="md"
        border="1px solid"
        borderColor={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
      >
        <Text fontWeight="bold">{`${payload[0].name} : ${payload[0].value}`}</Text>
      </Box>
    );
  }
  
  return null;
};

const AnalyticsPanel = () => {
  const { colorMode } = useColorMode();
  
  return (
    <Box
      bg={colorMode === 'dark' ? 'gray.700' : 'white'}
      borderRadius="lg"
      boxShadow="sm"
      p={5}
      h="100%"
      overflow="hidden"
    >
      <VStack align="stretch" spacing={6} h="100%">
        <Box>
          <Heading size="md" mb={1}>Daily Active Users</Heading>
          <Text fontSize="3xl" fontWeight="bold">1,051</Text>
          <HStack mt={2} spacing={2}>
            {userData.map(item => (
              <HStack key={`${item.name}-${item.color}`} spacing={1} align="center">
                <Box w={3} h={3} borderRadius="full" bg={item.color} />
                <Text fontSize="sm" color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}>
                  {item.name} - {item.value}
                </Text>
              </HStack>
            ))}
          </HStack>
        </Box>
        
        <Box flex={1} minH="200px">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={userData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {userData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </Box>
        
        <Divider />
        
        <Box>
          <Heading size="md" mb={3}>By Authentication Method</Heading>
          <SimpleGrid columns={3} spacing={4}>
            {authData.map(item => (
              <VStack key={item.method} align="center">
                <Text color={colorMode === 'dark' ? 'gray.300' : 'gray.500'} fontSize="sm">
                  {item.method}
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                  {item.count}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
};

export default AnalyticsPanel;