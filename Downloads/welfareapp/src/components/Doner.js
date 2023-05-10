import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Doner() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const deleteDoner = async (id) => {
    alert("delete function"+id);
  };

  const editDoner = async (id) => {
    //alert("Edit  function"+id);
    navigate(`/updateDoner/${id}`)
  };
  useEffect(() => {
    axios
      .get("http://192.168.4.227:8000/donar_users_Api")
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
                  onClick={()=>editDoner(item.id)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger rounded-5"
                  onClick={() =>deleteDoner(item.id)}
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

export default Doner;
