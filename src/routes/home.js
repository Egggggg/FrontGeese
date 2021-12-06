import React from "react";

class Sort extends React.Component {
	render() {
		return (
			<div id="sort">
				<label htmlFor="sort">Sort By:</label>
				<select name="sort" id="sort">
					<option value="recent" selected="selected">
						Recent
					</option>
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

class Geese extends React.Component {}

export default function Home() {
	return (
		<div id="home">
			<div id="header">
				<h1>Congratulations!</h1>
				<h2>You found the Goose Archive!</h2>
			</div>
			<Sort />
			<Geese />
		</div>
	);
}
