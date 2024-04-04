import React, { useEffect, useState } from 'react';
function EmployeeList({employees}) {
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

export default EmployeeList;