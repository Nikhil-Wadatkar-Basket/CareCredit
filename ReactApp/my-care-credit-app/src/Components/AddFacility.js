import React, { useEffect, useState } from "react";
import MyService from "./MyService";
import NavbarComponent from "./NavbarComponent";
// import { Link, useHistory, useParams } from "react-router-dom";

function AddFacility() {
  const [onlinePayemntFlag, setOnlinePayemntFlag] = useState("N");
  const [transactionFlag, settransactionFlag] = useState("N");
  const [deviceFlag, setdeviceFlag] = useState("N");
  const [userFlag, setuserFlag] = useState("N");
  const [facilityId, setfacilityId] = useState("");
  const [userId, setuserId] = useState("");

  //   const history = useHistory();

  const setfacilityID = (e) => {
    e.preventDefault();
    setfacilityId(e.target.value);
  };
  const setuserID = (e) => {
    e.preventDefault();
    setuserId(e.target.value);
  };

  const addFacility = (e) => {
    e.preventDefault();

    const facility = {
      onlinePayemntFlag,
      transactionFlag,
      deviceFlag,
      userFlag,
      facilityId,
      userId,
    };

    console.log("====================================");
    console.log("req", facility);
    console.log("====================================");

    MyService.createFacility(facility)
      .then((response) => {
        console.log("====================================");
        console.log(response.data);
        console.log("====================================");
        // history.push("/employees");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <NavbarComponent />
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <h1 className="text-center"> Modify your facilities</h1>
          <form>
            <div className="form-group mb-2">
              {/* <label className="form-label"> Modify your facilities</label> */}
              <br></br>
              <br></br>
              <br></br>
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th scope="col"> Facility ID:</th>
                    <th scope="col">
                      <input
                        type="text"
                        placeholder="Enter ID"
                        name="onlinePayemntFlag"
                        className="form-control"
                        value={facilityId}
                        onChange={(e) => setfacilityID(e)}
                      ></input>
                    </th>
                  </tr>
                  <tr>
                    <th scope="col"> User ID:</th>
                    <th scope="col">
                      <input
                        type="text"
                        placeholder="Enter ID"
                        name="onlinePayemntFlag"
                        className="form-control"
                        value={userId}
                        onChange={(e) => setuserID(e)}
                      ></input>
                    </th>
                  </tr>

                  <tr>
                    <th scope="col">
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            value="Y"
                            onClick={() => settransactionFlag("Y")}
                          />
                        </label>
                      </div>
                    </th>
                    <th scope="col"> Transaction Flag</th>
                  </tr>

                  <tr>
                    <th scope="col">
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            value="Y"
                            onClick={() => setuserFlag("Y")}
                          />
                        </label>
                      </div>
                    </th>
                    <th scope="col"> Add User</th>
                  </tr>

                  <tr>
                    <th scope="col">
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            value="Y"
                            onClick={() => setOnlinePayemntFlag("Y")}
                          />
                        </label>
                      </div>
                    </th>
                    <th scope="col"> Online Payment</th>
                  </tr>

                  <tr>
                    <th scope="col">
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            value="Y"
                            onClick={() => setdeviceFlag("Y")}
                          />
                        </label>
                      </div>
                    </th>
                    <th scope="col"> Add Device</th>
                  </tr>
                </thead>
              </table>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="form-group mb-2">
              <button onClick={(e) => addFacility(e)}>Submit</button>
            </div>
          </form>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}

export default AddFacility;
