import React from "react";
import styled from "styled-components";
import Search from "../Search";
import NavBar from "./NavBar";

const HeaderStyles = styled.header`
  background-color: var(--main-color);
  height: 90vh;
  position: relative;
  background: url("https://pbs.twimg.com/profile_banners/1079417160680816640/1566933786/1500x500")
    no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  .overlay {
    background: rgba(39, 62, 84, 0.82);
    overflow-x: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

const InnerInformation = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));
  padding: 0px 100px;
  @media (max-width: 776px) {
    padding: 0px 20px;
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.2rem !important;
    }
  }
  @media (max-width: 922px) {
    padding: 0px 50px;
  }
  .main-info {
    h1 {
      color: #fff;
      letter-spacing: 0.6px;
      font-weight: 600;
      border-bottom: 3px solid #fff;
      margin-bottom: 0.8rem;
    }
    p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 22px;
      margin-bottom: 3rem;
    }
  }
  .search-wrapper {
    display: flex;
    position: relative;
    input {
      height: 58px;
      @media (max-width: 776px) {
        height: 5px;
      }
      @media (max-width: 992px) {
        height: 15px;
      }
    }
    input[type="text"] {
      @media (min-width: 300px) and (max-width: 776px) {
        font-size: 8px;
        letter-spacing: 0px;
      }
      width: 100%;
      display: flex;
      padding: 15px;
      background-color: transparent;
      border: 2px solid var(--white-color);
      color: var(--green-color);
      font-size: 15px;
      box-shadow: 3px 1px 0px 2px, 0px -1px 0px 2px rgba(0, 0, 0, 0.62);
      font-family: var(--alt-font);
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    input[type="submit"] {
      @media (min-width: 300px) and (max-width: 776px) {
        padding: 0px 8px;
      }
      display: inline-flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      height: 100%;
      padding: 10px 26px;
      position: absolute;
      top: 0;
      right: -1px;
      color: rgba(255, 255, 255, 1);
      background-color: var(--green-color);
      letter-spacing: 1px;
      font-size: 20px;
      cursor: pointer;
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="overlay">
        <NavBar />
        <InnerInformation>
          <div className="main-info">
            <h1>Your Gate To paradise</h1>
            <p>
              Explore your favorite movie, share others favorites and watch it.
            </p>
          </div>
          <div className="search-wrapper">
            <Search />
          </div>
        </InnerInformation>
      </div>
    </HeaderStyles>
  );
}
