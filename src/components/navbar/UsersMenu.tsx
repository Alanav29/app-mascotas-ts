import { Link, useNavigate } from "react-router-dom";
import { selectUser, setUser } from "../../features/userFeature";
import { useSelector, useDispatch } from "react-redux";

const UsersMenu = () => {
	const navigate = useNavigate();
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const signOff = () => {
		window.localStorage.clear();
		dispatch(setUser(false));
		navigate("/");
	};

	let userOptions = <></>;

	if (user === false) {
		userOptions = (
			<>
				<div className="m-1 rounded bg-blue-500 p-2">
					<Link className="text-white" to="/signIn">
						Iniciar sesión
					</Link>
				</div>
				<div className="m-1 rounded bg-emerald-400 p-2">
					<Link className="text-white" to="/signUp">
						Registrarse
					</Link>
				</div>
			</>
		);
	} else if (user.email) {
		userOptions = (
			<>
				<div className="m-1 rounded bg-amber-400 p-2">
					<Link className="text-white" to="/user-data">
						Mi perfil
					</Link>
				</div>
				<button
					className="bg-red-600 p-2 text-white rounded m-1"
					onClick={signOff}
				>
					Cerrar Sesion
				</button>
			</>
		);
	}
	return (
		<div className="flex flex-col items-end dropdown">
			<button className="mx-2 flex items-center ">
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
			</button>
			<div className="border border-gray-300 rounded w-fit p-2 dropdown-menu bg-gray-50 ">
				{userOptions}
			</div>
		</div>
	);
};

export default UsersMenu;
