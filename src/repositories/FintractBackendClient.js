import axios from 'axios';

const headerContentType = "application/json";

export default class FintractBackendClient{
   serviceEndPoint = "https://localhost:44373/Enrollment";    

     enrollmentGet() {
        var response;
        response = axios.get(
            `https://yogaclassesenrollment.azurewebsites.net/enrollment/`,
            {
                headers: {                   
                    'Content-Type': headerContentType
                }
            }
        );
        return response.data;
    }
    
   yogaRegistrationPost(data) {
       var response;       
        response = axios.post(
            `https://yogaclassesenrollment.azurewebsites.net/enrollment`, data,
            {
                headers: {
                    'Content-Type': headerContentType
                }
            }
        );
        return response.data;
    }
}
