import React, { useEffect, useContext } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { ColorModeContext } from "../utils/ToggleMode";
import { fetchToken } from "../utils";
import { useDispatch } from "react-redux";
import {
  searchMovie,
  selectGenreOrCategory,
} from "../features/currentGenreOrCate";
import { useNavigate } from "react-router-dom";

const Alan = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setMode } = useContext(ColorModeContext);

  useEffect(() => {
    alanBtn({
      key: "ee311198ab2a675ffee76f6399435a712e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, mode, genres, genre, query }) => {
        if (command === "chooseGenre") {
          const findGenre = genres.find(
            (g) => g.name.toLowerCase() === genre.toLowerCase()
          );
          if (findGenre) {
            navigate("/");
            dispatch(selectGenreOrCategory(findGenre.id));
          } else {
            const parsedGenre = genre.startsWith("top") ? "top_rated" : genre;
            navigate("/");
            dispatch(selectGenreOrCategory(parsedGenre));
          }
        } else if (command === "changeMode") {
          if (mode === "light") {
            setMode("light");
          } else {
            setMode("dark");
          }
        } else if (command === "login") {
          fetchToken();
        } else if (command === "logout") {
          localStorage.clear();
          navigate("/");
        } else if (command === "search") {
          dispatch(searchMovie(query));
        }
      },
    });
  }, [dispatch, navigate, setMode]);

  return <div>Alan</div>;
};

export default Alan;
