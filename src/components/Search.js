import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

const InputWrapper = styled.div`
  width: 100%;
  input::placeholder {
    font-size: 0.9rem;
    color: #fff;
  }

  @media (max-width: 776px) {
    input::placeholder {
      font-size: 0.6rem;
      text-transform: capitalize;
    }
  }
`;

export default function Search({ history }) {
  const [userText, setUserText] = useState("");

  const changeTextHandler = (e) => {
    e.preventDefault();
    setUserText(e.target.value);
  };

  return (
    <InputWrapper>
      <input
        type="text"
        placeholder="Search for a movie"
        onChange={changeTextHandler}
      />
      <Link to={`/results/${userText}`}>
        <a className="submit">
          <input type="submit" value="Search" />
        </a>
      </Link>
    </InputWrapper>
  );
}
