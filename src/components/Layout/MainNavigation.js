import { Toolbar, IconButton, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import DrawerComponent from "./DrawerComponent";
import { useTheme } from "@mui/material/styles";
import ListIcon from "@mui/icons-material/List";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const reduxIsLoggedIn = useSelector((state) => state.isLoggedIn);
  let navigate = useNavigate();
  const reduxUser = useSelector((state) => state.user);

  return (
    <>
      <Box
        elevation={10}
        sx={{
          backgroundColor:
            "linear-gradient(to left, #3399ff 27%, #9999ff 100%);",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              padding: "10px 0px",
            }}
            component="div"
          >
            {/* link */}
            {matches && (
              <DrawerComponent
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
              />
            )}
            {reduxIsLoggedIn && !matches ? (
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "white",
                  }}
                  onClick={() => {
                    navigate("/hompageen");
                  }}
                >
                  Home / 홈 (En)
                </Typography>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "white",
                  }}
                  onClick={() => {
                    navigate("/hompagekr");
                  }}
                >
                  Home / 홈 (Kr)
                </Typography>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "white",
                  }}
                  onClick={() => {
                    navigate("/msglogen");
                  }}
                >
                  Message Log / 메세지 로그 (En)
                </Typography>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "white",
                  }}
                  onClick={() => {
                    navigate("/msglogkr");
                  }}
                >
                  Message Log / 메세지 로그 (Kr)
                </Typography>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "white",
                  }}
                  onClick={() => {
                    navigate("/changepassword");
                  }}
                >
                  Change Password / 비밀번호 바꾸기
                </Typography>
              </Box>
            ) : null}
            {/* Button link */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {matches ? (
                <IconButton onClick={() => setOpenDrawer(true)}>
                  <ListIcon></ListIcon>
                </IconButton>
              ) : !reduxIsLoggedIn ? (
                <>
                  <button
                    onClick={() => navigate("/login")}
                    style={{ marginRight: "20px" }}
                  >
                    LogIn / 로그인
                  </button>
                  <button onClick={() => navigate("/signin")}>
                    Register / 계정생성
                  </button>
                </>
              ) : (
                <button onClick={() => navigate("/updateusername")}>
                  Update Profile / 계정 정보 업데이트{" "}
                </button>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};

export default Navbar;
