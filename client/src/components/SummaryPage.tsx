import React from 'react';
import {Link} from 'react-router-dom';

export default class SummaryPage extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h2>Delivery Summary</h2>
                <div className="summary-container">
                    <label>Start Date:</label>
                    <input type="date"/>
                    <label>End Date:</label>
                    <input type="date"/>
                    <ul>
                        <li>Miles: {TotalMiles()}</li>
                        <li>Runs: {GetRuns()}</li>
                        <li>Avg Tips:</li>
                        <li>Total Tips:</li>
                        <li>Total Mileage: ${GetRuns() * GetMileage()}</li>
                        <li>Total: </li>
                    </ul>
                </div>
                <button><Link to="/start-shift">Start Shift</Link></button>
                <button><Link to="/view-shift">View Shifts</Link></button>
            </div>
        )
    }
}

const TotalMiles = () => {
    return 493;
}

const GetRuns = () => {
    return 87;
}

const GetMileage = () => {
    return .75;
}
