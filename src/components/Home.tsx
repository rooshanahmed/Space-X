import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Button,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url(${process.env.PUBLIC_URL + "/image/spacex.jpg"})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column",
      minHeight: "150vh",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: "3rem",
      color: "#fff",
      display: "flex",
      textAlign: "center",
      fontFamily: "Comfortaa",
      marginBottom: "200px",
    },
    x: {
      color: "#005288",
    },
    btn: {
      marginBottom: "100px",
      fontSize: "1.2rem",
      color: "#fff",
      backgroundColor: "#005288",
      "&:hover": {
        backgroundColor: "black",
        color: "#A7A9AC",
      },
    },
  })
);

function Home() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <Typography className={classes.text}>
        Welcome To Space<span className={classes.x}>X</span>
      </Typography>
      <Button
        variant="contained"
        className={classes.btn}
        disableTouchRipple
        onClick={() => {
          navigate("launches");
        }}
      >
        Checkout Launches
      </Button>
    </div>
  );
}
export default Home;
