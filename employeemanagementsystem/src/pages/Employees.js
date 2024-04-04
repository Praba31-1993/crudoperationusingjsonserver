import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">SNO</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile Number</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr>
                            <th >{index +1 }</th>
                            <td>{employee?.name}</td>
                            <td>{employee?.email}</td>
                            <td>{employee?.number}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default Employees;