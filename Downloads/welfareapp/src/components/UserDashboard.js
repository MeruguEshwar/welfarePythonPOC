import React from "react";
import { Nav, Tab, Tabs } from "react-bootstrap";
import Volunteer from "./Volunteer";
import Doner from "./Doner";
import Navbar from "./Navbar";
import Sidebars from "./Sidebars";

function UserDashboard() {
  return (
    <div className="container-fluid">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <Sidebars />
          </div>
          <div className="col-sm-9" >
            <Navbar />
            <div className="container-fluid">
              <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mt-3"
                justify
              >
                <Tab eventKey="home" title="Volunter">
                  <Volunteer />
                </Tab>
                <Tab eventKey="profile" title="Doner">
                  <Doner />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
