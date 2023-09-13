import { Link } from "react-router-dom";

const UsersMenu = () => {
	return (
		<button className="flex flex-col items-end dropdown">
			<a className="mx-2 flex items-center">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						className="bi bi-person-circle me-1"
						viewBox="0 0 16 16"
					>
						<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
						<path
							fillRule="evenodd"
							d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
						/>
					</svg>
				</div>
				<div>Usuarios</div>
			</a>
			<div className="border border-gray-300 rounded w-fit p-2 dropdown-menu bg-gray-50 ">
				<ul className="flex flex-col">
					<li className="m-1 rounded bg-blue-500 p-2">
						<Link className="text-white" to="/mascotas-perdidas">
							Iniciar sesión
						</Link>
					</li>
					<li className="m-1 rounded bg-emerald-400 p-2">
						<Link className="text-white" to="/mascotas-resguardadas">
							Registrarse
						</Link>
					</li>
				</ul>
			</div>
		</button>
	);
};

export default UsersMenu;
