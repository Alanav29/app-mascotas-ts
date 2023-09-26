import "../src/index.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesIndex from "./routes/RoutesIndex";
import Footer from "./components/footer/Footer";
import { useDispatch } from "react-redux";
import { setUser } from "./features/userFeature";
import { useEffect } from "react";

const App = () => {
	const dispatch = useDispatch();
	const reloadUser = async () => {
		const user = await JSON.parse(window.localStorage.getItem("user") || "");

		if (user.token) {
			await dispatch(setUser(user));
		}
	};

	useEffect(() => {
		reloadUser();
	});
	return (
		<Router>
			<Navbar />
			<RoutesIndex />
			<Footer />
		</Router>
	);
};

export default App;
