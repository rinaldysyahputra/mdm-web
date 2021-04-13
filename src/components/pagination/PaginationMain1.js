import React from "react";
import { useState } from "react";
import PaginationMain from "./PaginationMain";

const PaginationMain1 = (props) => {
  const { data, onDataChange } = props;
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (page) => {
    setCurrentPage(page);
  };

  const pagesTransaction = paginate(data, currentPage, pageSize);
  const handleDataChange = () => {
    onDataChange = pagesTransaction;
  };

  return (
    <PaginationMain
      itemCount={data.length}
      currentPage={currentPage}
      pageSize={pageSize}
      onPageChanged={handleChange}
    ></PaginationMain>
  );
};

export default PaginationMain1;
