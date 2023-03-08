import React, { useEffect, useState } from "react";
import MyService from "./MyService";
import NavbarComponent from "./NavbarComponent";
// import { Link, useHistory, useParams } from "react-router-dom";

function AddFacility() {
  const [onlinePayemntFlag, setOnlinePayemntFlag] = useState("");
  const [transactionFlag, settransactionFlag] = useState("");
  const [deviceFlag, setdeviceFlag] = useState("");
  const [userFlag, setuserFlag] = useState("");
  const [facilityId, setfacilityId] = useState("");
  const [userId, setuserId] = useState("");

  //   const history = useHistory();

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
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <h1 className="text-center"> Add facility</h1>
          <form>
            <div className="form-group mb-2">
              <label className="form-label"> Modify you facilities</label>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="Y" />
                  Transaction Flag
                </label>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="Y" />
                  Add User
                </label>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="Y" />
                  Online Payment Flag
                </label>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="Y" />
                  Add device
                </label>
              </div>
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

export default AddFacility;
