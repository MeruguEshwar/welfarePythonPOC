import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AdminService from "../services/AdminService";

const Login = () => {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  const func = () => {
    navigate("/dashboard")
}

const handleSubmit = (e) => {
    e.preventDefault();
    const Admin = {
      username: username,
      password: password
    };
  

    AdminService.signInAdmin(Admin).then((res) => {
      console.log(res.data);
      navigate("/Nav")//this has to navigate to dashboard page
  });
};
  return (
    <div className="app d-flex justify-content-start">
      <div className="col-sm-10">
        <div className="col-md-10">
          <div className="col-lg-10">
            <form>
              <div
                className="card"
                style={{
                  width: "28rem",
                  height: "40rem",
                  marginTop: "-105px",
                  backgroundColor: "#01BFBDE6",
                  borderRadius: "0px 0px 150px 0px",
                  marginLeft: "0px",
                }}
              >
                <div className="card-body">
                  <div className="col-lg-10">
                    <div className="card-body p-md-2 text-black">
                      <h5 className=" text-center ms-2 text-light">
                        Admin Login
                      </h5>

                      <div className="col-md-12 ms-4 mt-5">
                        <h5 className="text-light">Welcome {username}</h5>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form3Example1m"
                            placeholder="Admin"
                            className="form-control form-control-lg"
                            onChange={(e) => {
                              setusername(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form3Example1n"
                            placeholder="Password"
                            className="form-control form-control-lg"
                            onChange={(e) => {
                              setpassword(e.target.value);
                            }}
                          />
                        </div>

                        <div class="container">
                          <div class="row">
                            <div class="col-6">
                              <input
                                class="form-check-input ms-2"
                                type="checkbox"
                                id="gridCheck"
                              />
                              <label class="form-check-label" for="gridCheck">
                                Remember me
                              </label>
                            </div>
                            <div class="col-6">
                              <label
                                class="form-check-label ms-2"
                                for="gridCheck"
                              >
                                Forgot Password
                              </label>
                            </div>
                          </div>
                        </div>
                        <hr className="text-light opacity-50" />
                        <div class="d-grid gap-2">
                          <button
                            class="btn btn-outline-light text-primary mt-2"
                            type="button"
                          >
                            Log in with Google
                          </button>
                          <button
                            class="btn btn-light mt-3 text-info"
                            type="button"
                            onClick={func}
                          >
                            LogIn
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

{
  /* <button type="button" className="btn btn-primary btn-lg">Reset all</button> */
}
{
  /* <button type="button" className="btn btn-primary btn-lg">Reset all</button> */
}
