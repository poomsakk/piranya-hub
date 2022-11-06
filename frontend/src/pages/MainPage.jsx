import { Box, Container, Typography } from "@mui/material";
import React from "react";
import googleMap from "../image/google-map.jpg";

const MainPage = () => {
  return (
    <div className="p-0 h-[calc(100vh-80px)]">
      <div className="bg-slate-300 h-full w-full flex flex-row justify-evenly items-center ">
        <img src={googleMap} alt="" />
        <Box
          sx={{
            width: 500,
            height: 486,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        ></Box>
      </div>
    </div>
  );
};

export default MainPage;
