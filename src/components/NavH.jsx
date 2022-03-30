import logo from "../assets/logo.png";

import PropTypes from "prop-types"



/**
 * This function returns a div with a logo and a nav-h
 * @function onclick - Logo click switch between 2 mocked user.
 * @returns A div with a logo and a nav-h.
 */
function NavH({ currentUser }) {
    const [userId, setUserId] = currentUser
    const ids = [12, 18]

    return (
		<div className="Nav-h">
			<img
				className="logo"
                onClick={() => setUserId(ids.filter(id => id !== userId)[0])}
				src={logo}
				alt="SportSee logo"
			/>
			<nav className="nav-h">
				<span className="nav-h_menu">Accueil</span>
				<span className="nav-h_menu">Profil</span>
				<span className="nav-h_menu">Réglages</span>
				<span className="nav-h_menu">Communauté</span>
			</nav>
		</div>
	);
}

export default NavH;

NavH.proptype = {
    currentUser: PropTypes.arrayOf([PropTypes.number, PropTypes.func])
}