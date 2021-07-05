import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
   return (
      <StyledNav>
         <h1>
            <Link id="logo" to="/">
               Capture
            </Link>
         </h1>
         <ul>
            <li>
               <Link to="/">1. About Us</Link>
            </li>
            <li>
               <Link to="/work">2. Our Work</Link>
            </li>
            <li>
               <Link to="/contact">3. Contact Us</Link>
            </li>
         </ul>
      </StyledNav>
   );
};

const StyledNav = styled.nav`
   min-height: 10vh;
   display: flex;
   margin: auto;
   justify-content: space-between;
   align-items: center;
   padding: 1rem 8rem;
   background: #282828;
   position: sticky;
   top: 0;
   z-index: 10;
   a {
      color: #fff;
      text-decoration: none;
   }
   ul {
      display: flex;
      list-style: none;
   }
   #logo {
      font-size: 1.5rem;
      font-family: "Lobster", cursive;
      font-weight: lighter;
   }
   li {
      padding-left: 5rem;
      position: relative;
   }
   @media (max-width: 1300px) {
      flex-direction: column;
      padding: 1.5rem 0.75rem;
      #logo {
         display: inline-block;
         margin: 0.75rem;
      }
      ul {
         padding: 1.5rem;
         justify-content: space-around;
         width: 100%;
         li {
            padding: 0;
         }
      }
   }
`;

export default Nav;
