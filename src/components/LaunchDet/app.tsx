import React from "react";
import { useLaunhDetailQuery } from "../../generated/graphql";
import LaunchDet from "./launchDet";
import Loading from "../loading";
import { useParams } from "react-router-dom";

function LaunchDetFunction() {
  const { id } = useParams();
  const { data, loading, error } = useLaunhDetailQuery({
    variables: { id: id },
  });

  if (loading) {
    return <Loading />;
  }
  if (error || !data) {
    console.log(error);
    return <div>error</div>;
  }
  return <LaunchDet data={data} />;
}
export default LaunchDetFunction;
