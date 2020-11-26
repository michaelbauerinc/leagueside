import * as React from "react";
import "./RegisterTeam.css";
import { useForm } from "react-hook-form";
import { HttpService } from "../services/HttpService";
import { AxiosResponse } from "axios";
import { useState } from "react";

export const SponsorTeam: React.FC = () => {
  const service = HttpService;
  const [success, setSuccess] = useState<boolean>(false);
  const { register, handleSubmit, errors } = useForm();
  const [responseData, setResponseData] = useState([{ name: "", latitude: "", longitude: "", price: "" }]);
  const querySponsors = (data: Record<string, string>) =>
    service.get("/api/v1/league", data).then((response: AxiosResponse) => {
      console.log(data);
      if (response.status === 200) {
        console.log(response.data);
        setSuccess(true);
        setResponseData(response.data);
      } else {
        // TODO: error handling
        // console.log(response.message)
      }
    });
  return (
    <div>
      <h1>Sponsor a Team</h1>
      {!success && (
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
            Register
          </button>
        </form>
      )}
      {success && (
        <div>
          <p>Success! The following teams fit within your budget and location request.</p>
          {responseData.map((item) => (
            <div className="panel panel-default">
              <h2>
                <span>Team:</span> {item.name}
              </h2>
              <h2>
                <span>Requested Sponsorship:</span> {item.price}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SponsorTeam;
