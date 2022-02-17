import React from "react";
import { Link } from "react-router-dom";
import style from "styled-components";

const Nav = style.div`
padding:10px;
color:white;
display:flex;
background-color:black;
`;
const Linked = style.span`
float:left;
margin-left:10px;
color:white;
text-decoration:underline;

`;
export const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <Linked>Home</Linked>
      </Link>
      <Link to="/products">
        <Linked>All Products</Linked>
      </Link>
    </Nav>
  );
};
