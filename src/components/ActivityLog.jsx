import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  useColorMode,
  Icon,
  Divider
} from '@chakra-ui/react';
import {
  ShieldAlert,
  LogIn
} from 'lucide-react';

// Mock data for activity log
const activityLogData = [
  {
    id: 1,
    user: 'User name here',
    action: 'Permissions changed to admin by admin123',
    time: '2hrs ago',
    type: 'permission'
  },
  {
    id: 2,
    user: 'User name',
    action: 'Successfully logged in',
    time: '2hrs ago',
    type: 'login'
  },
  {
    id: 3,
    user: 'User name here',
    action: 'Permissions changed to admin by admin123',
    time: '2hrs ago',
    type: 'permission'
  },
  {
    id: 4,
    user: 'User name here',
    action: 'Permissions changed to admin by admin123',
    time: '2hrs ago',
    type: 'permission'
  },
  {
    id: 5,
    user: 'User name',
    action: 'Successfully logged in',
    time: '2hrs ago',
    type: 'login'
  },
  {
    id: 6,
    user: 'User name',
    action: 'Successfully logged in',
    time: '2hrs ago',
    type: 'login'
  },
  {
    id: 7,
    user: 'User name',
    action: 'Successfully logged in',
    time: '2hrs ago',
    type: 'login'
  },
  {
    id: 8,
    user: 'User name',
    action: 'Successfully logged in',
    time: '2hrs ago',
    type: 'login'
  },
  {
    id: 9,
    user: 'User name',
    action: 'Successfully logged in',
    time: '2hrs ago',
    type: 'login'
  }
];

const ActivityLogItem = ({ user, action, time, type }) => {
  const { colorMode } = useColorMode();

  return (
    <HStack spacing={4} w="100%" py={3}>
      <Box
        p={2}
        borderRadius="md"
        bg={type === 'permission' ?
          (colorMode === 'dark' ? 'orange.700' : 'orange.100') :
          (colorMode === 'dark' ? 'green.700' : 'green.100')
        }
      >
        <Icon
          as={type === 'permission' ? ShieldAlert : LogIn}
          color={type === 'permission' ?
            (colorMode === 'dark' ? 'orange.300' : 'orange.500') :
            (colorMode === 'dark' ? 'green.300' : 'green.500')
          }
          boxSize={5}
        />
      </Box>
      <VStack align="start" spacing={0} flex={1}>
        <Text fontWeight="medium">{user}</Text>
        <Text color={colorMode === 'dark' ? 'gray.300' : 'gray.600'} fontSize="sm">
          {action}
        </Text>
      </VStack>
      <Text color={colorMode === 'dark' ? 'gray.400' : 'gray.500'} fontSize="xs">
        {time}
      </Text>
    </HStack>
  );
};

const ActivityLog = () => {
  const { colorMode } = useColorMode();
  const [scrollAreaHeight, setScrollAreaHeight] = useState(360); // Default to 6 items (60px each)
  const containerRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const spaceAbove = rect.top;
        // Account for padding and heading height, ensuring space at bottom
        const availableHeight = windowHeight - spaceAbove - 32; // 32px for bottom spacing
        const minHeight = 360; // Minimum height for 6 items
        const calculatedHeight = Math.max(minHeight, availableHeight);
        setScrollAreaHeight(calculatedHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <Box
      bg={colorMode === 'dark' ? 'gray.700' : 'white'}
      borderRadius="lg"
      boxShadow="sm"
      p={5}
      h="100%"
      ref={containerRef}
      pb={{ base: 8, md: 4 }} // Responsive bottom padding to match sidebar
    >
      <Heading size="md" mb={4}>Activity Log</Heading>
      <Box
        maxH={`${scrollAreaHeight}px`}
        overflowY="auto"
        sx={{
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: colorMode === 'dark' ? 'gray.600' : 'gray.100',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: colorMode === 'dark' ? 'gray.400' : 'gray.300',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: colorMode === 'dark' ? 'gray.300' : 'gray.400',
          },
        }}
      >
        <VStack spacing={0} align="stretch" divider={<Divider />}>
          {activityLogData.map((item) => (
            <ActivityLogItem
              key={item.id}
              user={item.user}
              action={item.action}
              time={item.time}
              type={item.type}
            />
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default ActivityLog;