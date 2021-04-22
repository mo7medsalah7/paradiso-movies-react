import styled from "styled-components";
import usePopularSeries from "../../hooks/usePopularSeries";
import TVCard from "./../../components/cards/TvCard";
import Loader from "react-loader-spinner";

const PopularContainer = styled.div`
  .movies-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 12px;
  }
`;

export default function PopularSeries() {
  const { isLoading, isError, data, error } = usePopularSeries();

  if (isLoading) {
    return (
      <div className="loader">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={300000} //3 secs
        />
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <PopularContainer className="section-landing-page">
      <h2 className="section-title-landing-page">Popular Series..?</h2>
      <div className="movies-list">
        {data.results.slice(1, 7).map((tv) => {
          return <TVCard key={tv.id} tv={tv} />;
        })}
      </div>
    </PopularContainer>
  );
}
