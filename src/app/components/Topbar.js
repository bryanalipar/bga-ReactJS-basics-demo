import React from 'react';

export class Topbar extends React.Component {

	constructor(props) {

		super(props);

		this.state = {

			keyWord: props.keyWord

		};

	}

	onHandleChange(event) {

		this.setState({

			keyWord: event.target.value

		});

	}

	searchKeyword() {

		this.props.searchKeyword(this.state.keyWord);

	}

	render() {

		const headerStyle = { 

			display: 'flex',
			justifyContent: 'space-between'

		};

		console.log(this.props);

		return ( 
			<header style={ headerStyle }>
			
				<button>Unmount Sidebar</button>

				<button onClick={this.props.ring}>Ring a Bell!</button>

				<div className="search">
					<input 
						onChange={ (event) => this.onHandleChange(event) } 
						style={{ marginRight: '.5rem' }} 
						type="text" 
						value={ this.state.keyWord } 
					/>
					<button onClick={ () => this.searchKeyword() }>Search</button>
				</div>
			</header> 
		);

	}

}