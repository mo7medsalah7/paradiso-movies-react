import React, { useState } from "react";
import styled from "styled-components";
import FilmCard from "./cards/FilmCard";
import useTrendingDaily from './../hooks/trending/useTrendingDaily';
import useTrendingWeekly from './../hooks/trending/useTrendingWeekly';

const TrendingContainer = styled.div`
  span.hot-icon {
    font-size: 30px;
  }
  .select-plan {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    grid-gap: 12px;
    .select-plan__wrapper {
      border-radius: 12px;
      padding: 5px 40px;
      display: grid;
      grid-template-columns: repeat(2, 50%);
    }
    span {
      cursor: pointer;
      width: 100%;
      border: 1px solid #009688;
      border-radius: 12px;
      padding: 5px 40px;
    }
    span.clicked {
      background-color: var(--green-color);
      color: var(--white-color);
      font-size: 16px;
      padding: 5px 40px;
      border-radius: 12px;
      letter-spacing: 0.9px;
      cursor: pointer;
      transition: all ease-in-out 0.3s;

      &:nth-child(2) {
        background-color: var(--white-color);
        color: var(--main-color);
      }
    }
    span.not-clicked {
      background-color: var(--green-color);
      color: var(--white-color);
      font-size: 16px;
      padding: 5px 40px;
      border-radius: 12px;
      letter-spacing: 0.9px;
      cursor: pointer;
      transition: all ease-in-out 0.3s;
    }
  }
  .movies-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 12px;
  }
`;

export default function Trending() {
  
  const { isLoading:daily_loading, isError: daily_error, data: daily_results, error } = useTrendingDaily();
  const { isLoading: weekly_loading, isError: weekly_error, data: weekly_results } = useTrendingWeekly();
  
  const [trendingResults, setTrendingResults] = useState(daily_results);
  const [clicked, setBtnClicked] = useState(true);

  function handleClick(mode) {
    if (mode === "day") {
      setTrendingResults(daily_results);
      setBtnClicked(true);
    } else if (mode === "week") {
      setTrendingResults(weekly_results);
      setBtnClicked(!true);
    }
    console.log(mode);
    return trendingResults;
  }

  return (
    <div>
      <TrendingContainer className="section-landing-page">
        <h2 className="section-title-landing-page">Trending </h2>
        <div className="select-plan">
          <div className="select-plan__wrapper">
            <span
              type="button"
              className={clicked ? "clicked" : ""}
              onClick={() => handleClick("day")}
            >
              Today
            </span>
            <span
              type="button"
              className={clicked ? "clicked" : "not-clicked "}
              onClick={() => handleClick("week")}
            >
              Weekly
            </span>
          </div>
        </div>

        <div className="movies-list">
          {trendingResults.results.slice(1, 14).map((film) => {
            return <FilmCard key={film.id} film={film}></FilmCard>;
          })}
        </div>
      </TrendingContainer>
    </div>
  );
}
