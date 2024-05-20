import React, { useEffect, useContext } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { ColorModeContext } from "../utils/ToggleMode";

const Alan = () => {
  const { setMode } = useContext(ColorModeContext);
  useEffect(() => {
    alanBtn({
      key: "ee311198ab2a675ffee76f6399435a712e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, mode }) => {
        if (command === "changeMode") {
          if (mode === "light") {
            setMode("light");
          } else {
            setMode("dark");
          }
        }
      },
    });
  }, []);
  return <div>Alan</div>;
};

export default Alan;
