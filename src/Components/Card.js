import React from 'react';
import "tachyons"

const Card = ({ card }) => {
	return (
		<div className="bg-light-green dib br3 pa3 ma2 grow">
			<div className = "tc">
				<img src={`https://robohash.org/${card.id}?150x150`} alt="Robots" />
				<h2>{card.name}</h2>
				<p>{card.email}</p>
			</div>
		</div>
		);
}

export default Card;