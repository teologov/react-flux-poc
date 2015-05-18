import React from "react";
import Results from "components/results/Results";
import Search from "components/search/Search";
import SearchResultsStore from "stores/SearchResultsStore"

export default class RCEH extends React.Component {
	constructor(props) {
		debugger;
		super(props);

		this.state = {
			title: "Github search",
			results: SearchResultsStore.getResults()
		};
	}	

	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>

				<Search onSearch={this.onSearch}/>
				<Results results={this.state.results}/>
			</div>
		)
	}

	onSearch = (term) => {
		console.log(term);
	}

	componentDidMound() {
		SearchResultsStore.addChangeListener(this.onStoresChange);
	}

	componentWillUnmount() {
		SearchResultsStore.removeChangeListener(this.onStoresChange);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState.results != this.state.results;
	}

	onStoreChange = () => {
		this.setState({
			results: SearchResultsStore.getResults()
		});
	}
}