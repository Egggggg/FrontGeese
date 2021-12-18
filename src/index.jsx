import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/app";
import Home from "./routes/home";
import Goose from "./routes/goose";

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<Home />} />
				<Route path="geese/:slug" element={<Goose />} />
			</Route>
		</Routes>
	</BrowserRouter>,
	document.getElementById("root")
);
