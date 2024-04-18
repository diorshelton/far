import React, { useState } from "react";
import styled from "styled-components";


const StyledPagination = styled.ul`
  display: flex;
  list-style: none;
`;
const Pagination = ({ data }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(25);

	const pages = [];
	console.log(data.length);
	for (let i = 1; i < Math.ceil(data.length / itemsPerPage); i++) {
		pages.push(i);
		console.log(pages);
	}

	const renderPageNumbers = pages.map((number) => {
		return (
			<li className="page-number" key={number} id={number}>
				{number}
			</li>
		);
	});
  
	return (
  <>
    <StyledPagination>
      {renderPageNumbers}
    </StyledPagination>
  </>
  )
};

export default Pagination;
