import * as React from "react";
import "./RegisterTeam.css";
import { useForm } from "react-hook-form";
import { HttpService } from "../services/HttpService";
import { AxiosResponse } from "axios";
import { useState } from "react";

export const RegisterTeam: React.FC = () => {
  const service = HttpService;
  const { register, handleSubmit, errors } = useForm();
  const [success, setSuccess] = useState<boolean>(false);
  const registerTeam = (data: Record<string, string>) =>
    service.post("/api/v1/league", data).then((response: AxiosResponse) => {
      console.log(data);
      if (response.status === 200) {
        setSuccess(true);
        let form: any = document.getElementById("register-form");
        if (form) form.reset();
      } else {
        // TODO: error handling
        // console.log(response.message)
      }
    });
  return (
    <div>
      <h1>Register Team</h1>
      {success && <p className="alert-success">Successfully registered team</p>}
      <form id="register-form" onSubmit={handleSubmit(registerTeam)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <br />
          <input ref={register({ required: true })} className="name" name="name" type="text"></input>
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
          <label htmlFor="price">Sponsor Price</label>
          <br />
          <input ref={register({ required: true })} className="price" name="price" type="text"></input>
        </div>
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterTeam;
