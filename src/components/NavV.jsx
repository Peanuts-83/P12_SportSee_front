import icon0 from "../assets/icon-0.png"
import icon1 from "../assets/icon-1.png"
import icon2 from "../assets/icon-2.png"
import icon3 from "../assets/icon-3.png"

/**
 * This function returns a div representing vertical navigation.
 * Inside this div, there are four buttons, each with an image of a sport.
 * The buttons are inside a div with a class of nav-v_btns.
 * The copyright is inside a div with a class of copyright
 * @returns A div with a class of Nav-v.
 */
function NavV() {
    return (
        <div className="Nav-v">
            <div className="nav-v_btns">
                <div className="nav-v_btns_btn"><img src={icon3} alt="btn mode" /></div>
                <div className="nav-v_btns_btn"><img src={icon2} alt="btn mode" /></div>
                <div className="nav-v_btns_btn"><img src={icon1} alt="btn mode" /></div>
                <div className="nav-v_btns_btn"><img src={icon0} alt="btn mode" /></div>
            </div>
            <div className="copyright">Copyright © SportSee 2020 </div>
        </div>
    );
}

export default NavV;