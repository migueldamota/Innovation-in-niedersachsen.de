import "./styles/App.scss";

import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";

export default function App () {

	return (
		<>

			<Header />
		
			<Routes>

				<Route path="/" element={<Home />} />

			</Routes>

		</>
	)
}
