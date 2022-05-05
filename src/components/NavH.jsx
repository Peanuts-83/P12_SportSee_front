import logo from "../assets/logo.png";
import PropTypes from "prop-types";

/**
 * This function returns a div with a logo and horizontal navigation.
 * @param {array} currentUser - Props containing userId state & setUserId setter.
 * @function onclick - Logo click switch between 2 mocked users.
 * @returns A div with a logo and a nav-h.
 */
function NavH({ currentUser }) {
	const [userId, setUserId] = currentUser;
	// Available users userId
	const ids = [12, 18];

	return (
		<div className="Nav-h">
			<img
				className="logo"
				onClick={() => setUserId(ids.filter((id) => id !== userId)[0])}
				src={logo}
				alt="SportSee logo"
				title="Click to switch demo User"
			/>
			<nav className="nav-h">
				<span className="nav-h_menu"
				onClick={() => setUserId(ids.filter((id) => id !== userId)[0])}>Accueil</span>
				<span className="nav-h_menu"
				onClick={() => setUserId(ids.filter((id) => id !== userId)[0])}>Profil</span>
				<span className="nav-h_menu"
				onClick={() => setUserId(ids.filter((id) => id !== userId)[0])}>Réglages</span>
				<span className="nav-h_menu"
				onClick={() => setUserId(ids.filter((id) => id !== userId)[0])}>Communauté</span>
			</nav>
		</div>
	);
}

export default NavH;

NavH.propTypes = {
	currentUser: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
	),
};
