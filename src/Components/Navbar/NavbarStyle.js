import styled from "styled-components";

export const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Navigation = styled.nav``;

export const Menu = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 48px;
  font-weight: bold;
  color: #fff;
`;

export const MenuItem = styled.li`
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const Search = styled.form.attrs({
  "aria-label": "Search",
})`
  display: flex;
  .search-input {
    width: 100%;
    border: none;
    font-size: 1.25rem;
    padding: 0.625rem 1.5rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  .search-button {
    border: none;
    padding: 0.625rem 1.5rem;
    font-size: 1.25rem;
    background: #fed941;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;

export const StyledHeader = styled.header`
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 2rem;
  }
  @media screen and (min-width: 768px) {
    .header-content {
      flex-direction: row;
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  padding: 1rem;
  margin: auto;
`;