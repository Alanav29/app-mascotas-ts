import { lostPetsBaseEndpoint } from "../../config/apiRoutes";

type petData = {
	name: string;
	date_lost: string;
	description: string;
};

type options = {
	method: "POST";
	headers: Headers;
	body: FormData;
	redirect: "follow";
};

const postLostPet = (
	petData: petData,
	user_id: string,
	image: string,
	token: string
) => {
	const petInfo = {
		name: petData.name,
		date_lost: petData.date_lost,
		description: petData.description,
		image: image,
	};

	const myHeaders = new Headers();
	myHeaders.append("Authorization", `Bearer ${token}`);

	const formdata = new FormData();
	formdata.append("name", petInfo.name);
	formdata.append("user_id", user_id);
	formdata.append("date_lost", petInfo.date_lost);
	formdata.append("description", petInfo.description);
	formdata.append("image", petInfo.image);

	const requestOptions: options = {
		method: "POST",
		headers: myHeaders,
		body: formdata,
		redirect: "follow",
	};

	return fetch(lostPetsBaseEndpoint, requestOptions);
};

export default postLostPet;
