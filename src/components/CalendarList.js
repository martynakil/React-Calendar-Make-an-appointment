import React from 'react'
import CalendarLiItem from './CalendarLiItem'

const CalendarList = props => {
    const {meetings} = props;

    const meetingsLi = meetings.map(meeting => (
        <CalendarLiItem 
        meeting = {meeting}
        key = {meeting.id}
        />
    ))
    return (
            <div className="box__ul">
                <p className="box__text--main">You have meeting: </p>
                 <ul className="ul">
                   {meetingsLi}
                </ul>
            </div>
    )
}

export default CalendarList;