import { Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import LostPets from "../screens/LostPets";
import SignUp from "../screens/SignUp";

const RoutesIndex = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signIn" element={<SignIn />} />
			<Route path="/signUp" element={<SignUp />} />
			<Route path="/mascotas-perdidas" element={<LostPets />} />
		</Routes>
	);
};

export default RoutesIndex;
