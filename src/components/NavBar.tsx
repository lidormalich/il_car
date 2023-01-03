import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface NavBarProps {

}

const NavBar: FunctionComponent<NavBarProps> = () => {
    return (<>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid d-flex">
                <NavLink className="navbar-brand " to="/">
                    <img src="/logoNew.png" alt="popcorn" width={50} />
                    <span className=" justify-content-center align-items-center">IL Cars</span>
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">
                                Home
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/TopSeries">
                                Top Series
                            </NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </>);
}

export default NavBar;