import React from 'react';

const txtCenter = { textAlign: 'center' };

export const Footer = (props) => {

	// console.log(props);

	return ( 
		<footer style={ txtCenter }>
			<ul> 
				{ props.siteMapLink.map((tab, i) => <li key={ i }> <a href="/" >{ tab }</a> </li>) }
			</ul>
		</footer> 
	);
};

/*Example of a 'state less' component.*/