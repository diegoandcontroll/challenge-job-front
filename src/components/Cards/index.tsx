import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
  chakra,
  Grid,
  GridItem,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import React from 'react';
import { Sale } from '~/utils/interface';

export const Cards = (item: Sale) => {
  return (
    <Flex justify='space-between' align='center' mt='8'>
      <Box borderRadius='8' bg='gray.200' p='8' minWidth='390px'>
        <Text>Customer info</Text>
        <UnorderedList>
          <ListItem>Name - {item.customer.name}</ListItem>
          <ListItem>E-mail - {item.customer.email}</ListItem>
          <ListItem>Document - {item.customer.document}</ListItem>
        </UnorderedList>
        <Divider pt='4' pb='4' />
        <Text>Producer</Text>
        <UnorderedList>
          <ListItem>Name - {item.producer.name}</ListItem>
          <ListItem>E-mail - {item.producer.email}</ListItem>
          <ListItem>Document - {item.producer.document}</ListItem>
        </UnorderedList>
        <Divider pt='4' pb='4' />
        <Text>Transactions</Text>
        <UnorderedList>
          <ListItem>Value - {item.transaction.value}</ListItem>
          <ListItem>Freight_type - {item.transaction.freight_type}</ListItem>
          <ListItem>Payment_type - {item.transaction.payment_type}</ListItem>
          <ListItem>Status - {item.transaction.status}</ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};
