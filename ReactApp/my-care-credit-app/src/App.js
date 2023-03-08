import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "react-router-dom";
import HeaderComponent from "./Components/HeaderFooter/HeaderComponent";
import FooterComponent from "./Components/HeaderFooter/FooterComponent";
import Dashboard from "./Components/Dashboard";
import Application from "./Components/Application";
import OnlinePayment from "./Components/OnlinePayment";
import Users from "./Components/Users";
import ProviderAdmin from "./Components/ProviderAdmin";
import DeviceModule from "./Components/DeviceModule";
import AddFacility from "./Components/AddFacility";
import Facilities from "./Components/Facilities";
import Report from "./Components/Report";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/reports" element={<Report />} />
            <Route exact path="/device" element={<DeviceModule />}></Route>
            <Route
              exact
              path="/providerAdmin"
              element={<ProviderAdmin />}
            ></Route>
            <Route exact path="/users" element={<Users />}></Route>
            <Route
              exact
              path="/onlinePayment"
              element={<OnlinePayment />}
            ></Route>
            <Route exact path="/application" element={<Application />}></Route>
            <Route exact path="/" element={<Dashboard />}></Route>
            <Route exact path="/facilities" element={<Facilities />}></Route>
            <Route path="/addFacility" element={<AddFacility />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
