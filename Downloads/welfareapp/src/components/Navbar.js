import React from "react";

import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const RedirectoApply = () => {
    navigate("/userdash");
  };
  const redirecttoevent = () => {
    navigate("/Eventreg");
  };

  return (
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg bg-body-light border-bottom border-info border-3" style={{marginLeft:"-90px"}}>
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
              <li class="nav-item">
                <a
                  class="nav-link active text-info me-3 fs-5"
                  aria-current="page"
                  href="#"
                  onClick={RedirectoApply}
                >
                  User
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-info me-3 fs-5"
                  href="#"
                  onClick={redirecttoevent}
                >
                  Event
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-info me-3 fs-5" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-info me-3 fs-5" href="#">
                  Create Event
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-info me-3 fs-5" href="#">
                  History
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
