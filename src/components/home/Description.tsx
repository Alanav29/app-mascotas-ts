import descriptionIMG from "../../assets/homeDescriptionImg.png";
import "../../styles/home/Description.css";

const Description = () => {
	return (
		<div className="bg-home flex justify-center p-4">
			<img
				src={descriptionIMG}
				className="home-description"
				alt="Dog with the brand description"
			/>
		</div>
	);
};

export default Description;
