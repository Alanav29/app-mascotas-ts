import axios from "axios";
import qs from "qs";
import { usersBaseEndpoint } from "../../config/apiRoutes";

type User = {
	name: string;
	email: string;
	password: string;
};

const postUser = (user: User) => {
	const data = qs.stringify({
		name: user.name,
		email: user.email,
		password: user.password,
	});

	const config = {
		method: "post",
		maxBodyLength: Infinity,
		url: usersBaseEndpoint,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		data: data,
	};

	const postUserRequest = () => axios(config);

	return postUserRequest();
};

export default postUser;
