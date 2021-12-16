import { NavLink, Outlet } from "react-router-dom";

export default function App() {
	return (
		<div>
			<ul id="menu">
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<form id="name-change">
						<label htmlFor="new-name">Set name: </label>
						<input
							type="text"
							placeholder="New name..."
							id="new-name"
							name="new-name"
						/>
						<input type="submit" value="Do it!" />
					</form>
				</li>
			</ul>
			<Outlet />
		</div>
	);
}
