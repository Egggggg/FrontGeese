import React from "react";

export default class Sort extends React.Component {
	constructor(props) {
		super(props);

		this.state = { value: "old" };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	getValue() {
		return this.state.value;
	}

	render() {
		return (
			<div id="sort">
				<label htmlFor="sort">Sort By:</label>
				<select
					name="sort"
					id="sort"
					value={this.state.value}
					onChange={this.refreshGeese}
				>
					<option value="recent">Recent</option>
					<option value="old">Old</option>
					<option value="most_likes">Most Likes</option>
					<option value="least_likes">Least Likes</option>
					<option value="name_asc">Name (Ascending)</option>
					<option value="name_desc">Name (Descending)</option>
				</select>
			</div>
		);
	}
}
