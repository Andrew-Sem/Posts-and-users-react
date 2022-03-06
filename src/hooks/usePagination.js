import { useMemo } from "react";

export const usePagination = (totalPages) => {
  const result = useMemo(() => {
    let pagesArr = [];
    for (let i = 0; i < totalPages; i++) {
      pagesArr.push(i + 1);
    }
    return pagesArr;
  }, [totalPages]);
  return result;
};
