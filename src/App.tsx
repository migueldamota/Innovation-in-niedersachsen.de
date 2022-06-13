import "./styles/App.scss";

import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import { useState } from "react";
import Alert from "./components/Alert";

export default function App () {
	const [modalOpen, setModalOpen] = useState(true);

	return (
		<>

			{ modalOpen && <Alert closeModal={() => setModalOpen(false)} /> }

			<Header />

			<Routes>

				<Route path="/" element={<Home />} />

			</Routes>

		</>
	)
}
