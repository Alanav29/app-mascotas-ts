import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/userFeature";
import { useNavigate } from "react-router-dom";
import signIn from "../../utils/userRequest/signInReq";

type signInData = {
	email: string;
	password: string;
};

const SignInForm = () => {
	const { register, handleSubmit } = useForm<signInData>();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const notify = () => {
		toast.error("Revisa tus datos", {
			position: toast.POSITION.TOP_RIGHT,
		});
	};

	const trySignIn = async (data: signInData) => {
		try {
			const result = await signIn(data.email, data.password);

			if (result.status === 200) {
				dispatch(
					setUser({
						_id: result.data._id,
						email: data.email,
						token: result.data.token,
						name: result.data.name,
						isAdmin: result.data.isAdmin,
					})
				);

				window.localStorage.setItem(
					"user",
					JSON.stringify({
						_id: result.data._id,
						email: data.email,
						token: result.data.token,
						name: result.data.name,
						isAdmin: result.data.isAdmin,
					})
				);

				navigate("/");
			}
		} catch (e) {
			notify();
			console.log("Ocurrio un error al iniciar sesion ", (e as Error).message);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(trySignIn)} className="flex flex-col">
				<div className="mb-3 flex flex-col">
					<label htmlFor="email-input" className="w-fit mb-2">
						Email
					</label>
					<input
						type="email"
						className="rounded border-gray-300 border mb-2 p-1 px-2"
						id="email-input"
						{...register("email")}
						placeholder="name@example.com"
					/>
					<p className="mb-2 text-gray-500">No compartas tus datos con nadie</p>
				</div>
				<div className="mb-3 flex flex-col">
					<label htmlFor="password-input" className="w-fit mb-2">
						Contraseña
					</label>
					<input
						type="password"
						className="rounded border-gray-300 border mb-2 p-1 px-2"
						id="password-input"
						{...register("password")}
						placeholder="Password"
					/>
				</div>
				<button
					type="submit"
					className="rounded bg-emerald-400 p-2 text-white w-fit"
				>
					Iniciar sesion
				</button>
			</form>
			<ToastContainer />
		</>
	);
};

export default SignInForm;
