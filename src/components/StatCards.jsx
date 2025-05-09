import React from 'react';
import { 
  Box, 
  SimpleGrid, 
  Stat, 
  StatLabel, 
  StatNumber, 
  StatHelpText, 
  useColorMode,
  Flex,
  Icon,
  Tooltip
} from '@chakra-ui/react';
import { Users, Clock, TrendingUp } from 'lucide-react';

const StatCard = ({ title, value, date, icon, tooltipText }) => {
  const { colorMode } = useColorMode();
  
  return (
    <Tooltip label={tooltipText} placement="top" hasArrow>
      <Box
        bg={colorMode === 'dark' ? 'gray.700' : 'white'}
        borderRadius="lg"
        boxShadow="sm"
        p={5}
        transition="transform 0.3s, box-shadow 0.3s"
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'md'
        }}
      >
        <Flex justify="space-between" align="flex-start">
          <Stat>
            <StatLabel fontWeight="medium" fontSize="sm" color={colorMode === 'dark' ? 'gray.300' : 'gray.500'}>
              {title}
            </StatLabel>
            <StatNumber fontSize="3xl" fontWeight="bold" mt={1}>
              {value}
            </StatNumber>
            <StatHelpText fontSize="xs">
              {date}
            </StatHelpText>
          </Stat>
          <Flex
            borderRadius="full"
            bg={colorMode === 'dark' ? 'whiteAlpha.200' : 'gray.100'}
            p={2}
            color={colorMode === 'dark' ? 'white' : 'brand.500'}
          >
            <Icon as={icon} boxSize={5} />
          </Flex>
        </Flex>
      </Box>
    </Tooltip>
  );
};

const StatCards = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
      <StatCard 
        title="Daily Active Users" 
        value="1,051" 
        date="18 Mar 2023" 
        icon={Users}
        tooltipText="Unique users who performed an action in the last 24 hours"
      />
      <StatCard 
        title="Monthly Active Users" 
        value="1,051" 
        date="18 Mar 2023" 
        icon={TrendingUp}
        tooltipText="Unique users who performed an action in the last 30 days"
      />
      <StatCard 
        title="Daily Time Per Active User" 
        value="10:51" 
        date="18 Mar 2023" 
        icon={Clock}
        tooltipText="Average time spent by users in the application daily"
      />
    </SimpleGrid>
  );
};

export default StatCards;