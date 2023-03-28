import React from 'react'
import { Modal } from 'react-bootstrap'

export const ModalComponent = (props) => {
    const { show, onHide, modal_header, modal_body } = props
    return (
        <Modal
            size="lg"
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {modal_header}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{modal_body}</Modal.Body>
        </Modal>
    )
}
