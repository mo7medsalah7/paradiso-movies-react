// This is for Nada Khaled


import styled from "styled-components";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useQuery } from 'react-query';
import Loader  from 'react-loader-spinner';
import useFavFilms from './../../hooks/simpHooks/useFavFilms';
import useFavSeries from './../../hooks/simpHooks/useFavSeries';
import {Helmet} from "react-helmet";
import Footer from "../Footer";
import ReactPlayer from 'react-player/youtube'



const HeroStyles = styled.div`
  .slider-styles {
    overflow-x: hidden;
  }
  .slider-wrapper {
    position: relative;
    .slider-title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%);
      transform: translateY(-50%);
      p {
        @media screen and (min-width: 777px) and (max-width: 922px) {
          font-size: 40px;
        }
        @media screen and (max-width: 500px) {
          font-size: 20px;
        }
        @media screen and (min-width: 501px) and (max-width: 776px) {
          font-size: 30px;
        }
        font-size: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--white-color);
        font-family: var(--alt-font), "Kufam";
      }
    }
  }

  img {
    max-width: 100%;
  }
`;

const MainCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2%;
  padding: 30px 40px;
  @media (max-width: 500px) {
  padding: 0px 0px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
  @media(min-width: 501px) and (max-width: 766px) {
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  padding: 0px 0px;
  }
  @media(min-width: 767px) and (max-width: 991px) {
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  padding: 0px 0px;
  }
  .single-card {
    margin-bottom: 12px;
    /* padding: 15px; */
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border-radius: 12px;
    display: grid;

    .card-poster {
      img {
        height: auto;
        width: 100%;
      }
    }
    h4 {
      color: var(--white-color);
      @media(max-width: 500px) {
        font-size: 14px;
        font-weight: 400;
        
      }
    }
  }
`;

const NadaSection = styled.div`
  padding: 20px 70px;
  .section-title-landing-page {
    @media (max-width: 500px) {
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
  .ice-break-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 1%;
    @media (min-width: 501px) and (max-width: 766px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    
    .nada-profile {
      text-align: center;
      margin-top: 30px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-bottom: 8px;
      }
      .fav-quotes {
        margin-top: 10px;
        @media (min-width: 501px) and (max-width: 766px) {
          margin-bottom: 18px;
        }
        p {
          @media(min-width: 991px) and (max-width: 1200px) {

            /* max-width: 50%; */
          }
         
          margin: 0px auto 2px auto;
          span {
            padding: 0px 8px;
            background-color: var(--green-color);
          color: var(--white-color);
          }
        }
      }
    }
  }
  .nada-fav-tubes {
    margin-top: 45px;
    .card-details {
      padding: 8px 14px;
    background: #009688;
    }
  }
  .nada-cards {
    .slider-title {
      margin-bottom: 10px;
      p {
        @media (max-width: 500px) {
          font-size: 14px;
        }
        @media (min-width: 501px) and (max-width: 766px) {
          font-size: 16px;
        }
        @media (min-width: 922px) {
          font-size: 20px;
        }
        padding: 10px;
        font-size: 20px;
      }
      span {
        text-decoration: underline;
      }
    }
  }
  .nada-stickers {
    margin-top: 40px;
    margin-bottom: 40px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 12px;
    .sticker {
      justify-content: center;
      margin: 0 auto;
    }
  }
`;

// easing for motion framer
const easing = [0.6, -0.05, 0.01, 0.99];

const fadeIn = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export default function Simp() {

    const { isLoading:films_loading, isError: films_error, data: films, error } = useFavFilms();
    const { isLoading: series_loading, isError: series_error, data: series } = useFavSeries();

    

    var settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplaySpeed: 2000,
        easing: "ease-in-out",
        fade: true,
      };


    const images = [
        {
          url: "assets/images/hero/hero_01.jpg",
          title: "You Are Super Hero",
          subtitle: "Who's The Super",
          color: "#EC6EAD",
          instagram_url: `https://www.instagram.com/p/CC--_xmnOGNiOkI2nFPmFlAUJ-0YwmRmqxMQJQ0/`,
        },
        {
          url: "/assets/images/hero/hero_02.jpg",
          title: "You Are Amazing One",
          subtitle: "Who's The Amazing",
          color: "#636FA4",
          instagram_url: `https://www.instagram.com/p/CFuAtfkH9hXYCOFL9auPHk-T5I4bHLamMb12-80/`,
        },
        {
          url: "/assets/images/hero/hero_03.jpg",
          title: "You Are Goal",
          subtitle: "Who's The Goal",
          color: "#fc67fa",
          instagram_url: `https://www.instagram.com/p/CDkkui9Hg4K0MKgq3zjGCdpAYwxdQQeFWSFpsM0/`,
        },
        {
          url: "/assets/images/hero/hero_04.jpg",
          title: "You Are The Perfect",
          subtitle: "Who's The Attractive ",
          color: "#ffafbd",
          instagram_url: `https://www.instagram.com/p/CMcLWwKHlbGFI3jfeUYW7TcETCtq98IM-o-L5I0/`,
        },
      ];

      if (films_loading ||  series_loading) {
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
    
      
    if (films_error || series_error) {
        return <span>Error: {error.message}</span>;
    }
    return (
        <>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Super</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <HeroStyles>
        <Slider className="slider-styles" {...settings}>
          {images.map((image) => {
            return (
              <div className="slider-wrapper">
                <div>
                  <img src={image.url} />
                </div>
                <div className="slider-title">
                  <p style={{ backgroundColor: `${image.color}` }}>
                    {image.title}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </HeroStyles>
      <NadaSection>
        <div className="ice-break-section">
          
        <div className="nada-profile">
          <img src="./assets/images/gravator_female.jpg" />
          <h5>Nada Khaled</h5>
          <p>-Copywriter/Content Creator-</p>
          <div className="fav-quotes">
            <p><span>Hala Madrid Y Nada Mas</span></p>
            <p><span>البابلو واحد ملوش بديل</span></p>
            <p><span>#الحل_في_الحكاية</span></p>
          </div>
        </div>
        <div className="nada-cards">
          {images.map((image) => {
            return (
              <div className="slider-title">
                  <a target="_blank"  href={image.instagram_url}>
                    <p style={{ backgroundColor: `${image.color}` }}>
                      {image.subtitle}, <span>Click here</span>
                    </p>
                  </a>
              </div>
            );
          })}
        </div>
        </div>
      </NadaSection>
      <NadaSection>
        <div className="nada-fav-tubes">
          <h2 className="section-title-landing-page">What Nada Loves</h2>
          <MainCard>
            {series.items.map((item) => {
              return (
                <div className="single-card">
                  <div className="card-poster">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        item.poster_path
                      }
                      layout="responsive"
                      width={90}
                      height={90}
                      alt={item.original_title || item.original_name}
                    />
                  </div>
                  <motion.div
                    className="card-details"
                    key={item.original_title || item.original_name}
                    variants={fadeIn}
                    initial="initial"
                    animate="animate"
                    exit={{ opacity: 0 }}
                  >
                    <Link to={`/tv/${item.id}`} target="_blank">
                      <a >
                        <h4>{item.original_title || item.original_name}</h4>
                      </a>
                    </Link>
                  </motion.div>
                </div>
              );
            })}
          </MainCard>
        </div>
      </NadaSection>
      <NadaSection>
        <div className="nada-fav-tubes">
          <h2 className="section-title-landing-page">Nada Films</h2>
          <MainCard>
            {films.items.map((item) => {
              return (
                <div className="single-card">
                  <div className="card-poster">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        item.poster_path
                      }
                      layout="responsive"
                      width={90}
                      height={90}
                      alt={item.original_title || item.original_name}
                    />
                  </div>
                  <motion.div
                    className="card-details"
                    key={item.original_title || item.original_name}
                    variants={fadeIn}
                    initial="initial"
                    animate="animate"
                    exit={{ opacity: 0 }}
                  >
                    <Link to={`/movie/${item.id}`} target="_blank">
                      <a >
                        <h4>{item.original_title || item.original_name}</h4>
                      </a>
                    </Link>
                  </motion.div>
                </div>
              );
            })}
          </MainCard>
        </div>
      </NadaSection>
      <NadaSection>
        {/* <ReactPlayer
           playing url='video-1.mp4'
             /> */}
      </NadaSection>
      {/* <NadaSection>
        <div className="nada-stickers">
          <div className="sticker">
            <img src="/assets/images/nada-stickers/st-01.png" />
          </div>
          <div className="sticker">
            <img src="/assets/images/nada-stickers/st-02.png" />
          </div>
          <div className="sticker">
            <img src="/assets/images/nada-stickers/st-03.png" />
          </div>
          <div className="sticker">
            <img src="/assets/images/nada-stickers/st-04.png" />
          </div>
        </div>
      </NadaSection> */}
    <Footer />
      {/* <NadaSection>
        <h2>0.39</h2>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/61uiAkRRuUI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </NadaSection> */}
      </>
    )
}
