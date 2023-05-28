import React, { useEffect, useState } from "react";
import classes from "./Row.module.css";
import axios from "../../Api-Provider/axios";
function Row({ title, fetchURL, isLargeRow = false }) {
  const baseURL = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  console.log(isLargeRow);
  const rowMovies = async () => {
    const request = await axios.get(fetchURL);
    const data = request.data.results;
    return data;
  };
  useEffect(() => {
    rowMovies()
      .then((data) => {
        console.log(data);
        setMovies(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={classes.row}>
      <h2>{title}</h2>

      <div className={classes.row_items}>
        {movies.map(
          (mov) =>
            ((isLargeRow && mov.poster_path) ||
              (!isLargeRow && mov.backdrop_path)) && (
              <img
                className={`${classes.row_item} ${
                  isLargeRow && classes.row_itemLarge
                }`}
                key={mov.id}
                src={`${baseURL}${
                  isLargeRow ? mov.poster_path : mov.backdrop_path
                }`}
                alt={mov.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
