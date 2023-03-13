import { Box, Text } from '@chakra-ui/react';
export const About = () => {
  return (
    <Box
      w='100%'
      h='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
    >
      <Text>About</Text>
    </Box>
  );
};
