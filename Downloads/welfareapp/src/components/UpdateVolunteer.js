import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import AdminService from '../services/AdminService';

function UpdateVolunteer() {
  const param = useParams();

  const [userId, setUserId] = useState();
  const [first_name, setfirst_name] = useState();
  const [username, setusername] = useState();
  const [email, setemail] = useState();

  const navigate = useNavigate();

  let prod = {
    id: userId,
    first_name: first_name,
    username: username,
    email: email,
  };

  //console.log("Param : ", id);

  useEffect(() => {
    //alert("donar update:" + params.id);
    // console.log("res:" + id);
    // AdminService.ViewById(id).then((res) => {
    //   console.log(res);
    // });
    //alert("param : ", param.id)
    //console.log("param : ", id);
    AdminService.ViewByIdvolunteer(param.id).then(res=>{console.log(res.data)
      setfirst_name(res.data.first_name);
      setusername(res.data.username);
      setemail(res.data.email);} );
    // axios
    //   .get("http://192.168.4.227:8000/donar_users_Api/" + id + "/")
    //   .then((res) => console.log(res.data));
  }, []);

  const updateVolu = () => {
    console.log("update")
    AdminService.updateVolunteer(param.id).then((res) => {
      console.log(res.data);
      navigate("/volunteer");
    });
  };


  return (
    <div>
      <div className='app container'>
      <div className='row'>
        {/* <div className='col-7' style={{  height: '38rem', backgroundColor: '#01BFBDE6' }}>
           <h2 className='text-light'>hi am Eshwar</h2> 
           <img src={medical} class="img-fluid" alt="Responsive image" />
        </div>  */}

        <div className='col-4' style={{ width: "25rem", height: '42rem' }}>
          <h2 className='text-light'><form>
            <div className="card">
              <div className="card-body" style={{backgroundColor: '#01BFBDE6'}}>
                <div className="col-lg-10">
                  <div className="card-body p-md-2 text-black" >
                    <h4 className=" text-uppercase text-center ms-2" >update Volunteer form</h4>
                    {/* <h6><a style={{ fontSize: "20px" }}>Create an Event</a></h6> */}
                    <div className="col-md-12 ms-4 mt-4" >
                    <div className="form-outline mb-2">
                        <input
                          type="number"
                          placeholder='id'
                          className="form-control"
                          id="fid"
                          value={param.id}
                          onChange={(e) => {
                            setUserId(e.target.value);
                          }}
                        />

                      </div>
                      <div className="form-outline mb-2">
                        <input
                          type="text"
                          placeholder='FirstName'
                          className="form-control"
                          id="fid"
                          value={first_name}
                          onChange={(e) => {
                            setfirst_name(e.target.value);
                          }}
                        />

                      </div>
                      <div className="form-outline mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder='username'
                          id="Name"
                          value={username}
                          onChange={(e) => {
                            setusername(e.target.value);
                          }}
                        />

                      </div>
                      <div className="form-outline mb-2">

                        <input
                          type="text"
                          placeholder='Email'
                          className="form-control"
                          id="qty"
                          value={email}
                          onChange={(e) => {
                            setemail(e.target.value);
                          }}
                        />
                      </div> {/*
                      <div className="form-outline mb-2">
                        <input
                          type="time"
                          placeholder='start time'
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
                          placeholder='end time'
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
                          placeholder='Date'
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
                          placeholder='contact'
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
                          placeholder='For whome'
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
                          placeholder='Facilities'
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
                          placeholder='message'
                          className="form-control"
                          id="price"
                          onChange={(e) => {
                            Setmessage(e.target.value);
                          }}
                        />
                      </div> */}
                      <div className="d-flex justify-content-center pt-3">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={updateVolu} >{/*onClick={handleSubmit}*/}
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
          </form></h2>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UpdateVolunteer
