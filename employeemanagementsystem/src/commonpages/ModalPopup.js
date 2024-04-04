import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { roles } from './DummyDatas';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { validationMessages } from './Messgaes';
import { v4 as uuidv4 } from 'uuid';
import { nameRegex } from './Regex';
import { emailRegex } from './Regex';
import { mobileRegex } from './Regex';
import { employeeIdRegex } from './Regex';
function ModalPopup({ create, handleCreate, needToUpdate, handleEdit, open, close, view }) {
    const [name, setName] = useState('')
    const [nameErrorText, setNameErrorText] = useState('')
    const [email, setEmail] = useState('')
    const [emailErrorText, setEmailErrorText] = useState('')
    const [employeeId, setEmployeeId] = useState(null)
    const [employeeIdErrorText, setEmployeeIdErrorText] = useState('')
    const [jobRole, setJobRole] = useState('')
    const [jobRoleErrorText, setJobRoleErrorText] = useState('')
    const [mobile, setMobile] = useState('')
    const [mobileErrorText, setMobileErrorText] = useState('')
    const newId = uuidv4();

    console.log('view', view);
    useEffect(() => {
        setEmployeeId(newId)
    }, [create])
    console.log("needToUpdate?.name", needToUpdate?.name);

    useEffect(() => {
        if (create) {
            setName('');
            setEmail('');
            setEmployeeId('');
            setJobRole('');
            setMobile('');
        } else {
            setName(needToUpdate?.name);
            setEmail(needToUpdate?.email);
            setEmployeeId(needToUpdate?.employeeId);
            setJobRole(needToUpdate?.jobRole);
            setMobile(needToUpdate?.mobile);
        }
    }, [create, needToUpdate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!employeeId) {
            setEmployeeIdErrorText(validationMessages.employeeId_required)
        }
        if (nameRegex.test(name)) {
            setNameErrorText(validationMessages.name)
        }
        if (emailRegex.test(email)) {
            setEmailErrorText(validationMessages.email)
        }
        if (mobileRegex.test(mobile)) {
            setMobileErrorText(validationMessages.mobileNumber)
        }
        if (!jobRole) {
            setJobRoleErrorText(validationMessages.job_role_required)
        }
        else {
            close();
            const employeesDetails = {
                id: employeeId,
                name: name,
                email: email,
                employeeId: employeeId,
                jobRole: jobRole,
                mobile: mobile
            }
            if (!create) {
                handleEdit(employeesDetails)
            }
            else {
                handleCreate(employeesDetails)
            }
        }
    }
    return (
        <>
            <Modal
                show={open}
                onHide={close}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    {view ? <Modal.Title>View Form</Modal.Title> :
                        <Modal.Title>{create ? "Create Form" : "Update Form"}</Modal.Title>}
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Employee ID</label>
                            {view ?
                                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your Employee ID" value={employeeId} />
                                :
                                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your Employee ID" value={employeeId} onChange={(e) => {
                                    if (!employeeIdRegex.test(e.target.value)) {
                                        setEmployeeId(null);
                                        setEmployeeIdErrorText(validationMessages.employeeId)
                                    }
                                    else {
                                        setEmployeeId(e.target.value)
                                        setEmployeeIdErrorText('')
                                    }

                                }} />}
                        </div>
                        {employeeIdErrorText && <p style={{ color: 'red' }}>{employeeIdErrorText}</p>}

                        <div class="form-group">
                            <label for="formGroupExampleInput">Name</label>
                            {view ?
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your Name" value={name} />
                                :
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your Name" value={name} onChange={(e) => {
                                    if (!nameRegex.test(e.target.value)) {
                                        setName(null)
                                        setNameErrorText(validationMessages.name)
                                    }
                                    else {
                                        setName(e.target.value)
                                        setNameErrorText('')
                                    }
                                }} />}
                        </div>
                        {nameErrorText && <p style={{ color: 'red' }}>{nameErrorText}</p>}
                        <div class="form-group">
                            <label for="formGroupExampleInput3">Email</label>
                            {view ?
                                <input type="email" class="form-control" id="formGroupExampleInput3" placeholder="Enter your Email" value={email} />
                                :

                                <input type="email" class="form-control" id="formGroupExampleInput3" placeholder="Enter your Email" value={email} onChange={(e) => {
                                    if (!emailRegex.test(e.target.value)) {
                                        setEmail(e.target.value)
                                        setEmailErrorText(validationMessages.email)
                                    }
                                    else {
                                        setEmail(e.target.value)
                                        setEmailErrorText("")
                                    }
                                }} />}
                        </div>
                        {emailErrorText && <p style={{ color: 'red' }}>{emailErrorText}</p>}

                        <div class="form-group">
                            <label for="formGroupExampleInput4">Mobile Number</label>
                            {view ?
                                <input type="number" class="form-control" id="formGroupExampleInput4" placeholder="Enter your Mobile Number" value={mobile} />
                                :
                                <input type="number" class="form-control" id="formGroupExampleInput4" placeholder="Enter your Mobile Number" value={mobile} onChange={(e) => {
                                    if (!mobileRegex.test(e.target.value)) {
                                        setMobile(null)
                                        setMobileErrorText(validationMessages.mobileNumber)
                                    }
                                    else {
                                        setMobile(e.target.value)
                                        setMobileErrorText('')
                                    }
                                }

                                } />}
                        </div>
                        {mobileErrorText && <p style={{ color: 'red' }}>{mobileErrorText}</p>}


                        {view ?

                            <>
                                <div class="form-group">
                                    <label for="formGroupExampleInput4">Job Role</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput4" placeholder="Enter your Job Role" value={jobRole}
                                    />
                                </div>
                            </>
                            :
                            <>
                                <div class="form-group">
                                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Job Role</label>
                                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={(e) => {
                                        if (!e.target.value) {
                                            setJobRoleErrorText(validationMessages.job_role_required)
                                        }
                                        else {
                                            setJobRoleErrorText('')
                                            setJobRole(e.target.value)
                                        }
                                    }}>
                                        {roles.map((role) => (
                                            <option key={role?.id} value={role?.label} selected={jobRole === role.label}>{role?.label}</option>))
                                        }
                                    </select>
                                </div>
                                {jobRoleErrorText && <p style={{ color: 'red' }}>{jobRoleErrorText}</p>}
                            </>

                        }


                    </form>
                </Modal.Body>
                <Modal.Footer>
                    {view ?
                        <>
                            <Button variant="primary" onClick={close} style={{ margin: '0 auto' }}>
                                Close
                            </Button>
                        </>
                        :
                        <>
                            <Button variant="outlined" onClick={close}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                                {create ? "Create" : "Update"}
                            </Button>
                        </>
                    }
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalPopup;