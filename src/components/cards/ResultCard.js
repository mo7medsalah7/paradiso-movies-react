import React from "react";
import styled from "styled-components";


const ResultCardStyles = styled.div`
  .card-wrapper {
    @media (max-width: 600px) {
      grid-template-columns: repeat(auto-fit, 22% 78%);
    }
    @media (min-width: 1024px) {
    }
    display: grid;
    grid-template-columns: repeat(auto-fit, 18% 82%);
    grid-gap: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    border: 1px solid rgba(var(--lightGrey), 1);
    margin-bottom: 12px;
    h3 {
      color: var(--green-color);
    }
    .poster {
      img {
        border-radius: 12px 0px 0px 12px;
        width: 100%;
        height: auto;
      }
    }
    .card-inner {
      padding: 14px 84px 18px 14px;

      .card-basic-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, 70% 15% 15%);
        grid-gap: 15px;
        margin-bottom: 12px;
        p.vote_average, p.media_type {
          display: flex;
          justify-content: end;
          color: rgba(0, 0, 0, 0.8);
        }
        p.media_type {
          background-color: var(--green-color);
          color: var(--white-color);
          margin: 0 auto;
          padding: 4px;
        }
      }
      .card-more-info {
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
    .card-more-info {
      color: rgba(0, 0, 0, 0.8);
      font-weight: 300;
    }
  }
`;

export default function ResultCard({ data }) {
  if (data.results.length > 0) {
    return (
      <>
        <ResultCardStyles>
          {data.results.map((result) => {
            return (
              <div key={result.original_title} className="card-wrapper">
                <div className="poster">
                  <a href={`${result.media_type}` === "movie" ? `/movie/${result.id}` : `/tv/${result.id}`}>
                    <img
                      src={`${process.env.REACT_APP_IMAGES_BASIC_URL}/${result.poster_path}`}
                      alt={result.original_title || result.original_name}
                    />
                  </a>
                  
                </div>
                <div className="card-inner">
                  <div className="card-basic-row">
                    <a href={`${result.media_type}` === "movie" ? `/movie/${result.id}` : `/tv/${result.id}`}>
                        <h3>{result.original_title || result.original_name}</h3>
                    </a>
                    <p className="vote_average">{result.vote_average}</p>
                    <p className="media_type">{result.media_type}</p>
                  </div>
                  <div className="card-more-info">
                    <p>{result.overview}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ResultCardStyles>
      </>
    );
  } 
}
