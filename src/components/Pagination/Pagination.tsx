import { Box, Button, Flex } from '@radix-ui/themes';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  goToPage: (pageNumber: number) => void;
}

function Pagination({ currentPage, totalPages, goToPage }: PaginationProps) {
  if (totalPages === 0) return null;

  const handlePrevious = () => {
    goToPage(currentPage - 1);
  };

  const handleNext = () => {
    goToPage(currentPage + 1);
  };

  return (
    <Flex justify="center" m="4">
      <Button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </Button>
      <Box mx="2">{`Page ${currentPage} of ${totalPages}`}</Box>
      <Button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </Button>
    </Flex>
  );
}

export default Pagination;
