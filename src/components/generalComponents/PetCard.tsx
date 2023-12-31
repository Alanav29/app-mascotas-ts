import { Link } from "react-router-dom";
import "../../styles/petScreens/PetCard.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/userFeature";
import { setChange } from "../../features/changesCounterFeature";

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

type Result = { status: number };

type DelPet = (petId: string, token: string) => Result;

interface Props {
	pet: Pet;
	cardUrl: string;
	delPet: DelPet;
}

const PetCard: React.FC<Props> = ({ pet, delPet, cardUrl }) => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	let deleteButtonOption = <></>;

	const fetchDeletePet = async () => {
		try {
			const result = await delPet(pet._id, user.token);

			if (result.status === 200) {
				dispatch(setChange(1));
				console.log("se borro mascota");
			}
		} catch (e) {
			console.log(
				"Ocurrio un error al borrar la mascota ",
				(e as Error).message
			);
		}
	};

	const deletePet = () => {
		fetchDeletePet();
	};

	if (user.isAdmin) {
		deleteButtonOption = (
			<button className="btn btn-danger" onClick={deletePet}>
				Borrar
			</button>
		);
	}

	let dateType = "";
	let date = pet.createdAt;
	if (pet.date_lost) {
		dateType = "Fecha de perdida";
		date = pet.date_lost;
	} else if (pet.date_found) {
		dateType = "Fecha en que se encontro";
		date = pet.date_found;
	}

	return (
		<>
			<div className="card m-3 petCard">
				<img
					src={pet.image.secure_url}
					className="petCardImg rounded-top"
					alt="..."
				/>
				<div className="card-body">
					<h1 className="card-title fs-4 colorThree">{pet.name}</h1>
					<h2 className="card-title fs-5">{dateType}</h2>
					<p className="card-title fs-6">{date}</p>
					<p className="card-title fs-6 overflow-y-scroll petDesc">
						{pet.description}
					</p>
					<Link
						to={`${cardUrl}${pet._id}`}
						className="btn btn-warning text-white me-2"
					>
						Mas detalles
					</Link>
					{deleteButtonOption}
				</div>
			</div>
		</>
	);
};

export default PetCard;
