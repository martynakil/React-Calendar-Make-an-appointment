import React from 'react';
import Api from './CalendarProvider';
import '../index.css';

import DataValidator from './DataValidator'

class CalendarForm extends React.Component {
    constructor(props) {
        super(props)
        this.api = new Api;
        


        this.state = {
            meetings: [],
            firstName: '',
            lastName: '',
            email: '',
            textarea: '',
            date: '',
            time: '',
            isDone: true,

            errors: {
                firstName: false,
                lastName: false,
                email: false,
                date: false,
                time: false,
              }
        }
       
    }

    messages = {
        firstName_incorrect: ' First name must be at least 3 letters long',
        lastName_incorrect: 'Last name must be at least 3 letters long',
        email_incorrect: 'Email is not valid',
        date_incorrect: 'choose a date',
        time_incorrect: 'choose a time'
      }
    


    handleSubmit = e => {  
        e.preventDefault()
        this.DataValidator = new DataValidator(this.state)
    
      
        const validation = this.DataValidator.formValidation()

        if (validation.correct){
        

            const {firstName, lastName, email, textarea, date, time} = this.state;

            const dataOfMeeting = {
                firstName,
                lastName,
                email,
                textarea,
                date,
                time,
            }

           this.sendToApi(dataOfMeeting)
           alert(`Thank you for filling up the questionnaire! A confirmation has been sent to the address ${this.state.email}`)

           this.setState({
            firstName: '',
            lastName: '',
            email: '',
            textarea: '',
            date: '',
            time: '',
    
            errors: {
              firstName: false,
              lastName: false,
              email: false,
              date: false,
              date: false,
            }
          })

        } else {
            this.setState({
              errors: {
                firstName: !validation.firstName,
                lastName: !validation.lastName,
                email: !validation.email,
                date: !validation.date,
                time: !validation.time,
              }
            })
          }
    }

        sendToApi(dataOfMeeting) {
            this.api.saveMeeting(dataOfMeeting)
            .then(dataOfMeeting => {
                this.props.saveMeetingToState(dataOfMeeting)
            })
        }


    handleChangeText = e => {
        
        const {name, value} = e.target;

        this.setState({
            [name]: value
            
         })
     
    }

   

  render() {
   
      const {firstName, lastName, email, textarea, date, time} = this.state;

      const dataText = 'select a date'
      const timeText = 'select a time'
   

      return (
          <>
          <h1 className="title"> make an appointment</h1>
          <div className="box">

            <form className="form" onSubmit={this.handleSubmit}>

                <input 
                value={firstName} 
                name="firstName" 
                type="text" 
                className="input"
                placeholder="first name" 
                onChange={this.handleChangeText}
                 />

                {this.state.errors.firstName && <span className="error_text">{this.messages.firstName_incorrect}</span>}


                <input 
                value={lastName} 
                name="lastName"
                type="text"
                className="input"
                placeholder="last name" 
                onChange={this.handleChangeText}
                />

                {this.state.errors.lastName && <span className="error_text">{this.messages.lastName_incorrect}</span>}

                <input 
                value={email}
                name="email" 
                className="input" 
                placeholder="email" 
                onChange={this.handleChangeText}
                />

                {this.state.errors.email && <span className="error_text">{this.messages.email_incorrect}</span>}

                <textarea 
                value={textarea}
                name="textarea" 
                className="textarea" 
                placeholder="write your message"
                onChange={this.handleChangeText}
                />


             <div className="box__time">

               <p className="datatext">{dataText }</p>

                <input
                type="date" 
                name="date" 
                placeholder="dd-mm-yyyy"
                value={date}
                min="1997-01-01" 
                max="2030-12-31" 
                onChange={this.handleChangeText}
                /> 
                {this.state.errors.date && <span className="error_text">{this.messages.date_incorrect}</span>}

                <p className="timetext">{timeText }</p>

                <input 
                type="time" 
                id="appt" 
                name="time"
                value={time} 
                onChange={this.handleChangeText}
                />
                {this.state.errors.time && <span className="error_text">{this.messages.time_incorrect}</span>}

             </div>

                
            <button className="button" type="submit" >add meeting</button>

            </form>
       
    
          </div>
          </>
      )
  }

}

export default CalendarForm;