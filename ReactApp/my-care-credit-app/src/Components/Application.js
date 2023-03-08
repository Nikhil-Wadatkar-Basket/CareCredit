import React, { useState } from "react";
import NavbarComponent from "./NavbarComponent";

function Application() {
  const [onlinePayemntFlag, setOnlinePayemntFlag] = useState("");
  const [transactionFlag, settransactionFlag] = useState("");
  const [deviceFlag, setdeviceFlag] = useState("");
  const [userFlag, setuserFlag] = useState("");
  const [facilityId, setfacilityId] = useState("");
  const [userId, setuserId] = useState("");
  return (
    <div>
      <NavbarComponent />
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <h1 className="text-center"> Application</h1>
          <form>
            <div className="form-group mb-2">
              <label className="form-label"> Facility ID :</label>
              <input
                type="text"
                placeholder="Enter first name"
                name="facilityId"
                className="form-control"
                value={facilityId}
                onChange={(e) => setfacilityId(e.target.value)}
              ></input>
            </div>
            <div className="form-group mb-2">
              <label className="form-label"> User Id:</label>
              <input
                type="text"
                placeholder="Enter first name"
                name="onlinePayemntFlag"
                className="form-control"
                value={userId}
                onChange={(e) => setuserId(e.target.value)}
              ></input>
            </div>
            <div className="form-group mb-2">
              <label className="form-label"> Transaction Flag :</label>
              <input
                type="text"
                placeholder="Enter first name"
                name="transactionFlag"
                className="form-control"
                value={transactionFlag}
                onChange={(e) => settransactionFlag(e.target.value)}
              ></input>
            </div>
            <div className="form-group mb-2">
              <label className="form-label"> Device Flag :</label>
              <input
                type="text"
                placeholder="Enter first name"
                name="deviceFlag"
                className="form-control"
                value={deviceFlag}
                onChange={(e) => setdeviceFlag(e.target.value)}
              ></input>
            </div>
            <div className="form-group mb-2">
              <label className="form-label"> User Flag :</label>
              <input
                type="text"
                placeholder="Enter first name"
                name="userFlag"
                className="form-control"
                value={userFlag}
                onChange={(e) => setuserFlag(e.target.value)}
              ></input>
            </div>
            <div className="form-group mb-2">
              <label className="form-label"> onlinePayemnt Flag :</label>
              <input
                type="text"
                placeholder="Enter first name"
                name="onlinePayemntFlag"
                className="form-control"
                value={onlinePayemntFlag}
                onChange={(e) => setOnlinePayemntFlag(e.target.value)}
              ></input>
            </div>
            <div className="form-group mb-2">
              <button>Submit</button>
            </div>
          </form>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}
export default Application;
