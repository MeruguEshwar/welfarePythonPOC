import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Doner from "./Doner";
import medical from "../images/medical.png";
import donation from "../images/donation.png";

import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebars from "./Sidebars";

function EventRegister() {
  const navigate = useNavigate();

  const RedirectoApply = () => {
    alert("hiii.........");
    navigate("/medical");
  };
  const Redireceducation = () => {
    alert("hiii.........");
    navigate("/edu");
  };
  const RedirecttoBlood = () => {
    alert("hiii.........");
    navigate("/blood");
  };

  const CbEvent = () => {
    alert("cb event");
    navigate("/cb");
  };
  const sbevent = () => {
    alert("cb event");
    navigate("/sb");
  };

  const AnimalEvent = () => {
    alert("cb event");
    navigate("/ani");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3">
          <Sidebars />
        </div>
        <div className="col-sm-9">
          <Navbar />
          <div class="card-group mt-3" style={{marginLeft:"-60px"}}>
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
            <div class="card ms-4 me-4 border border-start">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
            <div class="card border border-start">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>

          <div class="card-group mt-4" style={{marginLeft:"-60px"}}>
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
            <div class="card ms-4 me-4 border border-start">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
            <div class="card border border-start">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventRegister;
