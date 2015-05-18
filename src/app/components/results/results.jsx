import React from "react";
import { List } from "immutable";
import Result from "components/result/Result.jsx";
// function(result) {return result}
export default class Results extends React.Component {
	/*static propTypes = {
		results: PropTypes.object.isRequired
	}*/

	render() {
		return (
			<section>
				<h3>Results</h3>
				
				<ul>
					{this.props.results.map(result => 
						<li>
							<Result name={result.get("name")} 
									authorName={result.get("authorName")}
									url={result.get("url")} />
						</li>
					)}
				</ul>
			</section>
		)
	}
}