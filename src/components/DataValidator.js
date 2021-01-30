
export default class DataValidator {
    constructor(state) {
        this.state = state
    }

   formValidation(dataOfMeeting) {
        let firstName = false;
        let lastName = false;
        let email = false;
        let correct = false;
        let date = false;
        let time = false;
    
        if (this.state.firstName.length >= 3) {
            firstName = true;
        } 
        if (this.state.lastName.length >= 3) {
            lastName = true;
        } 
        if(this.state.email.indexOf('@') !== -1) {
            email = true;
        }
        if(this.state.date.length > null) {
            date = true;
        }
        if(this.state.time.length > null) {
            time = true;
        }
        if(firstName && lastName && email && date && time) {
            correct = true
        }
    
        return({
          correct,
          firstName,
          lastName,
          email,
          time,
          date
        })
     
            
    }


}