import { Box, Flex } from '@chakra-ui/react';

import { sales } from '~/utils/contants';
import { Cards } from '../Cards';

export const Main = () => {
  return (
    <Box
      minH='100vh'
      display='flex'
      justifyContent='space-around'
      alignItems='center'
      bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
      flexWrap='wrap'
      gap='4'
      pb='8'
    >
      {sales.map((item, i) => (
        <Cards
          key={i}
          comission={item.comission}
          customer={item.customer}
          identification={item.identification}
          transaction={item.transaction}
          metadata={item.metadata}
          producer={item.producer}
          id={item.id}
        />
      ))}
    </Box>
  );
};
