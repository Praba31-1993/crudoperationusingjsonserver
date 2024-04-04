import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EmployeeList from './lister';
import Navbar from "../../commonpages/Navbar"
import '../employee/employee.css'
import ModalPopup from '../../commonpages/ModalPopup';
function Employees() {
    const [employees, setEmployees] = useState([])
    const [needToUpdate, setNeedToUpdate] = useState()
    const [isCreate, setIsCreate] = useState(false)
    const [open, setOpen] = useState(false)
    const apiUrl = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    useEffect(() => {
        getUsersList()
    }, [])

    const handleCreate = async (employeesDetails) => {
        await axios.post(`${apiUrl}/users`, employeesDetails).then((res) => {
            console.log('resCreate', res);
            setEmployees([res.data])


        }).catch((error) => {
            console.log('error', error);
        })
        setOpen(false)

        getUsersList()
    }

    const OpenEditPopup = (id) => {
        console.log("edditid", id);
        const editData = employees.filter((list) => list.id === id);
        console.log('editData', editData);
        setNeedToUpdate(editData[0])
        setIsCreate(false)
        setOpen(true)

    }
    const handleEdit = async (editData) => {
        await axios.put(`${apiUrl}/users/${editData?.id}`, editData).then((res) => {
            console.log('resCreate', res);
            setEmployees([res.data])
        }).catch((error) => {
            console.log('error', error);
        })
        setOpen(false)

        getUsersList()
    }

    const handleDelete = async(id) => {
        console.log('iddel', id);
        await axios.delete(`${apiUrl}/users/${id}`).then((res) => {
            console.log('resCreate', res);
            setEmployees([res.data])
        }).catch((error) => {
            console.log('error', error);
        })
        setOpen(false)

        getUsersList()
    }

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

            <button type="button" className="btn btn-primary newEmployeeButton" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => { setOpen(true); setIsCreate(true) }}>Add New Employee</button>

            <EmployeeList employees={employees}  OpenEditPopup={(id) => OpenEditPopup(id)} handleDelete={(id)=>handleDelete(id)}/>

            {open && <ModalPopup needToUpdate={needToUpdate} create={isCreate} handleCreate={(data) => handleCreate(data)}
                handleEdit={(data) => handleEdit(data)}
            />}

        </div>
    );
}

export default Employees;