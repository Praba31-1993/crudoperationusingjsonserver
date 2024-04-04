import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EmployeeList from './lister';
import Navbar from "../../commonpages/Navbar"
import '../employee/employee.css'
import ModalPopup from '../../commonpages/ModalPopup';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toastMessages } from '../../commonpages/Messgaes';
import { OpenInNew } from '@mui/icons-material';
import Pagination from '../../commonpages/Pagination';

function Employees() {
    const [employees, setEmployees] = useState([])
    const [needToUpdate, setNeedToUpdate] = useState()
    const [isCreate, setIsCreate] = useState(false)
    const [open, setOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [employeePerPage] = useState(5);
    const [openViewModal, setOpenViewModal] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // Get current posts
    const indexOfLastEmployee = currentPage * employeePerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeePerPage;
    const currentEmployees = employees?.slice(indexOfFirstEmployee, indexOfLastEmployee);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    const apiUrl = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    useEffect(() => {
        getUsersList()
    }, [])

    const handleCreate = async (employeesDetails) => {
        console.log("employeesDetailscreate", employeesDetails);
        await axios.post(`${apiUrl}/users`, employeesDetails).then((res) => {
            if (res.status === 201) {
                toast.success(toastMessages.addedSuccessfully, {
                    position: "top-right",
                });

            }
            setEmployees([res.data])


        }).catch((error) => {
            toast.error(toastMessages.errorMessage, {
                position: "top-right",
            });
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
        setOpenViewModal(false)
        handleShow()

    }
    const OpenViewPopup = (id) => {
        console.log("edditid", id);
        const editData = employees.filter((list) => list.id === id);
        console.log('editData', editData);
        setNeedToUpdate(editData[0])
        setIsCreate(false)
        setOpenViewModal(true)
        handleShow()
    }
    const handleEdit = async (editData) => {
        await axios.put(`${apiUrl}/users/${editData?.id}`, editData).then((res) => {
            if (res.status === 200) {
                toast.success(toastMessages.updatedSuccessfully, {
                    position: "top-right",
                });
                setEmployees([res.data])
            }

        }).catch((error) => {

        })
        setOpen(false)
        getUsersList()
    }

    const handleDelete = async (id) => {
        await axios.delete(`${apiUrl}/users/${id}`).then((res) => {
            console.log('resCreate', res);
            if (res.status === 200) {
                toast.success(toastMessages.deletedSuccessfully, {
                    position: "top-right",
                });
                setEmployees([res.data])
            }
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

    const handlePrevious =()=>{
        if(currentPage>1){
            setCurrentPage(currentPage-1)
        }
        else{
            setCurrentPage(1)

        }
    }

    const handleNext =()=>{
        if(currentPage>=1){
            setCurrentPage(currentPage+1)
        }
        else{
            setCurrentPage(1)

        }
    }

    return (
        <div >
            <ToastContainer />
            <Navbar title={"Employee List"} />
            <button type="button" className="btn btn-primary newEmployeeButton" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => { handleShow(); setIsCreate(true); setOpenViewModal(false) }}>Add New Employee</button>


            <EmployeeList employees={currentEmployees} OpenViewPopup={(id) => OpenViewPopup(id)} OpenEditPopup={(id) => OpenEditPopup(id)} handleDelete={(id) => handleDelete(id)} />


            {show && <ModalPopup needToUpdate={needToUpdate} view={openViewModal} open={handleShow} close={handleClose} create={isCreate} handleCreate={(data) => handleCreate(data)}
                handleEdit={(data) => handleEdit(data)}

            />}
            <Pagination
             postsPerPage={employeePerPage}
             totalPosts={employees?.length}
             paginate={paginate}
             handleNext={handleNext}
             handlePrevious={handlePrevious}
             currentPage={currentPage}
            />
        </div>
    );
}

export default Employees;