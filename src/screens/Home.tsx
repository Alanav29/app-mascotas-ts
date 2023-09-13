import "../styles/home/Home.css";
import Description from "../components/home/Description";
import PetsButtons from "../components/home/PetsButtons";

const Home = () => {
	return (
		<div>
			<Description />
			<div className="home-buttons-section  flex justify-center">
				<PetsButtons />
			</div>
		</div>
	);
};

export default Home;
