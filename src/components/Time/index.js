import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

 const Container = styled.div`
	display: flex;
	justify-content: center;
    margin-left: 30px;
	& span {
		width: 70px;
		background-color: #222;
		height: 40px;
		border-radius: 50px;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 30px;
		font-weight: 700;
        font-size: 20px;
	}
`;

function Timer(props) {
	const { count } = props;

	return (
		<>
			<Container>
				<span>{count}</span>
			</Container>
		</>
	);
}

Timer.protoType = {
	count: PropTypes.number.isRequired,
};

export default Timer;