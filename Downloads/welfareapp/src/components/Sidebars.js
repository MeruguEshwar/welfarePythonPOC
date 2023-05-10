import React, { useState } from "react";

function Sidebars() {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  return (
    <div>
      <div className="col-md-12">
        <div className="col-lg-12">
          <form>
            <div
              className="card"
              style={{
                width: "90%",
                height: "40rem",
                // marginTop: "-10px",
                backgroundColor: "#01BFBDE6",
                borderRadius: "0px 0px 150px 0px",
                marginLeft: "-24px",
              }}
            >
              <div className="card-body">
                <div className="col-lg-10">
                  <div className="card-body p-md-2 text-black">
                    <h5 className=" text-uppercase text-center ms-2 text-light">
                      Admin Login
                    </h5>

                    <div className="col-md-12 ms-4 mt-5">
                      <h5 className="text-light">Welcome , Jane</h5>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1m"
                          placeholder="AdminUserName"
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
  );
}

export default Sidebars;
