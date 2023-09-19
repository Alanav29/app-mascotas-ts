import "../styles/home/Home.css";
import Description from "../components/home/Description";
import PetsButtons from "../components/home/PetsButtons";
import PublicityBanner from "../components/publicityBanner/PublicityBanner";
import trialIMG1 from "../assets/banner1.jpg";
import trialIMG2 from "../assets/banner2.jpg";

const Home = () => {
	const publicityItems = [
		{ img: trialIMG1 },
		{ img: trialIMG2 },
		{ img: trialIMG1 },
	];

	return (
		<div>
			<Description />
			<div className="home-buttons-section flex justify-center mb-4">
				<PetsButtons />
			</div>
			<div className="flex justify-center">
				<div className="publicity-banner my-4">
					<PublicityBanner items={publicityItems} />
				</div>
			</div>
		</div>
	);
};

export default Home;
