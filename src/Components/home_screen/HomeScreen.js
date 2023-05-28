import NavBar from "./NavBar";
import Banner from "./Banner";
import Row from "./Row";
import classes from "./HomeScreen.module.css";
import requests from "../../Api-Provider/Requests";
function HomeScreen() {
  return (
    <div className={classes.home}>
      <NavBar />
      <Banner />
      <Row
        fetchURL={requests.fetchNetflixOrigionals}
        title="NETFLIX ORIGINALS"
        isLargeRow
      />
      {/* console.log({requests.fetchTrending}) */}
      <Row fetchURL={requests.fetchTrending} title="TRENDING" isLargeRow />
      {/* <Row fetchURL={requests.fetchTopRated} title="TOP RATED" /> */}
      <Row fetchURL={requests.fetchRomanceMovies} title="ROMANCE" isLargeRow />
      <Row fetchURL={requests.fetchHorrorMovies} title="HORROR" />
      <Row fetchURL={requests.fetchDocumentaries} title="DOCUMENTARIES" />
      <Row fetchURL={requests.fetchComedyMovies} title="COMEDY" />
      <Row fetchURL={requests.fetchActionMovies} title="ACTION" />
    </div>
  );
}

export default HomeScreen;
