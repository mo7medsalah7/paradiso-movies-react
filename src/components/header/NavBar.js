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
    grid-template-columns: repeat(auto-fit, 1fr);
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
        width: 20%;
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
      display: flex;
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
      justify-content: space-between;
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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/super">Super</Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </NavbarContainer>
  );
}
