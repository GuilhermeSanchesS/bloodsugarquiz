import React from "react";
import styled from "styled-components";

const List = styled.ul`
	max-height: 140px;
	overflow-y: auto;
	::-webkit-scrollbar {
		background-color: #222;
		width: 8px;
		border-radius: 50px;
	}
	::-webkit-scrollbar-thumb {
		background-image: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.1),
			#fff
		);
		backdrop-filter: blur(4px);
		border-radius: 50px;
	}
	& li:not(:last-child) {
		margin-bottom: 8px;
	}
	& a {
		display: block;
		width: 98%;
		height: 36px;
		line-height: 36px;
		padding: 0 15px;
		border-radius: 5px;
		color: #fff;
		background-color: ${({ theme }) => `${theme.colors.primary}50`};
		text-decoration: none;
		&:hover {
			opacity: 0.8;
		}
	}
`;

export default function ListQuiz() {
	return (
		<List>
			<li>
				<a href="https://quiz-dragon-ball-immersion-alura-next-js.vercel.app/">Jean Machado</a>
			</li>
			<li>
				<a href="https://quiz-cavaleiro-zodiaco.vercel.app/">ReneSena/quiz-cavaleiro-zodiaco</a>
			</li>
		</List>
	);
}