import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { roles } from './DummyDatas';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function ModalPopup({ create, handleCreate, needToUpdate, handleEdit }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [employeeId, setEmployeeId] = useState(null)
    const [jobRole, setJobRole] = useState('')
    const [mobile, setMobile] = useState('')
    const newId = uuidv4();

    useEffect(() => {
        setEmployeeId(newId)
    }, [create])
    console.log("needToUpdate?.name", needToUpdate?.name);
    
    useEffect(() => {
        if (create) {
            // If creating a new employee, clear the form fields
            setName('');
            setEmail('');
            setEmployeeId(newId);
            setJobRole('');
            setMobile('');
        } else {
            // If updating an employee, set form fields with existing data
            setName(needToUpdate?.name );
            setEmail(needToUpdate?.email);
            setEmployeeId(needToUpdate?.employeeId );
            setJobRole(needToUpdate?.jobRole );
            setMobile(needToUpdate?.mobile );
        }
    }, [create, needToUpdate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const employeesDetails = {
            id: employeeId,
            name: name,
            email: email,
            employeeId: employeeId,
            jobRole: jobRole,
            mobile: mobile

        }

        console.log('employeesDetails', employeesDetails);

        if (needToUpdate) {
            handleEdit(employeesDetails)
        }
        else {
            handleCreate(employeesDetails)
        }
    }
    return (
        <div>
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">

                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Name</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput2">Employee ID</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your Employee ID" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput3">Email</label>
                                    <input type="email" class="form-control" id="formGroupExampleInput3" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput4">Mobile Number</label>
                                    <input type="tel" class="form-control" id="formGroupExampleInput4" placeholder="Enter your Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Job Role</label>
                                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={(e) => setJobRole(e.target.value)}>
                                        {roles.map((role) => (
                                            <option key={role?.id} value={role?.label} selected={jobRole === role.label}>{role?.label}</option>))
                                        }
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={(e) => handleSubmit(e)}>{create ? "Create" : "Update"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalPopup;