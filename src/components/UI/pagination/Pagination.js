import React from "react";
import { usePagination } from "./../../../hooks/usePagination";

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = usePagination(totalPages);
  return (
    <div className="page-num__wrapper">
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? "page-num page-num__current" : "page-num"}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
