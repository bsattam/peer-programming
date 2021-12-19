import React, {useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import styles from '../styles/home.module.css';

const Inputmodal = (props) => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");

    const handleClose = (e) => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleName(name);
        handleClose();
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <>
            <Button className={styles.formButton} onClick={handleShow}>
                Create Link
            </Button>
        
            <Modal
            show={show}
            onHide={handleClose}
            >
                <Modal.Dialog>
                    <Modal.Body>
                        <Form className={styles.form}>
                        <Form.Label>Enter name of new session:</Form.Label>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter name" onChange={handleChange} />
                        </Form.Group>
                        <div className={styles.modalButtons}>
                            <Button variant="danger" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button className="ml-5" variant="success" type="submit" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </div>
                        
                        </Form>
                    </Modal.Body>
                </Modal.Dialog>
            </Modal>
        </>
    );
}

export default Inputmodal;
