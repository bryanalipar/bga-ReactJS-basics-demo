import React from 'react';
import PropTypes from 'prop-types'; /*Good practice to check props passed to your components.*/

export class Home extends React.Component {

	render() {

		let content = '', bool = false;

		if(!bool) {

			content = <p>Bool is False</p>;

		} else {

			content = <p>So is True</p>;

		}

		// console.log(this.props);

		return(

			<article>
				<p>This is the home Component</p>

				<code> { this.props.decimal } + 2 = { this.props.decimal + 2 } </code>

				{ content }

				<pre>{ " Here's a string example! " }</pre>

				<code>6 is { 6 === this.props.whole_num ? <b>equal</b> : 'not equal' } to whole_num variable. </code>

				<hr />

				{ this.props.children ? this.props.children : '' }

			</article>

		);

	}
}

Home.propTypes = {

	children: PropTypes.element.isRequired,
	decimal: PropTypes.number,
	other: PropTypes.object,
	whole_num: PropTypes.number 

};