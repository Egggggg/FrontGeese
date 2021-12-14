export default function Sort() {
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
