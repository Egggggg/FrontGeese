import axios from "axios";
import { config } from "./config.js";

export async function getGoose(slug) {
	const req = axios.get(`${config.api}/geese/${slug}`);
	const data = await req.then((res) => res.data);

	return data;
}
