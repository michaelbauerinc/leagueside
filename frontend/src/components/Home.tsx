import * as React from "react";
import "./Home.css";
import RegisterTeam from "./RegisterTeam";
import SponsorTeam from "./SponsorTeam";
import banner from "./banner.png";

export interface Props {}

export interface State {}

class Home extends React.Component<Props, State> {
  state = { currentComponent: "" };

  render() {
    return (
      <div className="panel">
        <img src={banner} alt="banner" />
        <button
          className="btn btn-primary home"
          onClick={() => {
            this.setState({ currentComponent: "" });
          }}
        >
          Home
        </button>
        {this.state.currentComponent === "" && (
          <div>
            <div className="header">
              <h1>Welcome to LeagueSide!</h1>
              <h3>Choose an operation:</h3>
            </div>
            <div className="selections">
              <button
                className="btn btn-primary"
                onClick={() => {
                  this.setState({ currentComponent: "register" });
                }}
              >
                Add a league
              </button>
              <br />
              <button
                className="btn btn-primary"
                onClick={() => {
                  this.setState({ currentComponent: "sponsor" });
                }}
              >
                Sponsor a team
              </button>
            </div>
          </div>
        )}
        {this.state.currentComponent === "register" && (
          <div>
            <RegisterTeam />
          </div>
        )}
        {this.state.currentComponent === "sponsor" && (
          <div>
            <SponsorTeam />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
