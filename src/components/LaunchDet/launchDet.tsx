import React from "react";
import { LaunhDetailQuery } from "../../generated/graphql";
import "./styles.css";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
interface Props {
  data: LaunhDetailQuery;
}

const LaunchDet: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="item-margin">
      <div className="box-item">
        <div>
          <div className="item-mission">
            <span className="sp-one">{data.launch?.flight_number}. </span>
            <span className="sp-two">Mission: {data.launch?.mission_name}</span>
          </div>
          <div className="item-site">
            <span className="sp-one">Launch date: </span>
            <span className="sp-3">{data.launch?.launch_date_local}</span>
          </div>
          <div className="item-site">
            <span className="sp-one">
              Status:{" "}
              <span className={data.launch?.launch_success ? "true" : "false"}>
                {data.launch?.launch_success ? "sucessful" : "failed"}
              </span>
            </span>
          </div>
          <div className="item-site">
            <span className="sp-one">Rocket: </span>
            <span className="sp-3">{data.launch?.rocket?.rocket_name}</span>
          </div>
        </div>
        <div className="item-p">
          <p>{data.launch?.details}</p>
        </div>
        <hr />
        {!!data.launch?.links && !!data.launch.links.flickr_images && (
          <div className="img-item">
            {data.launch.links.flickr_images.map((image, i) =>
              image ? (
                <div key={i}>
                  <img
                    src={image}
                    height="300px"
                    width="300px"
                    alt={i.toString()}
                  />
                </div>
              ) : null
            )}
          </div>
        )}
        <div className="back">
          <Button
            disableTouchRipple
            variant="contained"
            className="button"
            onClick={() => {
              navigate("/launches");
            }}
            style={{
              backgroundColor: "#193D90",
              color: "#fff",
              width: "120px",
              marginBottom: "20px",
            }}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};
export default LaunchDet;
