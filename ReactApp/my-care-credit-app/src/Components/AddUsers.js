import React, { useState } from "react";
import MyService from "./MyService";
import NavbarComponent from "./NavbarComponent";

function AddUsers() {
  const [userID, setuserID] = useState("");
  const [hospital_ID, sethospital_ID] = useState("");
  const [age, setage] = useState("");
  const [fullName, setfullName] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("");

  const makeEmpty = () => {
    sethospital_ID("");
    setage("");
    setfullName("");
    setemail("");
    setcontact("");
    setusername("");
    setpassword("");
  };

  const submitData = (e) => {
    e.preventDefault();
    const req = {
      userID,
      hospital_ID,
      age,
      fullName,
      email,
      contact,
      username,
      password,
      role,
    };
    console.log("====================================");
    console.log(req);
    console.log("====================================");

    MyService.createUser(req)
      .then((response) => {
        console.log("====================================");
        console.log(response.data);
        makeEmpty();
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
          <h1 className="text-center"> Add User</h1>
          <form>
            <div className="form-group mb-2">
              <label className="form-label"> Hospital ID :</label>
              <input
                type="text"
                placeholder="Hospital ID"
                name="hospital_ID"
                className="form-control"
                value={hospital_ID}
                onChange={(e) => sethospital_ID(e.target.value)}
              ></input>
            </div>
            <div className="form-group mb-2">
              <label className="form-label"> Age:</label>
              <input
                type="text"
                placeholder="Age"
                name="age"
                className="form-control"
                value={age}
                onChange={(e) => setage(e.target.value)}
              ></input>
            </div>
            <div className="form-group mb-2">
              <label className="form-label"> Full Name :</label>
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                className="form-control"
                value={fullName}
                onChange={(e) => setfullName(e.target.value)}
              ></input>
            </div>
            <div className="form-group mb-2">
              <label className="form-label"> Email :</label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="form-control"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              ></input>
            </div>
            <div className="form-group mb-2">
              <label className="form-label"> Contact :</label>
              <input
                type="text"
                placeholder="Contact"
                name="contact"
                className="form-control"
                value={contact}
                onChange={(e) => setcontact(e.target.value)}
              ></input>
            </div>
            <div className="form-group mb-2">
              <label className="form-label"> Username :</label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                className="form-control"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              ></input>
            </div>

            <div className="form-group mb-2">
              <label className="form-label"> Create Password :</label>
              <input
                type="text"
                placeholder="Password"
                name="password"
                className="form-control"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              ></input>
            </div>

            <div className="form-group mb-2">
              <button onClick={(e) => submitData(e)}>Submit</button>
            </div>
          </form>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}
export default AddUsers;
