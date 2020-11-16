import React from "react";
import { LaunchesQuery } from "../../generated/graphql";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./styles.css";

interface Props {
  data: LaunchesQuery;
}

const Launch: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const displayData = data.launches?.map((launch, i) => {
    return (
      <div key={launch?.flight_number} className="launch-box">
        <div className="launch-margin">
          <div className="launch-mission">
            <span className="sp-one">{`${launch?.flight_number}. `}</span>
            <span className="sp-two">Mission: {launch?.mission_name}</span>
          </div>
          <div className="launch-site">
            <span className="sp-one">LaunchSite: </span>
            <span>{launch?.launch_site?.site_name}</span>
          </div>
          <div className="launch-site">
            <span className="sp-one">Launch Year: </span>
            <span>{launch?.launch_year}</span>
          </div>
          <div className="launch-status">
            <span className="sp-one">
              Status:{" "}
              <span className={launch?.launch_success ? "true" : "false"}>
                {launch?.launch_success ? "sucessful" : "failed"}
              </span>
            </span>
          </div>
          <div className="launch-btu">
            <Button
              variant="contained"
              style={{ backgroundColor: "#193D90" }}
              onClick={() => {
                navigate(`launch/${launch?.flight_number}`);
              }}
            >
              Details
            </Button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="display-div-launch">
      <div className="heading-space">
        <h1 style={{ fontFamily: "Comfortaa", color: "#fff" }}>Launches</h1>
      </div>
      <div className="display-data-launch">{displayData}</div>
    </div>
  );
};
export default Launch;
