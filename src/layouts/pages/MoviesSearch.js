import React from "react";
import 'semantic-ui-react';
import './MoviesSearch.css';
import axios from 'axios';
import {Api} from "../../api/Api";
import {Link} from "react-router-dom";

class MoviesSearch extends React.Component{

    constructor() {
        super();
        this.state = {
            searchTerm: '',
            search_results: [],
        }
    }

    search_func = async (event) => {
        this.setState({
            searchTerm: event.target.value
        })
        // console.log(event.target.value);
        var movies_searched = await axios.get(Api.movie.themoviedb.url.search.movie, {
            params: {
                api_key: Api.movie.themoviedb.api,
                query: this.state.searchTerm,
            }
        });
        this.setState({
            search_results: movies_searched.data.results
        });
        console.log(this.state.search_results);
    }

    handleChange = (event) => {

    }
    render(){
        return (
            <div>
                <div className="dropdown">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.searchTerm}
                            onChange={this.search_func}
                            placeholder="Search"
                        />
                            <div className="input-group-append">
                                <span className="input-group-text bg-success">
                                    <i className="fas fa-plus"/>
                                </span>
                            </div>
                    </div>
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    value={this.state.searchTerm}*/}
                    {/*    onChange={this.search_func}*/}
                    {/*    placeholder="Search"/>*/}
                    {/*<button onClick={this.search} className="dropbtn">Dropdown</button>*/}
                    <div id="myDropdown" className="dropdown-content">
                        {this.state.search_results.map((movie, index) =>{
                            if(index < 5){
                                return (
                                        <Link to={`/movie/${movie.id}`} key={index}>
                                            <div className="row">
                                                <div className="col-4">
                                                    {movie.poster_path == null ?
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/No_image_available_600_x_450.svg" alt="" style={{width: '100%', height: '100%', padding: '0', margin: '0px'}}/>
                                                        :
                                                        <img src={'https://image.tmdb.org/t/p/w500/'+movie.poster_path} alt="" style={{width: '100%', height: '100%', padding: '0', margin: '0px'}}/>
                                                    }
                                                </div>
                                                <div className="col-8">
                                                    <strong>{movie.title}</strong>
                                                </div>
                                            </div>
                                        </Link>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default MoviesSearch;