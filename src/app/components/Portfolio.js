import React from 'react';

import { Footer } from './app/components/Footer';
import { Header } from './app/components/Header';
import { Topbar } from './app/components/Topbar';

class Portfolio extends React.Component {

	constructor() {
		super();
		this.state = {

			fontWeight: false,
			keyWord: '',
			headerMounted: true

		};

	}

	onChangeFontWeight(weight) {

		this.setState({

			fontWeight: !this.state.fontWeight

		});

	}

	onChangeHeaderMounted() {

		this.setState({ 

			headerMounted: !this.state.headerMounted 

		});

	}

	searchKeyword(string) {

		alert(string);

	}

	// Communicating between Parent and Child Component
	ringBell() {

		alert('Riiingggggg!');

	}


	render() {
		
		let whole_num = { 
			val: 5,
			dec: 5.8 
		};

		let nav_items = {
			theme: '#B03A2E',
			tabs: [
				'home',
				'portfolio',
				'about',
				'contact us',
				'logo out'
			],
			footer: [
				'Sitemap',
				'FAQ'
			]
		};

		let counter = 0, headerCmp = '';

		return (

			<div className='container'>
				<div className="row">
					<div className="twelve columns">
						<Topbar ring={this.ringBell} searchKeyword={ e => this.searchKeyword(e) } keyWord={ this.state.keyWord } />
					</div>
				</div>
				<div className="row">
					<div className="four columns"> 
						<Header 
						changeFontWeight={ this.onChangeFontWeight.bind(this) } 
						counter={ counter } 
						fontWeight={ this.state.fontWeight } 
						nav_items={nav_items} 
						/> 
					</div>
					<div className="eight columns row" style={{ border: '1px solid red' }}>
						<h3>Portfolio</h3>
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<Footer siteMapLink={ nav_items.footer } />
					</div>
				</div>
			</div>

		);

	}

}

export default Portfolio;
