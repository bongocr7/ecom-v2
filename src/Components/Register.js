import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/Auth";
import styles from "../styles/Register.module.css";
import { Stack, Button, TextField, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const LOCAL_STORAGE_KEY = "userslist";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");

  const [userlist, setUserList] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );

  /* localStorage.clear(); */

  const auth = useAuth();

  const handleSubmit = () => {
    //handle register logic
    const userlistitem = {
      Username: username,
      Password: password,
    };

    const user = {
      Username: username,
      MobileNumber: mobilenumber,
      Cart: [],
      Orders: [],
    };

    localStorage.setItem(username, JSON.stringify(user));
    setUserList([...userlist, userlistitem]);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...userlist, userlistitem])
    );

    console.log(userlist);
    auth.handleLogin(user);
    console.log(auth.user);
  };

  return (
    <>
      <Stack
        className={styles.registerbody}
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          className={styles.container}
          justifyContent="space-between"
          direction="row"
        >
          <Stack classname={styles.leftregisterbody} spacing={3}>
            <Typography variant="h5">Register</Typography>
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
            <TextField
              label="Mobile Number"
              variant="outlined"
              type="password"
              onChange={(e) => setMobileNumber(e.target.value)}
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
              <Link to="/Login" className={styles.link}>
                <Button variant="outlined">Already a User?</Button>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
