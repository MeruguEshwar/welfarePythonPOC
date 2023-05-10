import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import Doner from "./components/Doner";
import Volunteer from "./components/Volunteer";
import Adminregister from "./components/AdminRegister";
import DrpoDownFields from "./components/DrpoDownFields";
import Sidebars from "./components/Sidebars";
import Navbar from "./components/Navbar";
import EventRegister from "./components/EventRegister";
import MedicalEvent from "./components/MedicalEvent";
import UserDashboard from "./components/UserDashboard";
import EducationalEvent from "./components/EducationalEvent";
import BloodCapmEvent from "./components/BloodCapmEvent";
import CbEvent from "./components/CbEvent";
import ScribalsEvent from "./components/ScribalsEvent";
import AnimalEvent from "./components/AnimalEvent";
import UpdateDoner from "./components/UpdateDoner";
import UpadteVolunteer from "./components/UpdateVolunteer";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <nav className="navbar navbar-expand-lg bg-light mb-5 sticky-top ">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link btn-outline-light rounded-pill text-dark fw-bold"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <button
                  className="btn btn-outline me-1 rounded-pill"
                  type="submit"
                >
                  <Link
                    to="/"
                    className="text-decoration-none text-dark fw-bold "
                  >
                    {" "}
                    AdminLogin
                  </Link>
                </button>
                <button className="btn btn-outline rounded-pill" type="submit">
                  <Link
                    to="/Doner"
                    className="text-decoration-none text-dark fw-bold "
                  >
                    Donars
                  </Link>
                </button>
                <button
                  className="btn btn-outline me-1 rounded-pill"
                  type="submit"
                >
                  <Link
                    to="/Volunteer"
                    className="text-decoration-none text-dark fw-bold "
                  >
                    volunteers
                  </Link>
                </button>
                <button
                  className="btn btn-outline me-1 rounded-pill"
                  type="submit"
                >
                  <Link
                    to="/Admin"
                    className="text-decoration-none text-dark fw-bold "
                  >
                    Adminregister
                  </Link>
                </button>
          
              </form>
            </div>
          </div>
        </nav> */}

        <Routes>
          {/* <Route path="/" element={<Sidebars />}></Route> */}
          <Route path="/" element={<AdminLogin />}></Route>

          <Route path="/" element={<AdminLogin />}></Route>
          <Route path="/Doner" element={<Doner />}></Route>
          <Route path="/volunteer" element={<Volunteer />}></Route>
          <Route path="/Admin" element={<Adminregister />}></Route>
          <Route path="/Drpo" element={<DrpoDownFields />}></Route>
          <Route path="/Nav" element={<Navbar />}></Route>
          <Route path="/Eventreg" element={<EventRegister />}></Route>
          <Route path="/userdash" element={<UserDashboard />}></Route>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/sidebars" element={<Sidebars/>}/>

          <Route path="/medical" element={<MedicalEvent />}></Route>
          <Route path="/edu" element={<EducationalEvent />}></Route>
          <Route path="/blood" element={<BloodCapmEvent />}></Route>
          <Route path="/cb" element={<CbEvent />}></Route>
          <Route path="/sb" element={<ScribalsEvent />}></Route>
          <Route path="/ani" element={<AnimalEvent />}></Route>
          <Route path="/updateDoner/:id" element={<UpdateDoner />}></Route>
          <Route
            path="/upadteVoluteer/:id"
            element={<UpadteVolunteer />}
          ></Route>
        </Routes>
      </BrowserRouter>

      {/*      
      <MedicalEvent/> */}
    </div>
  );
}

export default App;
