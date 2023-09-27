import { lostPetsBaseEndpoint } from "../../config/apiRoutes";

type petData = {
	name: string;
	date_lost: string;
	description: string;
	pet_status: string;
};

type options = {
	method: "PUT";
	headers: Headers;
	body: FormData;
	redirect: "follow";
};

const putLostPet = (
	data: petData,
	id: string,
	image: string,
	token: string
) => {
	const putLostPetEndpoint = `${lostPetsBaseEndpoint}${id}`;

	const myHeaders = new Headers();
	myHeaders.append("Authorization", `Bearer ${token}`);

	const formdata = new FormData();
	if (data.name) {
		formdata.append("name", data.name);
	}
	if (data.date_lost) {
		formdata.append("date_lost", data.date_lost);
	}
	if (data.description) {
		formdata.append("description", data.description);
	}
	if (data.pet_status) {
		formdata.append("pet_status", data.pet_status);
	}
	if (image) {
		formdata.append("image", image);
	}

	const requestOptions: options = {
		method: "PUT",
		headers: myHeaders,
		body: formdata,
		redirect: "follow",
	};

	const putLostPetRequest = () => fetch(putLostPetEndpoint, requestOptions);

	return putLostPetRequest();
};

export default putLostPet;
