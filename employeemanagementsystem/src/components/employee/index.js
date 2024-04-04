import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../commonComponents/Navbar';
import EmployeeList from './lister';
function Employees() {
    const [employees, setEmployees] = useState([])
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        getUsersList()
    }, [])

    const getUsersList = async () => {
        await axios.get(`${apiUrl}/users`).then((res) => {
            console.log('res', res);
            setEmployees(res.data)
        }).catch((error) => {
            console.log('err', error);
        })

    }
    return (
        <div>
           <Navbar title={"Employee List"}/>
            <EmployeeList employees={employees}/>
        </div>
    );
}

export default Employees;