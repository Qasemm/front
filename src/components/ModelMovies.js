import { model } from 'mongoose'
import React, { Component } from 'react'
import { Card, Button, Modal, Form } from 'react-bootstrap'
export class ModelMovies extends Component {
    render() {
        return (
            <div>
                <>
                    <Button
                        variant="primary"
                        onClick={this.props.handleShow}
                    ></Button>
                    <Modal show={this.props.show} onHide={this.props.handleClose}>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="FormBasicEmail">
                                    <Form.Control
                                        type="text"
                                        placeholder="Update Movie Name"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="FormBasicpassword">
                                    <Form.Control
                                        type="text"
                                        placeholder="Update MovieType"
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    submit
                    </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='secoundary' onClick={this.props.handleClose}></Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
        );
    }
}

export default ModelMovies
