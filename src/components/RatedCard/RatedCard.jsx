import React from "react";
import { Typography, Box } from "@mui/material";
import useStyles from "./styles";
import { Movie } from "../PageIndex";

const RatedCard = ({ title, data }) => {
  console.log("RatedCard data:", data, title);
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box display="flex" flexWrap="wrap" className={classes.container}>
        {data?.results.map((movie, i) => (
          <Movie key={movie.id} movie={movie} i={i} />
        ))}
      </Box>
    </Box>
  );
};

export default RatedCard;
