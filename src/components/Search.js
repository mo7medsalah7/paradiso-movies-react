import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Search({history}) {
  const [userText, setUserText] = useState("");

  console.log(userText);
  
  const changeTextHandler = (e) => {
    e.preventDefault();
    setUserText(e.target.value);
  };
 
  return (
    <>
      <input type="text" placeholder="Search for a movie" onChange={changeTextHandler}/>
      <Link to={`/results/${userText}`}>
        <a>
          <input type="submit"/>
        </a>
      </Link>
    </>
  );
}
