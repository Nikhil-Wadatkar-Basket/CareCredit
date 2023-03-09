import React, { useEffect, useState } from "react";
import MyService from "./MyService";
import NavbarComponent from "./NavbarComponent";

function UsersLIst() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    MyService.getUsers().then((resp) => {
      setUsers(resp.data);
    });
  };

  const deleteUser = (id) => {
    MyService.deleteUser(id);
    getUsers();
  };

  return (
    <div>
      <div>
        <NavbarComponent />
        <div className="container">
          <h1 className="text-center"> Users List</h1>

          <table className="table table-striped">
            <thead>
              <tr>
                <th> User ID</th>
                <th> Hospital ID</th>
                <th> Name</th>
                <th> Email</th>
                <th> Contact</th>
                <th> Username</th>
                <th> Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((employee) => (
                <tr key={employee.userID}>
                  <td> {employee.userID}</td>
                  <td> {employee.hospital_ID}</td>
                  <td> {employee.fullName}</td>
                  <td> {employee.email}</td>
                  <td> {employee.contact}</td>
                  <td> {employee.username}</td>
                  <td> {employee.role}</td>
                  <td>
                    <button onClick={() => deleteUser(employee.userID)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UsersLIst;
