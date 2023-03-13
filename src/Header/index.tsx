import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useHistory, Link } from 'react-router-dom';
export const Header = () => {
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const links = [
    { label: 'Home', path: '/' },
    { label: 'About me', path: '/about' },
  ];
  function handleFunction(value: any) {
    if (value[0] === 'Home') {
      history.push('/');
    } else if (value[1] === 'About me') {
      history.push('/about');
    }
  }
  // const NavLink = ({ children }: { children: ReactNode }) => (
  //   <Link
  //     px={2}
  //     py={1}
  //     rounded={'md'}
  //     _hover={{
  //       textDecoration: 'none',
  //       bg: useColorModeValue('gray.700', 'gray.700'),
  //     }}
  //     onClick={() => handleFunction(Links)}
  //   >
  //     {children}
  //   </Link>
  // );
  return (
    <>
      <Box bg={useColorModeValue('gray.700', 'gray.900')} px={4} color='gray.300'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box onClick={() => history.push('/')}>
              <Image
                src='https://camo.githubusercontent.com/8f98243e5492f51398e1a1d3992312fe3204a30bad72bcf32c0caa60acc8b83a/68747470733a2f2f6d65747269746f2d7075626c69632e73332e73612d656173742d312e616d617a6f6e6177732e636f6d2f6d65747269746f2d77686974652d766563746f722e737667'
                w='120px'
              />
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {links.map((link, i) => (
                <>
                  <Link to={`${link.path}`} key={i}>
                    {link.label}
                  </Link>
                </>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <Avatar size={'sm'} src={'https://avatars.githubusercontent.com/u/81238955?v=4'} />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {links.map((link, i) => (
                <>
                  <Link to={`${link.path}`} key={i}>
                    {link.label}
                  </Link>
                </>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
