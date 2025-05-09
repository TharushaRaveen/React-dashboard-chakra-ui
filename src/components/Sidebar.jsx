import React from 'react';
import { 
  Box, 
  VStack, 
  Text, 
  Flex, 
  Icon, 
 Button,
 useColorMode,
  Spacer
} from '@chakra-ui/react';
import { 
  LayoutDashboard, 
  Database, 
  LineChart, 
  BookOpen, 
  ShoppingBag,
  Sun,
  Moon
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, isActive: true },
  { name: 'Data Lab', icon: Database, isActive: false },
  { name: 'Surveys', icon: LineChart, isActive: false },
  { name: 'Library', icon: BookOpen, isActive: false },
  { name: 'Marketplace', icon: ShoppingBag, isActive: false },
];

const Sidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <Box
      h="100%"
      bg={colorMode === 'dark' ? 'gray.700' : 'white'}
      borderRadius="lg"
      boxShadow="md"
      p={4}
    >
      <Flex 
        direction="column" 
        h="100%"
      >
        {/* Logo */}
        <Flex 
          justify="center" 
          align="center" 
          py={6} 
          mb={6}
          borderRadius="md"
          bg={colorMode === 'dark' ? 'gray.600' : 'gray.100'}
        >
          <Text fontSize="xl" fontWeight="bold" letterSpacing="wide">
            Logo
          </Text>
        </Flex>
        
        {/* Navigation */}
        <VStack spacing={1} align="stretch">
          {navItems.map((item) => (
            <Flex
              key={item.name}
              py={3}
              px={4}
              cursor="pointer"
              borderRadius="md"
              bg={item.isActive ? (colorMode === 'dark' ? 'brand.600' : 'brand.500') : 'transparent'}
              color={item.isActive ? 'white' : (colorMode === 'dark' ? 'gray.200' : 'gray.700')}
              _hover={{
                bg: item.isActive 
                  ? (colorMode === 'dark' ? 'brand.600' : 'brand.500') 
                  : (colorMode === 'dark' ? 'gray.600' : 'gray.100'),
              }}
              transition="all 0.2s"
            >
              <Icon as={item.icon} mr={3} boxSize={5} />
              <Text fontWeight={item.isActive ? 'medium' : 'normal'}>
                {item.name}
              </Text>
            </Flex>
          ))}
        </VStack>
        
        <Spacer />
        
        {/* Theme Toggle */}
        <Button 
          onClick={toggleColorMode} 
          variant="ghost" 
          justifyContent="flex-start" 
          leftIcon={colorMode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          mt={6}
        >
          {colorMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Flex>
    </Box>
  );
};

export default Sidebar;