import { Box, Divider, Flex, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import { Item } from '~/utils/interface';

export const Cards = ({ customer, producer, transaction }: Item) => {
  return (
    <Flex justify='space-between' align='center' mt='8'>
      <Box borderRadius='8' bg='gray.200' p='8' minWidth='390px'>
        <Text>Customer</Text>

        <UnorderedList>
          <ListItem>Name - {customer.name}</ListItem>
          <ListItem>E-mail - {customer.email}</ListItem>
          <ListItem>Document - {customer.document}</ListItem>
        </UnorderedList>
        <Divider pt='4' pb='4' />
        <Text>Producer</Text>
        <UnorderedList>
          <ListItem>Name - {producer.name}</ListItem>
          <ListItem>E-mail - {producer.email}</ListItem>
          <ListItem>Document - {producer.document}</ListItem>
        </UnorderedList>
        <Divider pt='4' pb='4' />
        <Text>Transactions</Text>
        <UnorderedList>
          <ListItem>Value - {+transaction.value}</ListItem>
          <ListItem>Freight_type - {transaction.freight_type}</ListItem>
          <ListItem>Payment_type - {transaction.payment_type}</ListItem>
          <ListItem>Status - {transaction.status}</ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};
