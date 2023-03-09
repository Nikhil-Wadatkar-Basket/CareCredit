import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "react-router-dom";
import HeaderComponent from "./Components/HeaderFooter/HeaderComponent";
import FooterComponent from "./Components/HeaderFooter/FooterComponent";
import Dashboard from "./Components/Dashboard";
import Application from "./Components/Application";
import OnlinePayment from "./Components/OnlinePayment";
import Users from "./Components/AddUsers";
import ProviderAdmin from "./Components/ProviderAdmin";
import DeviceModule from "./Components/DeviceModule";
import AddFacility from "./Components/AddFacility";
import Facilities from "./Components/Facilities";
import Report from "./Components/Report";
import AddUsers from "./Components/AddUsers";
import UsersLIst from "./Components/UsersLIst";
import background from "./medical2.jpg";
import UserDashboard from "./Components/Dashboards/UserDashboard";
import ApplicationDashboard from "./Components/Dashboards/ApplicationDashboard";
import { Provider } from "react-redux";
import Store from "./redux/Store";

function App() {
  const myStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="App" style={myStyle}>
      <Provider store={Store}>
        <Router>
          <HeaderComponent />
          <div className="container-fluid">
            <Routes>
              {/* Dashboards */}
              <Route
                exact
                path="/applicationDashboard"
                element={<ApplicationDashboard />}
              ></Route>
              <Route
                exact
                path="/userDashboard"
                element={<UserDashboard />}
              ></Route>
              <Route
                exact
                path="/deviceDashboard"
                element={<UserDashboard />}
              ></Route>

              <Route exact path="/usersList" element={<UsersLIst />}></Route>

              <Route exact path="/reports" element={<Report />} />
              <Route exact path="/device" element={<DeviceModule />}></Route>
              <Route
                exact
                path="/providerAdmin"
                element={<ProviderAdmin />}
              ></Route>

              <Route exact path="/addUser" element={<AddUsers />}></Route>
              <Route
                exact
                path="/onlinePayment"
                element={<OnlinePayment />}
              ></Route>
              <Route
                exact
                path="/application"
                element={<Application />}
              ></Route>
              <Route exact path="/" element={<Dashboard />}></Route>
              <Route exact path="/facilities" element={<Facilities />}></Route>
              <Route path="/addFacility" element={<AddFacility />}></Route>
            </Routes>
          </div>
          <FooterComponent />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
