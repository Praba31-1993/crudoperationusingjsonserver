import React, { useEffect, useState } from 'react';
import ModalPopup from '../../../commonpages/ModalPopup';
function EmployeeList({employees, OpenEditPopup, handleDelete}) {
    return (
        <div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">SNO</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Job Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees?.map((employee, index) => (
                        <tr>
                            <th >{index +1 }</th>
                            <td>{employee?.name}</td>
                            <td>{employee?.email}</td>
                            <td>{employee?.mobile}</td>
                            <td>{employee?.jobRole}</td>
                            <td style={{display:'flex', justifyContent:'space-between'}}>
                            <button  type="button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModalCenter" onClick={()=>OpenEditPopup(employee?.id)}>Edit</button>
                            <button  type="button" className="btn btn-danger " onClick={()=>handleDelete(employee?.id)}>Delete</button>

                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;