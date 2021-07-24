import React, { Component } from 'react'
import axios from 'axios'
import { Card, Button, Modal, Form } from "react-bootstrap";
import ModelMovies from './ModelMovies'
import { } from 'react-bootstrap'
class FavoriteMovies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favMovie: [],
            show: false,
            idx: ''
        };
    }
    componentDidMount = async (req, res) => {
        await axios.get(`http://localhost:8080/favorite`).then(response => {
            this.setState({
                favMovie: response.data
            })
            console.log('fav movies', this.response.data)
        }).catch(error => console.log(error))
    }

    deleteFAV = (idx) => {
        axios.delete(`http://localhost:8080/${idx}`).then(response => {
            this.setState({
                favMovie: response.data
            })
        }).catch(error => console.log(error))
    }


    handleClose = () => {
        this.setState({
            show: false
        })
    }
    handleShow = (idx) => {
        this.setState({
            show: true,
            idx: idx
        })
    }

    updateFAV = (e, item) => {
        e.preventDefault();


        const reqbody = {
            id: item.id,
            name: item.name,
            site: item.site,
            size: item.size,
            type: item.type,
        };
        axios.put(`http://localhost:8080/favorite/${this.state.idx}`, reqbody)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    favMovie: response.data
                })
            })
            .catch((error) => console.log(error));
    }
    render() {
        return (
            <div>
                {console.log(this.state.favMovie)}
                {
                    this.state.favMovie.length > 0 &&
                    this.state.favMovie.map((item, idx) => {
                        return (
                          <Card style={{ width: "18rem" }}>
                            <Card.Body>
                              <Card.Title>{item.name}</Card.Title>
                              <Card.Text>
                                {item.site}
                                <br />
                                {item.size}
                                <br />
                                {item.type}
                              </Card.Text>
                              <Button
                                onClick={(e) => this.handleShow(idx)}
                                variant="primary">
                                update
                              </Button>
                              <Button
                                onClick={(e) => this.deleteFAV(idx)}
                                variant="primary">
                                Delete
                              </Button>
                            </Card.Body>
                          </Card>
                        );
                    })
                }
                <ModelMovies
                    handleShow={this.handleShow}
                    handleClose={this.handleClose}
                    updateFAV={this.updateFAV}
                    show={this.state.show}
                />

            </div>
        )
    }
}

export default FavoriteMovies
