import PetCard from "./PetCard";
import "../../styles/petScreens/PetsScreen.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userFeature";
import { selectChangesCounter } from "../../features/changesCounterFeature";
import AddPetCard from "./AddPetCard";

type Pet = {
	name: string;
	_id: string;
	createdAt: string;
	date_lost: string;
	date_found: string;
	description: string;
	image: {
		secure_url: string;
	};
};

type Result = { status: number; data: Pet[] };

type DelPet = (petId: string, token: string) => Result;

interface Props {
	getPets: () => Result;
	url: string;
	delPet: DelPet;
	cardUrl: string;
}

const PetsGeneral: React.FC<Props> = ({ getPets, url, delPet, cardUrl }) => {
	const [pets, setPets] = useState<Array<Pet>>([]);
	const user = useSelector(selectUser);
	const changesCounter = useSelector(selectChangesCounter);

	let addPetCard = <></>;

	const setAddCard = () => {
		if (user.token) {
			addPetCard = <AddPetCard url={url} />;
		}
	};
	setAddCard();

	useEffect(() => {
		const fetchLostPetsData = async () => {
			try {
				const result = await getPets();

				if (result.status === 200) {
					setPets(result.data);
				}
			} catch (e) {
				console.log(
					"Ocurrio un error al traer las mascotas perdidas",
					(e as Error).message
				);
			}
		};
		fetchLostPetsData();
	}, [changesCounter, getPets]);

	const [orderChanged, setOrderChanged] = useState(false);
	const [toggleMostRecent, setToggleMostRecent] = useState("");
	const [toggleLessRecent, setToggleLessRecent] = useState("active");

	const mostRecentFilter = () => {
		if (orderChanged == false) {
			setPets(pets.reverse());
			setOrderChanged(true);
			setToggleMostRecent("active");
			setToggleLessRecent("");
		}
	};

	const lessRecentFilter = () => {
		if (orderChanged == true) {
			setPets(pets.reverse());
			setOrderChanged(false);
			setToggleMostRecent("");
			setToggleLessRecent("active");
		}
	};

	return (
		<div className="container-fluid">
			<div className="petsFilter my-3 d-flex">
				<div className="d-flex align-items-center ms-4 me-2">Ordenar por</div>
				<div
					onClick={mostRecentFilter}
					className={`m-2 d-flex align-items-center rounded-5 btn ${toggleMostRecent}`}
				>
					Más recientes
				</div>
				<div
					onClick={lessRecentFilter}
					className={`m-2 d-flex align-items-center rounded-5 btn ${toggleLessRecent}`}
				>
					Más antiguas
				</div>
			</div>
			<div className="petsBox d-flex justify-content-center flex-wrap">
				{addPetCard}
				{pets.map((pet) => (
					<PetCard key={pet._id} pet={pet} delPet={delPet} cardUrl={cardUrl} />
				))}
			</div>
		</div>
	);
};

export default PetsGeneral;
