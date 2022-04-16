import { Divider } from "@mui/material";

import { Grid } from "@mui/material";
import { Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { usersActions } from "../../store/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const HomeFormKr = (props) => {
  let navigate = useNavigate();
  const reduxUser = useSelector((state) => state.user);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <section>
      <Typography variant="h6" color="white">
        환영합니다.. {reduxUser} 님..
      </Typography>
      <Divider sx={{ backgroundColor: "white", marginTop: "10px" }} />
      <Grid container style={{ marginTop: "10px" }}>
        {!matches ? (
          <Grid item xs={12} sm={12}>
            <button
              style={{ marginTop: "30px" }}
              onClick={() => {
                navigate("/msglogkr");
              }}
            >
              메세지 남기러 가기
            </button>
          </Grid>
        ) : (
          <Grid item xs={12} sm={12}>
            <button
              style={{ marginTop: "30px" }}
              onClick={() => {
                navigate("/msglogkr");
              }}
            >
              메세지 남기러 가기
            </button>
          </Grid>
        )}
      </Grid>
    </section>
  );
};

export default HomeFormKr;
