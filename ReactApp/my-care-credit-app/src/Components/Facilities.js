import React, { useEffect, useState } from "react";
import MyService from "./MyService";
import NavbarComponent from "./NavbarComponent";

function Facilities() {
  const [facilities, setFacilities] = useState([]);
  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = () => {
    MyService.getFacility().then((response) => {
      setFacilities(response.data);
      console.log(response.data);
    });
  };
  const deleteFacility = (id) => {
    MyService.deleteFacility(id);
    getEmployees();
  };
  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <h1 className="text-center"> Employees List</h1>

        <table className="table table-striped">
          <thead>
            <tr>
              <th> Facility Id</th>
              <th> User ID</th>
              <th> Online Payment Flag</th>
              <th> Transaction Flag</th>
              <th> Device Flag</th>
              <th> User Flag</th>
              <th> Activity</th>
            </tr>
          </thead>
          <tbody>
            {facilities.map((employee) => (
              <tr key={employee.facilityId}>
                <td> {employee.facilityId}</td>
                <td> {employee.userId}</td>
                <td> {employee.onlinePayemntFlag}</td>
                <td> {employee.transactionFlag}</td>
                <td> {employee.deviceFlag}</td>
                <td> {employee.userFlag}</td>
                <td>
                  <button onClick={() => deleteFacility(employee.facilityId)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Facilities;
