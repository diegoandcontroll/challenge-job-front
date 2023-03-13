import { Box, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { Item } from '~/utils/interface';
import { Cards } from '../Cards';
import '../../styles/style.css';
export const Main = () => {
  const [data, setData] = useState<Item[]>([]);
  const [pageNumber, setPageNumber] = useState(0);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(`https://challange-nodedjob.onrender.com/api/sales`);
        const sales = await response.json();
        setData(sales.items);
        setLoading(false);
      } catch (error) {
        return error;
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  const moviesPerPage = 6;
  const pagesVisited = pageNumber * moviesPerPage;
  const displayMovies = data
    .slice(pagesVisited, pagesVisited + moviesPerPage)
    .map((item, i) => <Cards key={i} {...item} />);
  const pageCount = Math.ceil(data.length / moviesPerPage);
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };
  return (
    <>
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
        {loading && <Spinner />}
        {displayMovies}
      </Box>

      <Box bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'>
        <ReactPaginate
          previousLabel={'🡰'}
          nextLabel={'🡲'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </Box>
    </>
  );
};
