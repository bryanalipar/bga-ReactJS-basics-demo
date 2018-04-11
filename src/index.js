import React from 'react';
import { render } from 'react-dom'; /*Import {} something from react-dom.*/
// import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Root from './Root';


class Main extends React.Component {

	render() {

		return ( <Root /> );
	}

}

render(<Main />, document.getElementById('root'));



