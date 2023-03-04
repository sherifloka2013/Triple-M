import axios from "axios";
const baseURL = "http://78.47.134.53:8055/graphql";
axios.defaults.baseURL = baseURL;
axios.defaults.headers = {'Content-Type': 'application/json'}


export default {
  about: {
    getAboutData(body) {
      return axios.post("",body);
    },
        },
  services: {
    getServices(body){
      return axios.post("/",body);
          }
        }
}