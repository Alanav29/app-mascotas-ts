import SignInForm from "../components/signIn/SignInForm";
import "../styles/signIn/SignIn.css";

const SignIn = () => {
	return (
		<div className="p-6 mx-auto flex flex-col max-w-xl lg:max-w-4xl">
			<h1 className="my-6 text-4xl font-semibold mx-0 ">Iniciar Sesion</h1>
			<SignInForm />
		</div>
	);
};

export default SignIn;
