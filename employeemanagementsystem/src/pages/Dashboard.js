import React from 'react';

function Dashboard(props) {
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log("url", `${apiUrl}`);
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}

export default Dashboard;