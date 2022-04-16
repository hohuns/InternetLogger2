import { Divider } from "@mui/material";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import React, { useRef } from "react";
import { logIn } from "../../Service/ApiService";
import { useNavigate } from "react-router-dom";
import { usersActions } from "../../store/userSlice";
import { useSelector, useDispatch } from "react-redux";

const UpdateProfileForm = (props) => {
  const userRef = useRef("");
  let navigate = useNavigate();
  const reduxidToken = useSelector((state) => state.idToken);

  const formHandler = async () => {
    console.log(userRef.current.value);
    try {
      const data = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCkLePHqkPxNxPalsSLE_C4CbAaOiaGwNw",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: reduxidToken,
            displayName: userRef.current.value,
            photoUrl: null,
            returnSecureToken: false,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!data.ok) {
        console.log(data);
        let errorMessage =
          "Failed to change user name. \n 사용자 이름 변경에 실패하였습니다.";
        if (data?.error?.message) {
          //equal with if(data && data.error && data.error.message)
          errorMessage = data.error.message;
        }
        throw new Error(errorMessage);
      }
      const json = await data.json();
      console.log(json);
      alert("성공하였습니다.");
    } catch (err) {
      alert(err);
    }
  };

  console.log(reduxidToken);
  return (
    <section>
      <Typography variant="h6" color="white">
        Input the username that you want to change.
      </Typography>
      <Typography variant="h6" color="white">
        변경할 사용자 이름을 입력해 주세요.
      </Typography>
      <Divider sx={{ backgroundColor: "white", marginTop: "10px" }} />
      <Grid container spacing={4} style={{ marginTop: "10px" }}>
        <Grid item xs={12} sm={3}>
          {}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="dense"
            required
            name="Username"
            sx={{
              input: {
                borderRadius: "5px",
                border: "1px solid white",
                color: "white",
              },
            }}
            label="Username"
            type="Username"
            fullWidth
            inputRef={userRef}
          />
          <button style={{ marginTop: "30px" }} onClick={formHandler}>
            Submit
          </button>
        </Grid>
      </Grid>
    </section>
  );
};

export default UpdateProfileForm;
