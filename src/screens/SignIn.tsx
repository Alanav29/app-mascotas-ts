import SignInForm from "../components/signIn/SignInForm";
import "../styles/signIn/SignIn.css";

const SignIn = () => {
	return (
		<div className="p-4 mx-auto w-fit">
			<h1 className="my-4 text-2xl">Iniciar Sesion</h1>
			<SignInForm />
		</div>
	);
};

export default SignIn;
