import "./App.css";
import Form from "./Form";
import DateTime from "./DateTime";
import PrimaryDisplay from "./PrimaryDisplay";
import SecondaryDisplay from "./SecondaryDisplay";
import Signature from "./Signature";

export default function App() {
  return (
    <div className="App">
      <div className="container col-md-6">
        <div className="weather-app-wrapper">
          <div className="weather-app border border-3 border-info rounded px-4 py-3">
            <Form />
            <DateTime />
            <div className="row">
              <div
                className="border border-info rounded col-sm"
                id="current-weather"
              >
                <PrimaryDisplay />
              </div>
              <div className="border border-info rounded col-sm">
                <SecondaryDisplay />
              </div>
            </div>
          </div>
          <Signature />
        </div>
      </div>
    </div>
  );
}
