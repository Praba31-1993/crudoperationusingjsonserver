import React, { useEffect, useState } from 'react';
import ConfirrmationPopup from '../../../commonpages/ConfirrmationPopup';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

function EmployeeList({ employees, OpenEditPopup, handleDelete, OpenViewPopup }) {
    const [employeeId, setEmployeeId] = useState()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {show && <ConfirrmationPopup open={show} close={handleClose} handleDelete={() => handleDelete(employeeId)} />}
            <table class="table table-bordered">
                <thead>
                    <tr className='tableRow'>
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
                        <tr className='tableRow'>
                            <td >{index + 1}</td>
                            <td >{employee?.name}</td>
                            <td >{employee?.email}</td>
                            <td >{employee?.mobile}</td>
                            <td >{employee?.jobRole}</td>
                            <td style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1em',width:'auto' }}>
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => { OpenViewPopup(employee?.id); }}>
                                    <VisibilityIcon />
                                </button>
                                <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => OpenEditPopup(employee?.id)}>
                                    <EditIcon />
                                </button>

                                <button type="button" className="btn btn-danger "
                                    onClick={() => { setEmployeeId(employee?.id); handleShow() }}
                                ><DeleteIcon /></button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;