import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Button from '../Button';

const Container = styled.div`
	background: rgba(0, 0, 0, 0.5);
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 98;
	display: none;
	&.show {
		display: block;
	}
	& div {
		width: 450px;
		height: 350px;
		background: #fff;
		position: fixed;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -30%);
		z-index: 100;
		border-radius: 5px;
		color: #222;
		padding: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	& h1 {
		margin-bottom: 20px;
	}
	& p {
		margin-top: 24px;
		strong {
			color: green;
		}
	}
`;

export default function Modal(props) {
	const { status } = props;
    const router = useRouter();
	return (
		<Container className={status}>
			<div>
				<h1>Ops!!! O seu tempo acabou:(</h1>
				<p>
					Mas você pode tentar novamente!{' '}
					<strong>Redirecionando para o início...</strong>
				</p>
                <Button type="button" onClick={() => router.push('/')}>
                    RENICIAR
                </Button>
			</div>
		</Container>
	);
}