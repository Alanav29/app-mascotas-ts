import { Link } from "react-router-dom";
import PetsMenu from "./PetsMenu";
import "../../styles/navbar/Navbar.css";
import UsersMenu from "./UsersMenu";

const Navbar = () => {
	return (
		<div className="bg-gray-100 p-2 flex text-lg">
			<Link to="/" className="d-flex mx-2 me-auto">
				Logo
			</Link>

			<PetsMenu />
			<UsersMenu />
		</div>
	);
};

export default Navbar;
