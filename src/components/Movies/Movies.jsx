import React, { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { selectGenreOrCategory } from "../../features/currentGenreOrCate";

import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList } from "../PageIndex";

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, error, isFetching } = useGetMoviesQuery({
    genreOrCategoryName,
    page,
    searchQuery,
  });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please search for something else
        </Typography>
      </Box>
    );
  }

  if (error) return "An error";

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
