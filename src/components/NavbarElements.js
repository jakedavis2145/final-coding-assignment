import { FaBars } from "/node_modules/react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  background-image: url("https://media.istockphoto.com/photos/power-of-big-data-binary-code-
information-bit-on-computer-monitor-picture-
id1010690668?k=20&m=1010690668&s=612x612&w=0&h=y0u_QXWQWE1eRQwTYw8Pyifk6LG0aADpZwOuPeZ9dck=");
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;
  
export const NavLink = styled(Link)`
  color: black;
  background-color:white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 50%;
  cursor: pointer;
  border: groove;
  border-radius: 2rem;
  &.active {
    color: white;
    background-color:black;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;