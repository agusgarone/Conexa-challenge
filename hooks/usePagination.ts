import { useCallback, useEffect, useState } from "react";
import { AxiosResponse } from "axios";

const usePagination = (
  fetchDataFn: () => Promise<AxiosResponse<unknown, unknown>>,
  initialPage = 1
) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPage = useCallback(
    async (page: number) => {
      setLoading(true);
      try {
        const res = await fetchDataFn();
        console.log("res", res);
        setData([]);
        setTotalPages(1);
        setCurrentPage(page);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [fetchDataFn]
  );

  useEffect(() => {
    fetchPage(currentPage);
  }, [fetchPage, currentPage]);

  const nextPage = () => currentPage < totalPages && fetchPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && fetchPage(currentPage - 1);
  const goToPage = (page: number) =>
    page >= 1 && page <= totalPages && fetchPage(page);

  return {
    data,
    currentPage,
    totalPages,
    loading,
    nextPage,
    prevPage,
    goToPage,
  };
};

export default usePagination;
