import "../src/index.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesIndex from "./routes/RoutesIndex";

const App = () => {
	return (
		<Router>
			<Navbar />
			<RoutesIndex />
		</Router>
	);
};

export default App;
