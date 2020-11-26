import * as React from "react";
import "./RegisterTeam.css";
import { useForm } from "react-hook-form";
import { HttpService } from "../services/HttpService";
import { AxiosResponse } from "axios";
import { useState } from "react";

export const SponsorTeam: React.FC = () => {
  const service = HttpService;
  const [success, setSuccess] = useState<boolean>(false);
  const [matchFail, setMatchFail] = useState<boolean>(false);

  const { register, handleSubmit, errors } = useForm();
  const [responseData, setResponseData] = useState([{ name: "", latitude: "", longitude: "", price: "" }]);
  const querySponsors = (data: Record<string, string>) =>
    service.get("/api/v1/league", data).then((response: AxiosResponse) => {
      console.log(data);
      if (response.status === 200) {
        if (response.data.length > 0) {
          setSuccess(true);
          setResponseData(response.data);
        } else {
          setMatchFail(true);
        }
      } else {
        // TODO: error handling
        // console.log(response.message)
      }
    });
  return (
    <div>
      <h1>Sponsor a League</h1>
      {!success && !matchFail && (
        <form onSubmit={handleSubmit(querySponsors)}>
          <div className="form-group">
            <label htmlFor="radius">Radius</label>
            <br />
            <input ref={register({ required: true })} className="radius" name="radius" type="text"></input>
          </div>
          <div className="form-group">
            <label htmlFor="latitude">Latitude</label>
            <br />
            <input ref={register({ required: true })} className="latitude" name="latitude" type="text"></input>
          </div>
          <div className="form-group">
            <label htmlFor="longitude">Longitude</label>
            <br />
            <input ref={register({ required: true })} className="longitude" name="longitude" type="text"></input>
          </div>
          <div className="form-group">
            <label htmlFor="budget">Sponsor Budget</label>
            <br />
            <input ref={register({ required: true })} className="budget" name="budget" type="text"></input>
          </div>
          <button className="btn btn-primary" type="submit">
            Sponsor
          </button>
        </form>
      )}
      {success && (
        <div>
          <p className="alert-success">Success! The following leagues fit within your budget and location request.</p>
          {responseData.map((item) => (
            <div className="panel panel-default">
              <h3>
                <span>Team Name:</span> {item.name}
              </h3>
              <h3>
                <span>Requested Sponsorship:</span> {item.price}
              </h3>
              <button className="btn btn-primary mt-4">Sponsor Team</button>
            </div>
          ))}
        </div>
      )}
      {matchFail && (
        <div>
          <p className="alert-danger">
            Hmmmm, looks like there's no matches within your specifications. Consider increasing your budget or search
            radius!
          </p>
        </div>
      )}
    </div>
  );
};

export default SponsorTeam;
