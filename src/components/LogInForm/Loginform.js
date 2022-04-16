import { Divider } from "@mui/material";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import React, { useRef } from "react";
import { logIn } from "../../Service/ApiService";
import { useNavigate } from "react-router-dom";
import { usersActions } from "../../store/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Login = (props) => {
  const dispatch = useDispatch();
  const idRef = useRef("");
  const pwRef = useRef("");
  let navigate = useNavigate();
  const reduxidToken = useSelector((state) => state.idToken);

  const formHandler = () => {
    const a = logIn(idRef.current.value, pwRef.current.value);
    a.then((r) => {
      console.log(r);
      if (r?.registered === true) {
        dispatch(usersActions.updateIdToken(r.idToken));
        dispatch(usersActions.updateIsLoggedIn(true));
        dispatch(usersActions.updateUser(r?.displayName));
        localStorage.setItem("token", r.idToken);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("user", r?.displayName);
        navigate("/hompageen");
      }
    });
  };

  console.log(reduxidToken);
  return (
    <section>
      <Typography variant="h6" color="white">
        Input the password to access the Message Log.
      </Typography>
      <Typography variant="h6" color="white">
        로그에 접속 하려면 아이디와 패스워드를 입력해주세요.
      </Typography>
      <Divider sx={{ backgroundColor: "white", marginTop: "10px" }} />
      <Grid container spacing={4} style={{ marginTop: "10px" }}>
        <Grid item xs={12} sm={3}>
          {}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            color="primary"
            sx={{
              input: {
                borderRadius: "5px",
                border: "1px solid white",
                color: "white",
              },
            }}
            margin="dense"
            name="Email"
            label="Email"
            type="text"
            fullWidth
            inputRef={idRef}
          />
          <TextField
            margin="dense"
            required
            name="pw"
            sx={{
              input: {
                borderRadius: "5px",
                border: "1px solid white",
                color: "white",
              },
            }}
            label="Password"
            type="password"
            fullWidth
            inputRef={pwRef}
          />
          <button style={{ marginTop: "30px" }} onClick={formHandler}>
            Submit
          </button>
        </Grid>
      </Grid>
    </section>
  );
};

export default Login;
