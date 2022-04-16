import React from "react";
import {
  Drawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  const reduxIsLoggedIn = useSelector((state) => state.isLoggedIn);
  let navigate = useNavigate();
  return (
    <Drawer anchor="right" open={openDrawer}>
      {reduxIsLoggedIn ? (
        <List>
          <ListItem
            divider
            button
            onClick={() => {
              navigate("/hompageen");
              setOpenDrawer(false);
            }}
          >
            <ListItemIcon>
              <ListItemText>Home(En) / 홈</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              navigate("/hompagekr");
              setOpenDrawer(false);
            }}
          >
            <ListItemIcon>
              <ListItemText>Home(Kr) / 홈</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              navigate("/msglogen");
              setOpenDrawer(false);
            }}
          >
            <ListItemIcon>
              <ListItemText>Message Log(En) / 메세지 로그</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              navigate("/msglogkr");
              setOpenDrawer(false);
            }}
          >
            <ListItemIcon>
              <ListItemText>Message Log(Kr) / 메세지 로그</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              navigate("/changepassword");
              setOpenDrawer(false);
            }}
          >
            <ListItemIcon>
              <ListItemText>Change Password / 비밀번호 바꾸기</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              navigate("/updateusername");
              setOpenDrawer(false);
            }}
          >
            <ListItemIcon>
              <ListItemText>Update Profile / 계정 정보 업데이트</ListItemText>
            </ListItemIcon>
          </ListItem>
        </List>
      ) : (
        <List>
          <ListItem
            divider
            button
            onClick={() => {
              navigate("/signin");
              setOpenDrawer(false);
            }}
          >
            <ListItemIcon>
              <ListItemText>가입하기 / Register</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              navigate("/login");
              setOpenDrawer(false);
            }}
          >
            <ListItemIcon>
              <ListItemText>로그인/ Log In</ListItemText>
            </ListItemIcon>
          </ListItem>
        </List>
      )}
    </Drawer>
  );
};

export default DrawerComponent;
