import axios from "axios";

export default {
  // Gets all resident
  getResidents: function() {
    return axios.get("/api/residents");
  },
  // Gets the book with the given id
  getResident: function(id) {
    return axios.get("/api/residents/" + id);
  },
  // Deletes the book with the given id
  deleteResident: function(id) {
    return axios.delete("/api/residents/" + id);
  },
  // Saves a book to the database
  saveResident: function(residentData) {
    return axios.post("/api/residents", residentData);
  }
};
