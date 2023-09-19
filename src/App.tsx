import "../src/index.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesIndex from "./routes/RoutesIndex";
import Footer from "./components/footer/Footer";

const App = () => {
	return (
		<Router>
			<Navbar />
			<RoutesIndex />
			<Footer />
		</Router>
	);
};

export default App;
