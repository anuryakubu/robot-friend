import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

	return (
		<div>
			{robots.map(robot => {
				return <Card key={robot.id} card={robot} />
			})}
		</div>
		)
}

export default CardList;