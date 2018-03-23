import React from 'react';

import { Footer } from './app/components/Footer';
import { Header } from './app/components/Header';
import { Home } from './app/components/Home';
import { Topbar } from './app/components/Topbar';

class App extends React.Component {

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
					<div className="four columns"> 
						<Home whole_num={ whole_num.val } decimal={ whole_num.dec } other={whole_num}>
							<h4>Child element in bold format.</h4>
						</Home> 
					</div>
					<div className="four columns">
						<Home whole_num={6} decimal={ 6.4 } other={null}>
							<i>This is a child element.</i>
						</Home> 
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

export default App;
