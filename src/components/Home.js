import React, { Component } from 'react';
import axios from 'axios';
import DisplayCardMovies from './DisplayCardMovies';
import FavoriteMovies from "./FavoriteMovies";
class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            movieData:[],
            favMovie:[]
        }
    }

    componentDidMount=async(req,res)=>{
        await axios.get(`http://localhost:8080/movie`).then(response=>{
            console.log('response data', response.data)
            this.setState({
                movieData:response.data
            })
            console.log(this.state.movieData)
        }).catch(error=>console.log("error",error))
    }

    /**
     *@param {e} Event
     *
     * @param {*} e
     * @param {*} item
     * @memberof Home
     */
    createFAV=async(e,item)=>{
        e.preventDefault()

        const reqbody = {
          id:item.id,
          name:item.name,
          site:item.site,
          size:item.size,
          type:item.type,
        };
        await axios.post(`http://localhost:8080/favorite`,reqbody).then(response=>{
            console.log(response.data)
        }).catch(error=>console.log(error))

    }
    render() {
        return (
            <div>
                <DisplayCardMovies
                    movieData={this.state.movieData}
                    createFAV={this.createFAV}
                />
                <FavoriteMovies
                    favMovie={this.state.favMovie}
                    />
            </div>
        )
    }
}

export default Home
