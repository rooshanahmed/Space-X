import React from "react";
import { CircularProgress } from "@material-ui/core";
import "../App.css";

function Loading() {
  return (
    <div className="loading-center">
      <CircularProgress />
      <h6>Loading...</h6>
    </div>
  );
}
export default Loading;
