import React, { useState } from "react";
import styled from "styled-components";

const StyledPagination = styled.ul`
	display: flex;
	list-style: none;

	.page-number {
		padding: 10px;
		border: 1px solid black;
		cursor: pointer;
	}
`;

const Pagination = ({ data }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(25);

	const pages = [];
	console.log(data.length);
	for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
		pages.push(i);
		console.log(pages);
	}

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

	const handlePageNumberClick = (event) => {
		setCurrentPage(Number(event.target.id));
	};

	const renderPageNumbers = pages.map((number) => {
		return (
			<li
				className="page-number"
				key={number}
				id={number}
				onClick={handlePageNumberClick}
			>
				{number}
			</li>
		);
	});
	

	return (
		<>
		<ul className="page-numbers">
			<StyledPagination>{renderPageNumbers}</StyledPagination>
		</ul>
		</>
	);
};

export default Pagination;
