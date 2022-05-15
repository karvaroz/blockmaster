import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink} from "react-router-dom";
import {
  Logo,
  Menu,
  MenuItem,
  Navigation,
  StyledHeader,
  Wrapper,
} from "./NavbarStyle";
import { useDispatch } from "react-redux";
import { startLogout } from "../../Redux/actions/authActions";

const SecondNav = () => {
  const dispatch = useDispatch();

  const isActiveLink = useSelector((state) => state.filter);

  return (
    <StyledHeader>
      <Wrapper>
        <div className="header-content">
          <NavLink to="/movies">
            <Logo
              src="./images/logo-blockBuster.png"
              width="100"
              height="64"
              title="Logo Block Master"
              alt="Logo Block Master"
            />
          </NavLink>
          <Navigation>
            <Menu>
              <MenuItem>
                <NavLink
                  style={{
                    color: isActiveLink === "all" ? "yellow" : "white",
                  }}
                  to="/movies"
                >
                  Todas
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  style={{
                    color: isActiveLink === "most-valued" ? "yellow" : "white",
                  }}
                  to="/moviesMoreRated"
                >
                  Más valoradas
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  style={{
                    color: isActiveLink === "least-valued" ? "yellow" : "white",
                  }}
                  to="/moviesLessRated"
                >
                  Menos valoradas
                </NavLink>
              </MenuItem>
            </Menu>
          </Navigation>
          <Link to="/crud" className="btn btn-light">
            CRUD
          </Link>
          <button
            className="btn btn-light"
            onClick={() => dispatch(startLogout())}
          >
            Cerrar
          </button>
        </div>
      </Wrapper>
    </StyledHeader>
  );
};

export default SecondNav;
