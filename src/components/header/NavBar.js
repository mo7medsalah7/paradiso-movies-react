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
    @media (max-width: 1090px) {
      grid-template-columns: repeat(auto-fit, 100%);
      grid-gap: 10px;
    }
    ul {
      justify-content: center;
      align-items: center;
      align-content: center;
      margin-bottom: 0px;
      li {
        padding: 0 10px;
        width: 40%;
        transition: all ease-in 0.1s;
        &:hover {
          width: 45%;
        }
      }
    }
  }
  .navbar-wrapper {
    display: grid;
    align-items: center;
    padding: 48px;
    @media (max-width: 1090px) {
      grid-template-columns: repeat(auto-fit, 70% 20%);
      ul {
        display: grid;
        padding: 0px;
      }
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
      @media (max-width: 1090px) {
        display: grid;
      }
      li {
        a {
          padding: 1.6rem;
          font-family: Oswald;
          @media (max-width: 1090px) {
            padding: 0rem;
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

export default function NavBar({ background }) {
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/super">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
              <div className="user-actions">
                <ul>
                  <li>
                    <Link href="/users/login">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </NavbarContainer>
  );
}
