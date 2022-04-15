import PopularSeries from "./sections/PopularSeries";
import PopularMovies from "./sections/PopularMovies";
import Header from "./../components/header/Header";
import Trending from "./sections/Trending";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";

export default function HomeScreen() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Paradiso || Way 2 Fun</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <PopularMovies />
      <PopularSeries />
      <Footer />
      {/* <Trending /> */}
    </>
  );
}
