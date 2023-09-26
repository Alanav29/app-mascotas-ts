import SignUpForm from "../components/signUp/SignUpForm";

const SignUp = () => {
	return (
		<div className="p-6 mx-auto flex flex-col max-w-xl lg:max-w-4xl">
			<h1 className="my-6 text-4xl font-semibold mx-0 ">Registrarse</h1>
			<SignUpForm />
		</div>
	);
};

export default SignUp;
