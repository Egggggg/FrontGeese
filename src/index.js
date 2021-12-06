import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./routes/home";
import "./index.css";

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />}></Route>
		</Routes>
	</BrowserRouter>,
	document.getElementById("root")
);
