import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MainCard = styled.div`
  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    background: var(--main-color);
    transition: all 0.3s ease-in-out;

    &:hover {
      background: var(--white-color);
      h4 {
        color: var(--main-color);
      }
    }

    a {
      h4 {
        text-align: center;
        color: var(--white-color);
        letter-spacing: 0.5px;
      }
    }
  }
  img {
    width: 100%;
    height: auto;
  }
`;

// the word "film" means film or series//

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
export default function TVCard({ tv }) {
  return (
    <MainCard>
      <a>
        <img
          src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
          width={90}
          height={90}
          alt={tv.original_title || tv.original_name}
        />
      </a>
      <motion.div
        key={tv.original_name}
        variants={fadeIn}
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
      >
        <Link to={`/tv/${tv.id}`}>
          <a>
            <h4>{tv.original_name}</h4>
          </a>
        </Link>
      </motion.div>
    </MainCard>
  );
}
