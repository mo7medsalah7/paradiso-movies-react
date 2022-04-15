import axios from 'axios';
import styled from 'styled-components';
import ResultCard from "../components/cards/ResultCard";
import NavBar from './../components/header/NavBar';
import useSearch from './../hooks/useSearch';
import Loader  from 'react-loader-spinner';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';


const ResultsStyle = styled.div`
  .container {
    padding: 15px 48px;
    -webkit-box-shadow: 5px 5px 8px 0px rgba(206, 206, 206, 0.75);
    -moz-box-shadow: 5px 5px 8px 0px rgba(206, 206, 206, 0.75);
    box-shadow: 5px 5px 8px 0px rgba(206, 206, 206, 0.75);
    span,
    a {
      color: var(--main-color);
    }
  }
  .logo-name > span {
    color: var(--white-color) !important;
  }



  .navbar {
    background-color: var(--green-color);
    opacity: 0.788;

  }


  .welcome_screen {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
    font-size: 30px;
    .content_highlight {
      font-weight: 600;
      font-size: 50px;
    }
  }
  .results-wrapper {
    padding: 0px 30px;
    .results-inner {
      display: grid;
      grid-template-columns: repeat(auto-fit, 25% 75%);

      @media (max-width: 776px) {
        grid-template-rows: repeat(auto-fit, 2% 98%);
        grid-template-columns: repeat(auto-fit, 100%);
      }
      .filters {
      }
    }
  }
`;

export default function SearchResult({ match }) {
    const {isLoading, isError, data, error} = useSearch(match.params.searchTerm)
    console.log(data)
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
      <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>{match.params.searchTerm}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <ResultsStyle>
      <NavBar className="navbar"/>
      <div className="welcome_screen">
          <span>
            You Searched For <span className="content_highlight">{match.params.searchTerm}</span>{" "}
          </span>
      </div>
      <div className="results-wrapper">
        <div className="results-inner">
          <div className="filters">
            <p>filters</p>
          </div>
          <div>
            <ResultCard data={data} />
          </div>
        </div>
      </div>
    </ResultsStyle>
    <Footer />
    </>
    )
}
