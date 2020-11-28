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
import { useNavigate, Link } from "react-router-dom";

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
      [theme.breakpoints.down("md")]: {
        width: "100%",
        margin: "0",
      },
    },
    btn: {
      color: "#fff",
      fontFamily: "Comfortaa",
      fontSize: "1rem",
      margin: "20px",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
        margin: "5px",
      },
    },
    buttonDiv: {
      marginLeft: "auto",
      [theme.breakpoints.down("md")]: {
        marginLeft: "0",
      },
    },
    img: {
      [theme.breakpoints.down("md")]: {
        width: "180px",
      },
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <AppBar className={classes.app} elevation={0} position="absolute">
        <Toolbar className={classes.appBarWrapper}>
          <Link to="/">
            <img
              src={spacex}
              alt="spacex"
              className={classes.img}
              height="100px"
              width="300px"
            />
          </Link>
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
