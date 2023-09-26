import { useForm } from "react-hook-form";
import postUser from "../../utils/userRequest/signUpReq";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type signUpData = {
	name: string;
	email: string;
	password: string;
};

const SignUpForm = () => {
	const { register, handleSubmit } = useForm<signUpData>();
	const navigate = useNavigate();
	const notify = () => {
		toast.error("Ese usuario ya existe", {
			position: toast.POSITION.TOP_RIGHT,
		});
	};

	const signUp = (data: signUpData) => {
		const fetchSignUp = async (data: signUpData) => {
			try {
				const result = await postUser(data);

				if (result.status === 201) {
					console.log("se registro el usuario");
					navigate("/");
				}
			} catch (e) {
				notify();
				console.log(
					"Ocurrio un error al registar al usuario ",
					(e as Error).message
				);
			}
		};
		fetchSignUp(data);
	};

	return (
		<>
			<form className="flex flex-col" onSubmit={handleSubmit(signUp)}>
				<div className="mb-3 flex flex-col">
					<label className="w-fit mb-2" htmlFor="signUpNameInput">
						First Name
					</label>
					<input
						{...register("name")}
						className="rounded border-gray-300 border mb-2 p-1 px-2"
						type="text"
						placeholder="Nombre"
						id="signUpNameInput"
						required
					/>
				</div>

				<div className="mb-3 flex flex-col">
					<label className="w-fit mb-2" htmlFor="signUpEmailInput">
						Email
					</label>
					<input
						{...register("email")}
						className="rounded border-gray-300 border mb-2 p-1 px-2"
						type="email"
						placeholder="Email address"
						id="signUpEmailInput"
						required
						pattern="[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?"
					/>
				</div>

				<div className="mb-3 flex flex-col">
					<label className="w-fit mb-2" htmlFor="signUpPasswordInput">
						Password
					</label>
					<input
						{...register("password")}
						className="rounded border-gray-300 border mb-2 p-1 px-2"
						type="password"
						placeholder="Password"
						id="signUpPasswordInput"
						required
					/>
				</div>

				<button
					className="rounded bg-emerald-400 p-2 text-white w-fit"
					type="submit"
				>
					Registrarse
				</button>
			</form>
			<ToastContainer />
		</>
	);
};

export default SignUpForm;
