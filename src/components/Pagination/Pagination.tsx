import { Box, Button, Flex } from "@radix-ui/themes";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  goToPage: (pageNumber: number) => void;
}

function Pagination({ currentPage, totalPages, goToPage}: PaginationProps) {
  return (
    <Flex justify='center' mt='4'>
      <Button>
        Previous
      </Button>
      <Box mx='2'>
        {`Page ${currentPage} of ${totalPages  }`}
      </Box>
      <Button>
        Next
        </Button>
    </Flex>
  )
}

export default Pagination;