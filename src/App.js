import React from 'react'
import ReactDOM from 'react-dom'
import Calendar from './components/Calendar'

export default function App() {
    return (
        <Calendar />
    );
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
