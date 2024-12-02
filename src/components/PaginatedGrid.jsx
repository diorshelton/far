import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const StyledGrid = styled.div`
	.container {
		background-color: #cea37d;
		display: grid;
	}

	.contents {
		display: grid;
		justify-items: center;
		@media screen and (min-width: 530px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media screen and (min-width: 900px) {
			grid-template-columns: repeat(3, 1fr);
		}
		@media screen and (min-width: 1300px) {
			grid-template-columns: repeat(4, 1fr);
		}
	}
	.pages {
		display: flex;
		list-style: none;
	}
	.page-number {
		padding: 10px;
		border: 1px solid black;
		cursor: pointer;
	}
`;

const PaginatedGrid = ({ data }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 23;

	const pages = [];
	for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
		pages.push(i);
	}

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

	const handlePageNumberClick = (event) => {
    console.log(event.target)
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
		<StyledGrid>
			<ul className="pages">{renderPageNumbers}</ul>
			<div className="container">
				<main className="contents">
					<Card body={currentItems}></Card>
				</main>
			</div>
		</StyledGrid>
	);
};

export default PaginatedGrid;
