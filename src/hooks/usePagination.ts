import { useState } from "react";

export interface PaginationOPtions {
  initialPage?: number;
  pageSize?: number;
}

const usePagination = (totalItems: number, options: PaginationOPtions = {}) => {
  const { initialPage = 1, pageSize = 10 } = options;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1 , totalItems - 1);

  const totalPages = Math.ceil(totalItems / pageSize);

  const goToPage = (pageNumber: number) => {
    setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)));
  };

  return {
    currentPage,
    startIndex,
    endIndex,
    pageSize,
    totalPages,
    goToPage,
  }
}

export default usePagination;