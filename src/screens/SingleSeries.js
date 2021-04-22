import useSingleSeries from "../hooks/useSingleSeries";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NavBar from "./../components/header/NavBar";
import Loader from "react-loader-spinner";
import { Helmet } from 'react-helmet';
import Footer from "../components/Footer";



const MoviePoster = styled.div`
  font-family: var(--alt-font);
  height: 100vh;
  padding: 0 40px;
  background: url(${(props) => props.poster}) no-repeat center center;
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
    .movie-header-wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      .movie-info {
        padding: 0 80px;
        .numbers-data {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
          grid-gap: 12px;
        }
        .release-date {
          span {
            background-color: var(--main-color);
            padding: 3px 24px;
            color: var(--white-color);
          }
        }
        .vote-average {
          span {
            background: rgba(247, 181, 6, 0.9);
            color: var(--white-color);
            padding: 3px 10px;
          }
        }
        .data-title {
          h2 {
            font-size: 80px;
            letter-spacing: 0.8px;
            color: var(--white-color);
          }
        }
        .data-tagline {
          margin-top: 12px;
          span {
            font-size: 17px;
            color: var(--white-color);
            font-family: Montserrat;
          }
        }
        .genres {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(80px, 150px));
          grid-gap: 8px;
          span {
            background-color: var(--main-color);
            padding: 3px 24px;
            color: var(--white-color);
            text-align: center;
          }
        }
        .video-button {
          background-color: var(--main-color);
          color: var(--white-color);
          width: 20%;
          display: block;
          text-align: center;
          margin-top: 17px;
          font-size: 22px;
          padding: 12px 12px;
        }
        .similar-movies {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 400px));
          grid-gap: 20px;
        }
      }
    }
  }
`;

const MovieInfo = styled.section`
  padding: 40px 80px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
  .section-title {
    margin-bottom: 12px;
    background: #009688;
    padding: 13px 13px 0px 13px;
    color: #fff;
    letter-spacing: 0.9px;
    margin-left: 12px;
  }
  .movie-details {
  }
  .production-companies {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 12px;
    p {
      padding: 10px 6px;
      border-bottom: 1px solid var(--main-color);
      /* background-color: var(--main-color);
      color: var(--white-color); */
    }
  }
`;

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeIn = {
  initial: {
    y: 80,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easing,
    },
  },
  exit: {
    y: 0,
    opacity: 1,
  },
};

export default function SingleSeries({ match }) {
  console.log(match.params.id);
  const { isLoading, isError, data, error } = useSingleSeries(match.params.id);
  if (isLoading) {
    return (
      <div className="loader">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000000000} //3 secs
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
                <title>{data.original_title || data.original_name}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <motion.div
        key={data.original_title}
        variants={fadeIn}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <MoviePoster
          poster={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        >
          <div className="overlay">
            <NavBar style={{ zIndex: "9999" }} />
            <div className="movie-header-wrapper">
              <div className="movie-info">
                <div className="numbers-data">
                  <div className="release-date">
                    <span>First Air Date:</span>
                    <span>{data.first_air_date}</span>
                  </div>
                  <div className="vote-average">
                    <span>{data.vote_average}</span>
                  </div>
                </div>
                <div className="data-title">
                  <h2>{data.name}</h2>
                </div>
                <div className="genres">
                  {data.genres.map((genre) => {
                    return <span key={genre.id}>{genre.name}</span>;
                  })}
                </div>
                <div className="data-tagline">
                  <span>{data.tagline}</span>
                </div>
                <div className="video-button">
                  <Link to="https://www.youtube.com/watch?v=${data.videos.results.key}">
                    <a target="_blank">Watch Trailer</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MoviePoster>
        <MovieInfo>
          <motion.div
            key={data.original_title}
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            exit={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="movie-details"
          >
            <h2 className="section-title">Overview</h2>
            <p>{data.overview}</p>
          </motion.div>
          <motion.div
            key={data.original_title}
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            exit={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <h2 className="section-title">Production Companies</h2>
            <div className="production-companies">
              {data.production_companies.map((company) => {
                return <p key={company.id}>{company.name}</p>;
              })}
            </div>
          </motion.div>
        </MovieInfo>
      </motion.div>
      <Footer />
    </>
  );
}
