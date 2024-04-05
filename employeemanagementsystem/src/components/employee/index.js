import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EmployeeList from './lister';
import Navbar from "../../commonpages/Navbar"
import '../employee/employee.css'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastMessages } from '../../commonpages/Messgaes';
import AddIcon from '@mui/icons-material/Add';
import CreateEditEmployees from './creatorandeditor';

function Employees() {
    const [employees, setEmployees] = useState([])
    const [needToUpdate, setNeedToUpdate] = useState()
    const [isCreate, setIsCreate] = useState(false)
    const [openViewModal, setOpenViewModal] = useState(false)
    const [show, setShow] = useState(false);

    //Server api Url 
    const apiUrl = process.env.REACT_APP_API_URL;

    // Call all employees list at initial render
    useEffect(() => {
        getAllEmployeeList()
    }, [])

    // Modal open and close function
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Create New Employee Api call
    const handleCreate = async (employeesDetails) => {
        await axios.post(`${apiUrl}/users`, employeesDetails).then((res) => {
            if (employees.some(employee => employee.id === res.data.id)) {
                toast.warning(toastMessages.employeeIdAlreadyExist, {
                    position: "top-right",
                });
            } else {
                if (res.status === 201) {
                    const newEmployeeList = [res.data, ...employees];
                    setEmployees(newEmployeeList);
                    toast.success(toastMessages.addedSuccessfully, {
                        position: "top-right",
                    });
                }
            }
        }).catch((error) => {
            toast.error(toastMessages.errorMessage, {
                position: "top-right",
            });
        })
    }

    // Edit Popup Screen 
    const OpenEditPopup = (id) => {
        const editData = employees.filter((list) => list.id === id);
        setNeedToUpdate(editData[0])
        setIsCreate(false)
        setOpenViewModal(false)
        handleShow()
    }

    // View Popup Screen
    const OpenViewPopup = (id) => {
        const editData = employees.filter((list) => list.id === id);
        setNeedToUpdate(editData[0])
        setIsCreate(false)
        setOpenViewModal(true)
        handleShow()
    }

    // Update Employee Api Call
    const handleEdit = async (editData) => {
        await axios.put(`${apiUrl}/users/${editData?.id}`, editData).then((res) => {
            if (res.status === 200) {
                toast.success(toastMessages.updatedSuccessfully, {
                    position: "top-right",
                });
                setEmployees(prevEmployees => prevEmployees.map(employee => {
                    if (employee.id === editData.id) {
                        return editData; 
                    }
                    return employee;
                }));
            }
        }).catch((error) => {
            toast.error('Please check all the fields', {
                position: "top-right",
            });
        })
        getAllEmployeeList()
    }

    // Delete Employee api call
    const handleDelete = async (id) => {
        await axios.delete(`${apiUrl}/users/${id}`).then((res) => {
            if (res.status === 200) {
                toast.success(toastMessages.deletedSuccessfully, {
                    position: "top-right",
                });
                setEmployees([res.data])
            }
        })
        getAllEmployeeList()
    }

    // To get all Employees List api call
    const getAllEmployeeList = async () => {
        await axios.get(`${apiUrl}/users`).then((res) => {
            setEmployees(res.data)
        }).catch((error) => {
        })
    }
    return (
        <div >
            <ToastContainer />
            <Navbar />

            {/* Add New Employee button */}
            <button type="button" className="btn btn-outline-primary newEmployeeButton" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => { handleShow(); setIsCreate(true); setOpenViewModal(false) }}>
                <AddIcon className='mt-0' />
                <span className='mt-5' style={{ fontSize: '14px' }}>Add New</span>
            </button>
            {/* Lister Screen component */}
            <EmployeeList employees={employees} OpenViewPopup={(id) => OpenViewPopup(id)} OpenEditPopup={(id) => OpenEditPopup(id)} handleDelete={(id) => handleDelete(id)} />
            {/* Create and Edit Employee popup screen */}
            {show && <CreateEditEmployees needToUpdate={needToUpdate} view={openViewModal} open={handleShow} close={handleClose} create={isCreate} handleCreate={(data) => handleCreate(data)}
                handleEdit={(data) => handleEdit(data)}
            />}
        </div>
    );
}

export default Employees;