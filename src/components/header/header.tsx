import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  createStyles,
  Theme,
  Button,
} from "@material-ui/core";
import spacex from "../assets/spacex.png";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      background: "none",
    },
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    appBarWrapper: {
      width: "80%",
      margin: "0 auto",
    },
    btn: {
      color: "#fff",
      fontFamily: "Comfortaa",
      fontSize: "1rem",
      margin: "20px",
    },
    buttonDiv: {
      marginLeft: "auto",
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <AppBar className={classes.app} elevation={0}>
        <Toolbar className={classes.appBarWrapper}>
          <img
            src={spacex}
            alt="spacex"
            height="100px"
            width="300px"
            onClick={() => {
              navigate("/");
            }}
          />
          <div className={classes.buttonDiv}>
            <Button
              className={classes.btn}
              disableTouchRipple
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
            <Button
              className={classes.btn}
              disableTouchRipple
              onClick={() => {
                navigate("launches");
              }}
            >
              Launches
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
