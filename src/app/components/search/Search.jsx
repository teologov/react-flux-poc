import React, { PropTypes } from "react";
import emptyFunction from "react/lib/emptyFunction";

export default class Search extends React.Component {

	static propTypes = {
		onSubmit: PropTypes.function
	}

	static defaultProps = {
		onSubmit: emptyFunction
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input 
				ref="inputTerm"
				type="text" />
				<button type="submit">Search</button>
			</form>
		)
	}

	onFormSubmit = (e) => {
		e.preventDefault();
		console.log(this.refs);
		this.props.onSearch(React.findDOMNode(this.refs.inputTerm).value);
	}
}