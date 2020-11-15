import React from "react";
import { useLaunchesQuery } from "../../generated/graphql";
import Launch from "./launch";
import Loading from "../loading";
import "./styles.css";

function LaunchFunction() {
  const { data, loading, error } = useLaunchesQuery();

  if (loading) {
    return <Loading />;
  }
  if (error || !data) {
    console.log(error);
    return <div>error</div>;
  }
  return (
    <div className="root-launch">
      <Launch data={data} />
    </div>
  );
}
export default LaunchFunction;
