import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'
export class DisplayCardMovies extends Component {
    render() {
        return <div>{this.props.movieData.length>0&&
        this.props.movieData.map((item,idx)=>{
            return (
              <Card style={{width:'18rem'}}>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.site}
                    <br />
                    {item.size}
                    <br />
                    {item.type}
                  </Card.Text>
                  <Button onClick={(e) => this.props.createFAV(e,item)} variant="primary">Add</Button>
                </Card.Body>
              </Card>
            );
        })
        
        
        
        }</div>;
    }
}

export default DisplayCardMovies
