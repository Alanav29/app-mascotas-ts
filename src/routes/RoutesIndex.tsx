import { Routes, Route } from "react-router-dom";
import Home from "../screens/Home";

const RoutesIndex = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
};

export default RoutesIndex;
