import "../styles/home/Home.css";
import Description from "../components/home/Description";
import PetsButtons from "../components/home/PetsButtons";
import PublicityBanner from "../components/publicityBanner/PublicityBanner";
import trialIMG from "../assets/homeDescriptionImg.png";

const Home = () => {
	const publicityItems = [{ img: trialIMG }];

	return (
		<div>
			<Description />
			<div className="home-buttons-section flex justify-center mb-4">
				<PetsButtons />
			</div>
			<div className="mb-4">
				<PublicityBanner items={publicityItems} />
			</div>
		</div>
	);
};

export default Home;
