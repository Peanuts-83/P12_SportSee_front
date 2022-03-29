
function Header({ firstname }) {
	return (
		<div className="Header">
			<h1>Bonjour <span className="name" data-testid="firstname">{firstname}</span></h1>
			<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
		</div>
	);
}

export default Header;
