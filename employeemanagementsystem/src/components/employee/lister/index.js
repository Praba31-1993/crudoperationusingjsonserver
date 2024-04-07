import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ListItemIcon } from '@mui/material';
import ConfirrmationPopup from '../../../commonpages/ConfirrmationPopup';

function EmployeeList({ employees, OpenEditPopup, handleDelete, OpenViewPopup }) {
    const [employeeId, setEmployeeId] = useState()
    const [show, setShow] = useState(false);
    
    // This function is for to open and close the Modal Popup
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='container' >
            {show && <ConfirrmationPopup open={show} close={handleClose} handleDelete={() => handleDelete(employeeId)} />}
            <table class="table table-bordered">
                <thead>
                    <tr className='tableRow'>
                        <th scope="col">SNO</th>
                        <th scope="col">Employee ID</th>
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
                            <td >{employee?.id}</td>
                            <td >{employee?.name}</td>
                            <td >{employee?.email}</td>
                            <td >{employee?.mobile}</td>
                            <td >{employee?.jobRole}</td>
                            <td style={{
                                display: 'flex', justifyContent: 'space-between',
                                flexWrap: 'wrap', width: 'auto', cursor:'pointer'
                            }}>
                                <div onClick={() => {
                                    OpenViewPopup(employee?.id)
                                }}>
                                    <ListItemIcon>
                                        <VisibilityIcon fontSize="small" />
                                    </ListItemIcon>
                                </div>
                                <div onClick={() => { OpenEditPopup(employee?.id) }}>
                                    <ListItemIcon>
                                        <EditIcon fontSize="small" />
                                    </ListItemIcon>
                                </div>
                                <div onClick={() => { setEmployeeId(employee?.id); handleShow() }}>
                                    <ListItemIcon>
                                        <DeleteIcon fontSize="small" />
                                    </ListItemIcon>

                                </div>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default EmployeeList;