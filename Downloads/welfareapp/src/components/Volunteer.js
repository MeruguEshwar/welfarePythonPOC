import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Volunteer() {
  const [data, setData] = useState([]);
const navigate=useNavigate();
  const deleteVolunteer = async (id) => {
    alert("delete function");
  };

  const editVolunteer = async (id) => {
    alert("edit function"+id);
    navigate(`/upadteVoluteer/${id}`)
  };
  useEffect(() => {
    axios
      .get("http://192.168.4.227:8000/volunteer_users_Api")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <table class="table table-striped border border-2">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.first_name}>
              <td>{item.first_name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-outline-primary me-2 rounded-5"
                  onClick={() => editVolunteer(item.id)}
                  
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger rounded-5"
                  onClick={deleteVolunteer}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Volunteer;
