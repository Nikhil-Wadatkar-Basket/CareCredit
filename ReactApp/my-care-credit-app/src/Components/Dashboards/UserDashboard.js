import React from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "../NavbarComponent";

function UserDashboard() {
  return (
    <div>
      <NavbarComponent />
      <h2 className="text-center text-white">User DASHBOARD</h2>
      <br></br>
      <div className="container" style={{ overflowX: "auto" }}>
        <table
          className="table text-center"
          cellSpacing="0"
          cellPadding="0"
          style={{
            padding: "16px",
          }}
        >
          <tbody>
            <tr>
              <th scope="col">
                <div
                  className="card bg-light  text-dark"
                  style={{
                    boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                    padding: "16px",
                    textAlign: "center",
                    backgroundColor: " #f1f1f1",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <h3>All Medicines</h3>
                  <p>See all available stock</p>
                </div>
              </th>
              <th scope="col">
                <div
                  className="card bg-primary text-white"
                  style={{
                    boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                    padding: "16px",
                    textAlign: "center",
                    backgroundColor: " #f1f1f1",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <h3>Raise a Request</h3>
                  <p>to donate</p>
                </div>
              </th>
              <th scope="col">
                <div
                  className="card bg-danger text-white"
                  style={{
                    boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                    padding: "16px",
                    textAlign: "center",
                    backgroundColor: " #f1f1f1",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <h3>Declined List</h3>
                  <p>See all approved things</p>
                </div>
              </th>
              <th scope="col">
                <div
                  className="card bg-success text-white"
                  style={{
                    boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                    padding: "16px",
                    textAlign: "center",
                    backgroundColor: " #f1f1f1",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <h3>Created List</h3>
                  <p>See all approved things</p>
                </div>
              </th>
              <th scope="col">
                <div
                  className="card bg-warning text-white"
                  style={{
                    boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                    padding: "16px",
                    textAlign: "center",
                    backgroundColor: " #f1f1f1",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <h3>Pending List</h3>
                  <p>See all pending things</p>
                </div>
              </th>
            </tr>

            {/* Registraion cards */}
            <tr className="text-center">
              <th scope="col">
                <div
                  className="card bg-light text-secondary"
                  style={{
                    boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                    padding: "16px",
                    textAlign: "center",
                    backgroundColor: " #f1f1f1",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <h3>Create User</h3>
                  <p>Create A New User</p>
                </div>
              </th>
              <th scope="col">
                <div
                  className="card bg-light text-primary"
                  style={{
                    boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                    padding: "16px",
                    textAlign: "center",
                    backgroundColor: " #f1f1f1",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <h3>Create NGO</h3>
                  <p>Create A New NGO</p>
                </div>
              </th>
              <th scope="col">
                <div
                  className="card bg-light text-success"
                  style={{
                    boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                    padding: "16px",
                    textAlign: "center",
                    backgroundColor: " #f1f1f1",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <h3>Create Hospital</h3>
                  <p>Create New Hospital</p>
                </div>
              </th>
              <th scope="col">
                <div
                  className="card bg-light text-warming"
                  style={{
                    boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                    padding: "16px",
                    textAlign: "center",
                    backgroundColor: " #f1f1f1",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <h3>Create Donar</h3>
                  <p>Create New Donar</p>
                </div>
              </th>
              <th scope="col">
                <div
                  className="card bg-light text-danger"
                  style={{
                    boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                    padding: "16px",
                    textAlign: "center",
                    backgroundColor: " #f1f1f1",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <h3>Create Admin</h3>
                  <p>Create New Admin</p>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserDashboard;
