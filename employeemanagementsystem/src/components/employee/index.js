import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EmployeeList from './lister';
import Navbar from "../../commonpages/Navbar"
import '../employee/employee.css'
function Employees() {
    const [employees, setEmployees] = useState([])
    const apiUrl = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
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
            <Navbar title={"Employee List"} />
            <button  type="button" className="btn btn-primary newEmployeeButton" onClick={()=>navigate('/employee/create')}>Add New Employee</button>
            <EmployeeList employees={employees} />
        </div>
    );
}

export default Employees;