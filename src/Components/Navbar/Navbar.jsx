import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Logo, Menu, MenuItem, Navigation, Search, StyledHeader, Wrapper } from './NavbarStyle';

const Navbar = () => {
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
                  to="/"
                >
                  Todas
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  style={{
                    color: isActiveLink === "most-valued" ? "yellow" : "white",
                  }}
                  to="/mas-valoradas"
                >
                  Más valoradas
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  style={{
                    color: isActiveLink === "least-valued" ? "yellow" : "white",
                  }}
                  to="/menos-valoradas"
                >
                  Menos valoradas
                </NavLink>
              </MenuItem>
            </Menu>
          </Navigation>
          <Search>
            <div style={{ display: "flex" }}>
              <input
                className="search-input"
                type="text"
                placeholder="Buscar por nombre..."
                name="search"
              />
              <button aria-label="boton buscar" className="search-button">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.66667 12C2.66667 6.86116 6.86114 2.66669 12 2.66669C17.1389 2.66669 21.3333 6.86116 21.3333 12C21.3333 14.3307 20.464 16.46 19.0417 18.099L19.6094 18.6667H21.3333L29.3333 26.6667L26.6667 29.3334L18.6667 21.3334V19.6094L18.099 19.0417C16.46 20.4641 14.3307 21.3334 12 21.3334C6.86114 21.3334 2.66667 17.1389 2.66667 12ZM18.6667 12C18.6667 8.30233 15.6977 5.33335 12 5.33335C8.30231 5.33335 5.33334 8.30233 5.33334 12C5.33334 15.6977 8.30231 18.6667 12 18.6667C15.6977 18.6667 18.6667 15.6977 18.6667 12Z"
                    fill="#FFFFFE"
                  />
                </svg>
              </button>
            </div>
          </Search>
        </div>
      </Wrapper>
    </StyledHeader>
  );
}

export default Navbar