import { useState } from 'react';

export interface PaginationOPtions {
  initialPage?: number;
  pageSize?: number;
}

const usePagination = (
  totalItems: number | undefined,
  options: PaginationOPtions = {}
) => {
  const { initialPage = 1, pageSize = 8 } = options;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = totalItems
    ? Math.min(startIndex + pageSize - 1, totalItems - 1)
    : 0;

  const totalPages = totalItems ? Math.ceil(totalItems / pageSize) : 0;

  const goToPage = (pageNumber: number) => {
    setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)));
  };

  return {
    currentPage,
    startIndex,
    endIndex,
    pageSize,
    totalPages,
    goToPage
  };
};

export default usePagination;
