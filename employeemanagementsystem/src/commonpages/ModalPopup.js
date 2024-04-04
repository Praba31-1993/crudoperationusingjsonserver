import React, { useState } from 'react';

function ModalPopup(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [employeeId, setEmployeeId] = useState(null)
    const [jobRole, setJobRole] = useState('')
    const [mobile, setMobile] = useState('')
    return (
        <div>
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Name</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your Name" />
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput2">Employee ID</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your Employee ID" />
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput3">Email</label>
                                    <input type="email" class="form-control" id="formGroupExampleInput3" placeholder="Enter your Email" />
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput4">Mobile Number</label>
                                    <input type="tel" class="form-control" id="formGroupExampleInput4" placeholder="Enter your Mobile Number" />
                                </div>
                                <div class="form-group">
                                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Job Role</label>
                                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                        <option selected>Select</option>
                                        <option value="1">Engineer</option>
                                        <option value="2">Doctor</option>
                                        <option value="3">Police</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalPopup;