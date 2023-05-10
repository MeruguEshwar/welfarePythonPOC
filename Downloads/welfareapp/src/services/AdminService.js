import axios from "axios";
const data1 = "http://192.168.4.227:8000/loginapi";
const medicalevent = "http://192.168.0.10:8000/medical_campapi/";
const educationevent = "http://127.0.0.1:8000/Educational_eventapi/";
const updatedoner = "http://192.168.4.227:8000/donar_users_Api";
const getbyidDoner = "http://192.168.4.227:8000/donar_users_Api";
const updatevolunteer="http://192.168.4.227:8000/donar_users_Api";
const getbyId = "http://192.168.4.227:8000/donar_users_Api";

class AdminService {
  signInAdmin(Admin) {
    return axios.post(`${data1}/${Admin.username}/${Admin.password}`);
  }
  AddMedicalEvent(medical) {
    return 
    axios.post(
      `${medicalevent}${medical.Organiser_name}/${medical.place}/${medical.city}/${medical.camp_starts_at}/${medical.camp_ends_at}/${medical.Date}/${medical.contact_no}/${medical.For_whom}/${medical.facilities}/${medical.message}`
    );
  }

  addEducation(education) {
    return axios.post(
      `${educationevent}${education.Organisername}/${education.category}/${education.Topic}/${education.eligibility}/${education.place}/${education.city}/${education.camp_starts_at}/${education.camp_ends_at}/${education.date}/${education.contact}`
    );
  }
  updateDoner(doner) {
    console.log("update doner")
    return axios.put(`${updatedoner}/${doner.id}/${doner.first_name}/${doner.username}/${doner.email}/`);
  }

  ViewById(id) {
    console.log("----viewById----"+id);
    return axios.get(`${getbyidDoner}/${id}/`);
  }
  updateVolunteer(Volunteer) {
    console.log("update doner")
    return axios.put(`${updatevolunteer}/${Volunteer.id}/${Volunteer.first_name}/${Volunteer.username}/${Volunteer.email}/`);
  }

  ViewByIdvolunteer(id) {
    console.log("----viewById----"+id);
    return axios.get(`${getbyId}/${id}/`);
  }
}
export default new AdminService();
