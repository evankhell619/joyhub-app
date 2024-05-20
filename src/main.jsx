import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar/Navbar";
import {
  Actors,
  MovieInformation,
  Movies,
  Profile,
} from "./components/PageIndex";
import useStyle from "./style";
import store from "./app/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ToggleMode from "./utils/ToggleMode";

// const theme = createTheme({});
const App = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <Navbar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieInformation />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/approved" element={<Movies />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToggleMode>
        <App />
      </ToggleMode>
    </Provider>
  </React.StrictMode>
);
