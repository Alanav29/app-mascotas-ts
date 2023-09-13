import { Link } from "react-router-dom";
import PetsMenu from "./PetsMenu";
import "../../styles/navbar/Navbar.css";
import UsersMenu from "./UsersMenu";
import logoIMG from "../../assets/hogarPeludoLogo.svg";

const Navbar = () => {
	return (
		<div className="bg-gray-100 p-2 flex text-lg">
			<Link to="/" className="d-flex mx-2 me-auto">
				<img className="h-8" src={logoIMG} />
			</Link>

			<PetsMenu />
			<UsersMenu />
		</div>
	);
};

export default Navbar;
