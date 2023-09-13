import { Link } from "react-router-dom";
import "../../styles/navbar/PetsMenu.css";
const PetsMenu = () => {
	return (
		<button className="flex flex-col items-end dropdown">
			<a className="mx-2 flex items-center">
				<div>Mascotas</div>
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={16}
						height={16}
						fill="currentColor"
						className="bi bi-caret-down-fill"
						viewBox="0 0 16 16"
					>
						<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
					</svg>
				</div>
			</a>
			<div className="border border-gray-300 rounded w-fit p-2 dropdown-menu bg-gray-50">
				<ul className="flex flex-col">
					<li className="flex m-1">
						<Link className="hover:text-violet-500" to="/mascotas-perdidas">
							Mascotas Perdidas
						</Link>
					</li>
					<li className="flex m-1">
						<Link className="hover:text-violet-500" to="/mascotas-resguardadas">
							Mascotas Resguardadas
						</Link>
					</li>
					<li className="flex m-1">
						<Link className="hover:text-violet-500" to="/mascotas-en-adopcion">
							Mascotas en Adopción
						</Link>
					</li>
				</ul>
			</div>
		</button>
	);
};

export default PetsMenu;
