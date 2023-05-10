import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AdminService from '../services/AdminService';
import medical from '../images/medical.png';
const CbEvent = () => {

  const [Organisername, setOrganiser_name] = useState();
  const [category, setcategory] = useState();
  const [Topic, setTopic] = useState();
//   const [eligibility, seteligibility] = useState();
  const [place, setplace] = useState();
  const [city, setcity] = useState();
  const [camp_starts_at, setcamp_starts_at] = useState();
  const [camp_ends_at, Setcamp_ends_at] = useState();
  const [date, Setdate] = useState();
  const [contact, Setcontact] = useState();

  const handleSubmit = () => {
    // alert("data inserted");
    // e.preventDefault();
    alert("hello event")

    const education = {
      Organisername: Organisername,
      category: category,
      Topic: Topic,
    //   eligibility: eligibility,
      place: place,
      city: city,
      camp_starts_at: camp_starts_at,
      camp_ends_at: camp_ends_at,
      date: date,
      contact: contact
    };


    AdminService.AddMedicalEvent(education).then((res) => {
      // const navigate = useNavigate();

      // console.log(message);



    });
  };

  return (


    <div className='app container'>
    <div className='row'>
      <div className='col-7' style={{ height: '38rem', backgroundColor: '#01BFBDE6' }}>
        {/* <h2 className='text-light'>hi am Eshwar</h2> */}
        <img src={medical} class="img-fluid" alt="Responsive image" />


      </div>
      <div className='col-4' style={{ width: "25rem", height: '42rem' }}>
        <h2 className='text-light'><form>
          <div className="card">
            <div className="card-body" style={{ backgroundColor: '#01BFBDE6' }}>
              <div className="col-lg-10">
                <div className="card-body p-md-2 text-black" >
                  <h4 className=" text-uppercase text-center ms-2" >CB Event Form</h4>
                  {/* <h6><a style={{ fontSize: "20px" }}>Create an Event</a></h6> */}
                  <div className="col-md-12 ms-4 mt-4" >
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        placeholder='Organiser_name'
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
                          placeholder='category'
                          id="Name"
                          onChange={(e) => {
                            setcategory(e.target.value);
                          }}
                        />

                      </div>
                      <div className="form-outline mb-2">

                        <input
                          type="text"
                          placeholder='topic'
                          className="form-control"
                          id="qty"
                          onChange={(e) => {
                            setTopic(e.target.value);
                          }}
                        />
                      </div>
                      {/* <div className="form-outline mb-2">
                        <input
                          type="time"
                          placeholder='eligiblility'
                          className="form-control"
                          id="price"
                          onChange={(e) => {
                            seteligibility(e.target.value);
                          }}
                        />
                      </div> */}
                      <div className="form-outline mb-2">

                        <input
                          type="text"
                          placeholder='place'
                          className="form-control"
                          id="price"
                          onChange={(e) => {
                            setplace(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-outline mb-2">
                        <input
                          type="text"
                          placeholder='city'
                          className="form-control"
                          id="price"
                          onChange={(e) => {
                            setcity(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-outline mb-2">
                        <input
                          type="time"
                          placeholder='camp strat time'
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
                          placeholder='ends time'
                          className="form-control"
                          id="price"
                          onChange={(e) => {
                            Setcamp_ends_at(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-outline mb-2">
                        <input
                          type="date"
                          placeholder='date'
                          className="form-control"
                          id="price"
                          onChange={(e) => {
                            Setdate(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-outline mb-2">
                        <input
                          type="text"
                          placeholder='conatct'
                          className="form-control"
                          id="price"
                          onChange={(e) => {
                            Setcontact(e.target.value);
                          }}
                        />
                      </div>
                      <div className="d-flex justify-content-center pt-3">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleSubmit} >{/*onClick={handleSubmit}*/}
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
  )
}
export default CbEvent
