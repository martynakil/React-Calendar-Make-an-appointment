import React, { Component } from 'react'
import CalendarForm from './CalendarForm';
import '../index.css';
import API from './CalendarProvider'
import CalendarList from './CalendarList'



export  default class Calendar extends React.Component {
    state = {
      meetings: [],
    }

    constructor(props) {
        super(props);
        this.api = new API();  
    }


    componentDidMount() {
      const { meetings } = this.state;
      
      this.api.getMeetings()
      .then(meetings => {
          this.setState({
              meetings
          })
      });
    }

    saveMeetingToState = meetingData => {
      this.setState({
          meetings: [...this.state.meetings, meetingData]
      })
    }

  
  render() {
 
    const { meetings } = this.state;
    

    return (
        <section>
            <CalendarForm saveMeetingToState={ this.saveMeetingToState }/>
            <CalendarList meetings={this.state.meetings} />
        </section>
    )
}

}

