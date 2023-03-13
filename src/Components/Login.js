import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/Auth";
import { Stack, Button, TextField, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import styles from "../styles/Login.module.css";

const LOCAL_STORAGE_KEY = "userslist";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();

  const userlist = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  const handleSubmit = () => {
    //handle login logic
    const account = userlist.find((user) => user.Username === username);
    if (account && account.Password === password) {
      auth.handleLogin(JSON.parse(localStorage.getItem(username)));
    }
  };

  return (
    <>
      <Stack
        className={styles.loginbody}
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          className={styles.container}
          justifyContent="space-between"
          direction="row"
          spacing={2}
        >
          <Stack className={styles.logincontainer} spacing={3}>
            <Typography variant="h5">Login</Typography>
            <TextField
              label="Username"
              variant="outlined"
              onChange={(e) => setUsername(e.target.value)}
              className={styles.commonstyle}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className={styles.commonstyle}
            />
            <div>
              <Button
                variant="contained"
                size="small"
                startIcon={<LoginIcon />}
                onClick={handleSubmit}
                className={styles.loginbtn + " " + styles.commonstyle}
              >
                Submit
              </Button>
            </div>
            <Stack>
              <Typography variant="h5" className={styles.txtheading}>
                New Here ?
              </Typography>
              <Link to="/Register" className={styles.link}>
                <Button variant="outlined">Sign up</Button>
              </Link>
            </Stack>
          </Stack>
          <Stack className="">
            <img
              src="https://img.freepik.com/free-vector/internship-job-illustration_23-2148722413.jpg?w=740&t=st=1677649869~exp=1677650469~hmac=87f9de91f7054184f0a6e203850196a400b2930b6d7e9493d1055ce0fa5eddcd"
              alt=""
              className={styles.vector}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
