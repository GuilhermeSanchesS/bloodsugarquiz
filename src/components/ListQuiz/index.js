/* eslint-disable linebreak-style */
/* eslint no-tabs: ["error", { allowIndentationTabs: true }] */
import React from 'react';
import styled from 'styled-components';
import db from '../../../db.json';
import Widget from '../Widget';
import Link from '../Link';

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
			${({ theme }) => `${theme.colors.primary}`},
			#212121
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
      <ul>
        {db.external.map((linkExterno) => {
          const [projectName, githubUser] = linkExterno
            .replace(/\//g, '')
            .replace('https:', '')
            .replace('.vercel.app', '')
            .split('.');

          return (
            <li key={linkExterno}>
              <Widget.Topic
                as={Link}
                href={`/quiz/${projectName}___${githubUser}`}
              >
                {`${githubUser}/${projectName}`}
              </Widget.Topic>
            </li>
          );
        })}
      </ul>
    </List>
  );
}
