import { Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import LostPets from "../screens/LostPets";

const RoutesIndex = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signIn" element={<SignIn />} />
			<Route path="/mascotas-perdidas" element={<LostPets />} />
		</Routes>
	);
};

export default RoutesIndex;
