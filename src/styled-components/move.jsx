import styled from "styled-components";

export const DIV = styled.div`
	border-bottom: 1px solid #d1cccb;
	padding: 1rem 0rem;
	/*-----------------$$$$$$$$$$--------------*/
	.top-section {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem;
	}
	.moving-from {
		text-align: left;
	}
	.expand {
		width: 50%;
	}
	.top-section :nth-child(2) > div {
		padding: 0.4rem;
		color: #ec5642;
		border-radius: 50%;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		display: flex;
		align-items: center;
	}
	.top-section :nth-child(2) {
		display: flex;
		/* justify-content: center; */
		align-items: center;
		/* text-align: center; */
	}
	.top-section :nth-child(4) {
		width: 10%;
	}
	.moves-code {
		font-weight: bolder;
		color: #ec5642;
	}
	.top-child {
		display: flex;
		flex-direction: column;
		padding: 0.5rem;
		/* align-items: center;
		justify-content: flex-start; */
	}
	.heading-moves {
		font-weight: bolder;
	}

	/*-----------------****************-------------*/
	.middle-section {
		display: flex;
		justify-content: space-between;
		padding: 2rem 0.2rem;
	}

	.middle-section > div {
		display: flex;
		gap: 0.5rem;
	}
	.middle-section > div > h2 {
		color: #ec5642;
	}

	.cl-checkbox {
		position: relative;
		display: inline-block;
	}

	/* Input */
	.cl-checkbox > input {
		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;
		z-index: -1;
		position: absolute;
		left: -10px;
		top: -8px;
		display: block;
		margin: 0;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		background-color: rgba(0, 0, 0, 0.6);
		box-shadow: none;
		outline: none;
		opacity: 0;
		transform: scale(1);
		pointer-events: none;
		transition: opacity 0.3s, transform 0.2s;
	}

	/* Span */
	.cl-checkbox > span {
		display: inline-block;
		width: 100%;
		cursor: pointer;
	}

	/* Box */
	.cl-checkbox > span::before {
		content: "";
		display: inline-block;
		box-sizing: border-box;
		margin: 3px 11px 3px 1px;
		border: solid 2px;
		/* Safari */
		border-color: rgba(0, 0, 0, 0.6);
		border-radius: 2px;
		width: 18px;
		height: 18px;
		vertical-align: top;
		transition: border-color 0.2s, background-color 0.2s;
	}

	/* Checkmark */
	.cl-checkbox > span::after {
		content: "";
		display: block;
		position: absolute;
		top: 3px;
		left: 1px;
		width: 10px;
		height: 5px;
		border: solid 2px transparent;
		border-right: none;
		border-top: none;
		transform: translate(3px, 4px) rotate(-45deg);
	}

	/* Checked, Indeterminate */
	.cl-checkbox > input:checked,
	.cl-checkbox > input:indeterminate {
		background-color: #ec5642;
	}

	.cl-checkbox > input:checked + span::before,
	.cl-checkbox > input:indeterminate + span::before {
		border-color: #ec5642;
		background-color: #ec5642;
	}

	.cl-checkbox > input:checked + span::after,
	.cl-checkbox > input:indeterminate + span::after {
		border-color: #fff;
	}

	.cl-checkbox > input:indeterminate + span::after {
		border-left: none;
		transform: translate(4px, 3px);
	}

	/* Hover, Focus */
	.cl-checkbox:hover > input {
		opacity: 0.04;
	}

	.cl-checkbox > input:focus {
		opacity: 0.12;
	}

	.cl-checkbox:hover > input:focus {
		opacity: 0.16;
	}

	/* Active */
	.cl-checkbox > input:active {
		opacity: 1;
		transform: scale(0);
		transition: transform 0s, opacity 0s;
	}

	.cl-checkbox > input:active + span::before {
		border-color: #85b8b7;
	}

	.cl-checkbox > input:checked:active + span::before {
		border-color: transparent;
		background-color: rgba(0, 0, 0, 0.6);
	}

	/* Disabled */
	.cl-checkbox > input:disabled {
		opacity: 0;
	}

	.cl-checkbox > input:disabled + span {
		color: rgba(0, 0, 0, 0.38);
		cursor: initial;
	}

	.cl-checkbox > input:disabled + span::before {
		border-color: currentColor;
	}

	.cl-checkbox > input:checked:disabled + span::before,
	.cl-checkbox > input:indeterminate:disabled + span::before {
		border-color: transparent;
		background-color: currentColor;
	}

	.mid-btn-container {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.view-more {
		border: 2px solid #ec5642;
		background-color: white;
		color: #ec5642;
	}
	.Quotes {
		background-color: #ec5642;
		border: none;
		color: white;
	}
	.mid-btn-container > button {
		padding: 0.5rem 1rem;
		border-radius: 0.2rem;
	}
	/*-----------------****************-------------*/
	.bottom-section {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 1rem 0.5rem;
	}
	span {
		font-weight: bolder;
	}
	.warn-sign {
		color: #ec5642;
	}

	/*--------------Adtional details-----------*/

	.show {
		display: none;
	}
	.expand-detail-top-section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2rem 0rem;
	}
	.left-btn {
		padding: 0.5rem 1rem;
		background-color: black;
		color: white;
		border-radius: 0.3rem;
	}
	.house-detail-container > div {
		padding: 1rem 0rem;
	}
	.house-detail-container > h3 {
		color: #ec5642;
		font-weight: bolder;
	}
	.details-oldHouse-container {
		display: flex;
		gap: 10rem;
	}

	@media screen and (max-width: 1150px) {
		.top-section :nth-child(4) {
			width: 20%;
		}
	}
	@media screen and (max-width: 926px) {
	}
	@media screen and (max-width: 776px) {
		.mid-btn-container > button {
			padding: 0.3rem 0.7rem;
		}
	}
	@media screen and (max-width: 645px) {
		.middle-section > div {
			display: flex;
			flex-direction: column;
			gap: 0.4rem;
		}
		.bottom-section,
		.inventory-details,
		.house-detail-container {
			font-size: small;
			width: 100%;
		}
		.details-oldHouse-container {
			gap: 5rem;
		}
	}
	@media screen and (max-width: 464px) {
		.middle-section {
			display: grid;
			grid-template-columns: auto auto auto;
			grid-gap: 1rem;
		}
		.details-oldHouse-container {
			gap: 2.5rem;
		}
		.top-section :nth-child(4) {
			width: 30%;
		}
		.expand {
			width: 100%;
		}
	}
`;
