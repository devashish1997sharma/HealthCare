import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLoginClick = (pathName) => {
        if(pathName === 'analytics') {
            navigate('/system')
        }else {
            navigate('/summary')
        }
    };

    return (
        <div className="SplitScreen">
            <h1>Please select role from below option:</h1>
            <div className='innerDiv'>
                <div className='analytics' onClick={() => handleLoginClick('analytics')}>
                    <p>Analytics</p>
                </div>
                <div className='system' onClick={() => handleLoginClick('summary')}>
                    <p>System</p>
                </div>
            </div>
        </div>
    );

}

export default Dashboard;