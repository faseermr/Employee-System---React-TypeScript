import { useState, useEffect } from "react";

const usePagination = (data: any) => {
  const [itemPerPage, setItemPerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [indexLastItem, setIndexLastItem] = useState<number>(
    currentPage * itemPerPage
  );
  const [indexFirstItem, setIndexFirstItem] = useState<number>(
    indexLastItem - itemPerPage
  );

  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(data.length / itemPerPage); i++) {
    if (!pages.includes(i)) {
      pages.push(i);
    }
  }

  useEffect(() => {
    setIndexLastItem(currentPage * itemPerPage);
    setIndexFirstItem(indexLastItem - itemPerPage);
  }, [currentPage, indexLastItem]);

  return { indexFirstItem, indexLastItem, currentPage, pages, setCurrentPage };
};

export default usePagination;
