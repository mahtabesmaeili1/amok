import styled from "styled-components";

import { useState } from "react";

import "../Styles/Navigation.css";
export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Logo className="blink_me" href="/">
        AMØK
      </Logo>
      <Hamburger onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu open={open}>
        <ul className="menu2">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </Menu>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  /* position: absolute; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #ececec;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
  @media (max-width: 780px) {
    font-size: 17px;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background-color: #ececec;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 780px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 780px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;

    max-height: ${({ open }) => (open ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;
