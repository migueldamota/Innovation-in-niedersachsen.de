import "./styles/App.scss";

import { useState } from "react";
import { Route, Routes } from "react-router";

import Header from "./components/Header";
import Home from "./pages/Home";
import Alert from "./components/Alert";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Impressum from "./pages/Impressum";

export default function App () {
	const [modalOpen, setModalOpen] = useState(true);

	return (
		<>

			{ modalOpen && <Alert closeModal={() => setModalOpen(false)} /> }

			<Header />

			<Routes>

				<Route path="/" element={<Home />} />
				<Route path="/services" element={<Services />} />
				<Route path="/impressum" element={<Impressum />} />

				<Route path="*" element={<p>Seite nicht gefunden</p>} />

			</Routes>

			<Footer />

		</>
	)
}
