import Sort from "../components/sort.jsx";
import Geese from "../components/geese.jsx";

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
