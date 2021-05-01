import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";
const NavbarContainer = styled.div`
  .navbar-nav {
    display: grid;
    grid-template-columns: repeat(auto-fit, 50% 50%);
    grid-gap: 78px;
    ul {
      justify-content: center;
      align-items: center;
      align-content: center;
      margin-bottom: 0px;
    }
  }
  .navbar-wrapper {
    display: grid;
    align-items: center;
    padding: 48px;
    @media (max-width: 1090px) {
      grid-template-columns: repeat(auto-fit, 70% 20%);
    }
    @media (min-width: 1091px) {
      grid-template-columns: repeat(auto-fit, 30% 70%);
    }
    .logo-name {
      font-weight: bolder;
      font-size: 40px;
      letter-spacing: 1.1px;
      span {
        font-family: var(--main-font);
      }
      span:nth-child(odd) {
        color: rgba(255, 255, 255, 1);
      }
      span:nth-child(even) {
        color: rgba(0, 150, 136, 1);
      }
    }
    .navbar-wrapper__list {
      /* display: flex; */
      @media (max-width: 1090px) {
        margin-left: auto;
      }
      button {
        border-color: rgb(255 255 255 / 10%);
        span.navbar-toggler-icon {
          background-image: url("/assets/images/menu.svg");
        }
        .navbar-light .navbar-toggler {
        }
      }
    }
    ul {
      display: flex;

      li {
        a {
          padding: 1.6rem;
          font-family: Oswald;
          @media(min-width: 400px) and (max-width: 1090px) {
            padding: 0px;
          }
        }
      }
    }
    .user-actions {
      .user-actions__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-gap: 17px;
      }
      img {
        border-radius: 50%;
      }
    }
  }
`;

export default function NavBar({background}) {
  return (
    <NavbarContainer>
      <Navbar className="navbar-wrapper" bg={background} expand="lg">
        <span className="logo-name">
          <span>p</span>
          <span>a</span>
          <span>r</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>s</span>
          <span>o</span>
        </span>
        <div className="navbar-wrapper__list">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <ul>
                <li>
                  <Link to="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link to="/super">
                    <a>Super</a>
                  </Link>
                </li>
              </ul>
              <div className="user-actions">
                <Link href="/users/login">
                  <a>
                    <span>Log In</span>
                  </a>
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </NavbarContainer>
  );
}
