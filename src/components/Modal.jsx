import React from 'react';
import "../styles/Modal.css";

function Modal(props) {

    const modalPresent = {
        display: props.modalState?"block":"none"
    }

    function closeModal() {
        props.setModalState(false);
    }
    
    return (
        <div id="myModal" class="modal" style={modalPresent}>
            <div class="modal-content">
                <span onClick={closeModal} class="close">&times;</span>
                <p>Form has been submitted</p>
            </div>
        </div>
    )
}

export default Modal