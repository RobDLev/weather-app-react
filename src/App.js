import "./App.css";
import SearchEngine from "./SearchEngine";
import Signature from "./Signature";

export default function App() {
  return (
    <div className="App">
      <div className="container col-md-6">
        <div className="weather-app-wrapper">
          <div className="weather-app border border-3 border-info rounded px-4 py-3">
            <SearchEngine />
            <Signature />
          </div>
        </div>
      </div>
    </div>
  );
}
