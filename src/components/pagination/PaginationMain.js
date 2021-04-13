import React from "react";
import { Pagination, Nav } from "@themesberg/react-bootstrap";
import _ from "lodash";
import PropTypes from "prop-types";

const PaginationMain = (props) => {
  const { itemCount, pageSize, currentPage, onPageChanged } = props;
  const pagesCount = Math.ceil(itemCount / pageSize);
  const pages = _.range(1, pagesCount + 1);

  return (
    <Nav>
      <Pagination>
        {pages.map((page) => {
          return (
            <Pagination.Item
              key={page}
              active={page === currentPage ? true : false}
              onClick={() => onPageChanged(page)}
            >
              {page}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </Nav>
  );
};

PaginationMain.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func.isRequired,
};

export default PaginationMain;
