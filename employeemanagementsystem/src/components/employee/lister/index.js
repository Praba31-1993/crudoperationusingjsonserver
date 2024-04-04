import React, { useEffect, useState } from 'react';
import ConfirrmationPopup from '../../../commonpages/ConfirrmationPopup';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ListItemIcon, ListItemText } from '@mui/material';
function EmployeeList({ employees, OpenEditPopup, handleDelete, OpenViewPopup }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClosePopup = () => {
        setAnchorEl(null);
    };
    const [employeeId, setEmployeeId] = useState()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='container' >
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
                            <td style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1em', width: 'auto' }}>
                                {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => { OpenViewPopup(employee?.id); }}>
                                    <VisibilityIcon />
                                </button>
                                <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => OpenEditPopup(employee?.id)}>
                                    <EditIcon />
                                </button>

                                <button type="button" className="btn btn-danger "
                                    onClick={() => { setEmployeeId(employee?.id); handleShow() }}
                                ><DeleteIcon /></button> */}
                                <Button
                                    id="demo-positioned-button"
                                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <MoreVertIcon />
                                </Button>
                                <Menu
                                    id="demo-positioned-menu"
                                    aria-labelledby="demo-positioned-button"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClosePopup}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                >
                                    <MenuItem onClick={()=>{OpenViewPopup(employee?.id);handleClosePopup()}}>
                                        <ListItemIcon>
                                            <VisibilityIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText>
                                            View
                                        </ListItemText>
                                    </MenuItem>
                                    <MenuItem onClick={()=>{OpenEditPopup(employee?.id);handleClosePopup()}}>
                                        <ListItemIcon>
                                            <EditIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Edit
                                        </ListItemText>
                                    </MenuItem>
                                    <MenuItem onClick={() => { setEmployeeId(employee?.id); handleShow(); handleClosePopup() }}>

                                        <ListItemIcon>
                                            <DeleteIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Delete
                                        </ListItemText>

                                    </MenuItem>
                                </Menu>

                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;