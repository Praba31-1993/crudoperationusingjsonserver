
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfirrmationPopup({handleDelete, open, close}) {
    
    return (
        <>  
            <Modal
                show={open}
                onHide={close}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation Popup</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to Delete?

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=>{handleDelete(); close()}}>
                        Yes
                    </Button>
                    <Button variant="primary" onClick={close}>
                        No
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ConfirrmationPopup; 
