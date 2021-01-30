import React from 'react'

const CalendarLiItem = props => {
    const {meeting} = props;



    return (
    
        <li className="li__item" key={meeting.id}>
            {meeting.firstName} {meeting.lastName}, ({meeting.email}), {meeting.date} at {meeting.time} o'clock
        </li>
    )
    
}

export default CalendarLiItem;