import { Link } from "react-router-dom";

interface Props {
	classBg: string;
	buttonText: string;
	url: string;
}

const PetButton: React.FC<Props> = ({ classBg, buttonText, url }) => {
	return (
		<Link to={url} className={`petButtonHome text-center ${classBg}`}>
			{buttonText}
		</Link>
	);
};

export default PetButton;
