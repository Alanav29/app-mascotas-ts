import axios from "axios";
import { lostPetsBaseEndpoint } from "../../config/apiRoutes";

const getLostPet = (petId: string) => {
	const config = {
		method: "get",
		maxBodyLength: Infinity,
		url: `${lostPetsBaseEndpoint}${petId}`,
		headers: {},
	};

	const getLostPetRequest = () => axios(config);
	return getLostPetRequest();
};

export default getLostPet;
