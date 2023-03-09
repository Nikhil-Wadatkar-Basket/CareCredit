import axios from "axios";
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "http://localhost:3000",
  mode: "no-cors",
};
class MyServices {
  getFacility() {
    return axios.get("http://localhost:7979/getFacilities", {
      headers,
      mode: "no-cors",
    });
  }

  createFacility(Facility) {
    return axios.post("http://localhost:7979/createFacility", Facility);
  }

  getFacilityById(FacilityId) {
    return axios.get(
      "http://localhost:7979/getFacilityByID" + "/" + FacilityId,
      { headers, mode: "no-cors" }
    );
  }

  updateFacility(FacilityId, Facility) {
    return axios.put("" + "/" + FacilityId, Facility);
  }

  deleteFacility(FacilityId) {
    return axios.delete(
      "http://192.168.1.2:7979/deleteFacilityByID" + "/" + FacilityId,
      { headers, mode: "no-cors" }
    );
  }

  //users
  createUser(req) {
    return axios.post("http://localhost:8383/createUser", req);
  }

  getUsers() {
    return axios.get("http://localhost:8383/getAll");
  }
  deleteUser(FacilityId) {
    return axios.delete(
      "http://192.168.1.2:8383/deleteByID" + "/" + FacilityId,
      { headers, mode: "no-cors" }
    );
  }
}

export default new MyServices();
