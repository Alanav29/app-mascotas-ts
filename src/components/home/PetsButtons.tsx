import PetButton from "./PetButton";
import "../../styles/home/PetsButtons.css";

const PetsButtons = () => {
	return (
		<div className="pet-buttons-box">
			<div className="flex">
				<PetButton
					classBg={"bg-color-one"}
					buttonText={"Mascotas Perdidas"}
					url={"/mascotas-perdidas"}
				/>
				<PetButton
					classBg={"bg-color-two"}
					buttonText={"Mascotas Resguardadas"}
					url={"/mascotas-resguardadas"}
				/>
				<PetButton
					classBg={"bg-color-three"}
					buttonText={"Mascotas en Adopción"}
					url={"/mascotas-en-adopcion"}
				/>
			</div>
		</div>
	);
};

export default PetsButtons;
