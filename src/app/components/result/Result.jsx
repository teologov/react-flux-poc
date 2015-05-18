import React, { PropTypes } from "react";

export default class Result extends React.Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		authorName: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired
	}

	/*static defaultProps = {
		name: "Bobby"
	}*/

	render() {
		return (
			<article>
				<h4>{this.props.name}</h4>
				<p>{this.props.authorName}</p>
				<a href={this.props.url}>Go to Repo</a>
			</article>
		)
	}
}