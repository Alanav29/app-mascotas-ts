import axios from "axios";
import qs from "qs";
import { userSignInEndpoint } from "../config/apiRoutes";

const signIn = (email: string, password: string) => {
	const data = qs.stringify({
		email: `${email}`,
		password: `${password}`,
	});

	const config = {
		method: "post",
		maxBodyLength: Infinity,
		url: `${userSignInEndpoint}`,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		data: data,
	};

	const signInRequest = () => axios(config);

	return signInRequest();
};

export default signIn;
