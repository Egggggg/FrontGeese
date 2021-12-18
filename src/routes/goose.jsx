import { getGoose } from "../func.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Goose() {
	const [data, setData] = useState({
		name: "...",
		description: "...",
		image:
			"https://res.cloudinary.com/beesbeesbees/image/upload/v1639681125/c_fill,w_512/fred_da6kbb.jpg",
	});

	let slug = "";

	useEffect(async () => {
		setData(await getGoose(slug));
	}, [slug]);

	slug = useParams().slug;

	return (
		<div id="goose">
			<h1>{data.name}</h1>
			<p>{data.description}</p>
			<img src={data.image} />
		</div>
	);
}
