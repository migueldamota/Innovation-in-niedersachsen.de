import "./styles/App.scss";

import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";

import Header from "./components/Header";
import Home from "./pages/Home";
import Alert from "./components/Alert";
import Leistungen from "./pages/Leistungen";
import Footer from "./components/Footer";
import Impressum from "./pages/Impressum";
import Kontakt from "./pages/Kontakt";

export default function App () {
	const [modalOpen, setModalOpen] = useState(true);

	return (
		<>

			<ScrollToTop />

			{ modalOpen && <Alert closeModal={() => setModalOpen(false)} /> }

			<Header />

			<Routes>

				<Route path="/" element={<Home />} />
				<Route path="/leistungen" element={<Leistungen />} />
				<Route path="/impressum" element={<Impressum />} />
				<Route path="/kontakt" element={<Kontakt />} />

				<Route path="*" element={<p>Seite nicht gefunden</p>} />

			</Routes>

			<Footer />

		</>
	)
}

function ScrollToTop () {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return null;
}
