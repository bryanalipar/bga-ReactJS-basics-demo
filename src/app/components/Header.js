import React from 'react';
import styled from 'styled-components';

export class Header extends React.Component {

	constructor(props) {

		super(props);
		this.state = { 
			theme: props.nav_items.theme,
			counter: props.counter,
			status: 0,
			fontWeight: !props.fontWeight 
		};

		setTimeout(() => {

			this.setState({ status: 1 });

		}, 3000);

		console.log('constructor');

	}

	componentWillMount() {

		console.log('componentWillMount');

	}

	componentDidMount() {

		console.log('componentDidMount');

	}

	componentWillReceiveProps(nextProps) {

		console.log('componentWillReceiveProps', nextProps);

	}

	shouldComponentUpdate(nextProps, nextState) {

		console.log('shouldComponentUpdate', nextProps, nextState);
		return true;

	}

	componentWillUpdate(nextProps, nextState) {

		console.log('componentWillUpdate', nextProps, nextState);

	}

	componentDidUpdate(nextProps, nextState) {

		console.log('componentDidUpdate', nextProps, nextState);

	}

	componentWillUnmount() {

		console.log('componentWillUnmount');

	}


	increment() {

		this.setState({ counter: this.state.counter + 1 });

	}

	decrement() {

		let counter = this.state.counter - 1;
		counter = counter < 0 ? 0 : counter;

		this.setState({ counter });

	}


	changeFontWeight() {

		this.props.changeFontWeight(this.state.fontWeight);

	}

	render() {

	const ButtonSec = styled.div`

		display: flex;
    	justify-content: space-around;

	`,

	Tab = styled.a` 
		
		background: ${ this.props.nav_items.theme };
		padding: .8rem;
		border-radius: 5px;
		color: white

	`;

	const navStyle = {

		'border': '1px solid ',
		'borderRadius': '5px',
		'padding': '.8rem'

	};

		// console.log(this.props);

		return(

			<aside>
				<nav className="navigation">
					<div className="container">
						<ul className="nav_menu">
							{ this.props.nav_items.tabs.map((tab, i) => <li key={ i }> <Tab href='/'>{ tab }</Tab> </li>) }
						</ul>
					</div>
				</nav>

				<hr />
				<p>The counter value is <strong>{ this.state.counter }</strong></p>

				<ButtonSec>
					<button onClick={() => this.increment()}>Increment</button>
					<button onClick={() => this.decrement()}>Decrement</button>
				</ButtonSec>
				
				<p>{ this.state.status } is the status value</p>

				<hr />

				<p style={{ fontWeight: (this.props.fontWeight ? 'bold' : 'normal') }}>Light text here initially displayed</p>

				<button onClick={ this.changeFontWeight.bind(this) }>{ this.props.fontWeight ? 'NORMALISE' : 'BOLDEN' } TEXT</button>

			</aside>

		);

	}

}