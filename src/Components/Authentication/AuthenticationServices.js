import axios from "axios";

class AuthenticationService {
  authLoginVerification(){
    return axios.get("http://localhost:8080/basic-auth")
  }
}
export default new AuthenticationService();
