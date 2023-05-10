import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminService from "../services/AdminService";
import medical from "../images/medical.png";
const MedicalEvent = () => {
  const [Organiser_name, setOrganiser_name] = useState();
  const [place, setplace] = useState();
  const [city, setcity] = useState();
  const [camp_starts_at, setcamp_starts_at] = useState();
  const [camp_ends_at, setcamp_ends_at] = useState();
  const [Date, setDate] = useState();
  const [contact_no, setcontact_no] = useState();
  const [For_whom, SetFor_whom] = useState();
  const [facilities, Setfacilities] = useState();
  const [message, Setmessage] = useState();

  const handleSubmit = () => {
    // alert("data inserted");
    // e.preventDefault();
    alert("create event");

    const Medical = {
      Organiser_name: Organiser_name,
      place: place,
      city: city,
      camp_starts_at: camp_starts_at,
      camp_ends_at: camp_ends_at,
      Date: Date,
      contact_no: contact_no,
      For_whom: For_whom,
      facilities: facilities,
      message: message,
    };

    AdminService.AddMedicalEvent(Medical).then((res) => {
      // const navigate = useNavigate();
      // console.log(message);
    });
  };

  return (
    <div className="app container">
      <div className="row">
        <div
          className="col-7"
          style={{ height: "38rem", backgroundColor: "#01BFBDE6" }}
        >
          {/* <h2 className='text-light'>hi am Eshwar</h2> */}
          <img src={medical} class="img-fluid" alt="Responsive image" />
        </div>
        <div className="col-4" style={{ width: "25rem", height: "42rem" }}>
          <h2 className="text-light">
            <form>
              <div className="card">
                <div
                  className="card-body"
                  style={{ backgroundColor: "#01BFBDE6" }}
                >
                  <div className="col-lg-10">
                    <div className="card-body p-md-2 text-black">
                      <h4 className=" text-uppercase text-center ms-2">
                        MEdicalEvent form
                      </h4>
                      {/* <h6><a style={{ fontSize: "20px" }}>Create an Event</a></h6> */}
                      <div className="col-md-12 ms-4 mt-4">
                        <div className="form-outline mb-2">
                          <input
                            type="text"
                            placeholder="Organiser_name"
                            className="form-control"
                            id="fid"
                            onChange={(e) => {
                              setOrganiser_name(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-outline mb-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="place"
                            id="Name"
                            onChange={(e) => {
                              setplace(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-outline mb-2">
                          <input
                            type="text"
                            placeholder="city"
                            className="form-control"
                            id="qty"
                            onChange={(e) => {
                              setcity(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-outline mb-2">
                          <input
                            type="time"
                            placeholder="start time"
                            className="form-control"
                            id="price"
                            onChange={(e) => {
                              setcamp_starts_at(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-outline mb-2">
                          <input
                            type="time"
                            placeholder="end time"
                            className="form-control"
                            id="price"
                            onChange={(e) => {
                              setcamp_ends_at(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-outline mb-2">
                          <input
                            type="date"
                            placeholder="Date"
                            className="form-control"
                            id="price"
                            onChange={(e) => {
                              setDate(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-outline mb-2">
                          <input
                            type="text"
                            placeholder="contact"
                            className="form-control"
                            id="price"
                            onChange={(e) => {
                              setcontact_no(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-outline mb-2">
                          <input
                            type="text"
                            placeholder="For whome"
                            className="form-control"
                            id="price"
                            onChange={(e) => {
                              SetFor_whom(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-outline mb-2">
                          <input
                            type="text"
                            placeholder="Facilities"
                            className="form-control"
                            id="price"
                            onChange={(e) => {
                              Setfacilities(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-outline mb-2">
                          <input
                            type="text"
                            placeholder="message"
                            className="form-control"
                            id="price"
                            onChange={(e) => {
                              Setmessage(e.target.value);
                            }}
                          />
                        </div>
                        <div className="d-flex justify-content-center pt-3">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={handleSubmit}
                          >
                            {/*onClick={handleSubmit}*/}
                            Submit form
                          </button>

                          {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                        <div className="modal-dialog modal-dialog-centered">
                                                            <div className="modal-content">
                                                                <div className='modal-header'>
                                                                    <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <h6>Registration successful!</h6>
                                                                    <p>Thank you. Please click on the link sent to your email address to activate your account.</p>
                                                                </div>
                                                                <div className='modal-footer'>
                                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default MedicalEvent;
