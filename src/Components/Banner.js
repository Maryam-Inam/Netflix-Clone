import React, { useEffect, useState } from "react";
import classes from "./Banner.module.css";
import axios from "../Api-Provider/axios";
import requests from "../Api-Provider/Requests";
function Banner() {
  const [movie, setMovie] = useState(null);
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  const fetchMovie = async () => {
    const request = await axios.get(requests.fetchNetflixOrigionals);
    const movies = request.data.results;
    const anyIndex = Math.floor(Math.random() * movies.length);
    setMovie(movies[anyIndex]);
    return movies;
  };
  useEffect(() => {
    fetchMovie()
      .then((movies) => {})
      .catch((err) => {
        console.log("we got error: ", err);
      });
  }, []);
  return (
    <div
      className={classes.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${
          movie && movie.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : ""
        })`,
        backgroundPosition: "center center",
      }}
    >
      {movie && (
        <div className={classes.banner_contents}>
          <h1 className={classes.banner_title}>{movie.name}</h1>
          <div className={classes.banner_buttons}>
            <button className={classes.banner_button}>Play</button>
            <button className={classes.banner_button}>My List</button>
          </div>
          <p className={classes.banner_description}>
            {truncate(movie.overview, 150)}
          </p>
        </div>
      )}
      <div className={classes.banner_fadeBottom} />
    </div>
  );
}

export default Banner;
