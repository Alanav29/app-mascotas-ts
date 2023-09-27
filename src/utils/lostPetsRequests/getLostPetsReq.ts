import axios from "axios";

import { lostPetsBaseEndpoint } from "../../config/apiRoutes";

const configGetLostPets = () => {
	const config = {
		method: "get",
		maxBodyLength: Infinity,
		url: lostPetsBaseEndpoint,
	};

	return config;
};

const getAllLostPets = () => axios(configGetLostPets());

export default getAllLostPets;
