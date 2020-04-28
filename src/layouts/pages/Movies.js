import React from 'react';
import Moment from "moment";
import axios from 'axios';
import {Api} from "../../api/Api";
import MoviesSearch from "./MoviesSearch";
import {Link} from "react-router-dom";

class Movies extends React.Component {
    state = {
        movies: [],
        genres: [],
    }

    async componentDidMount() {
        const response = await axios.get(Api.movie.themoviedb.url.discover, {
            params: {
                api_key: Api.movie.themoviedb.api,
            }
        })
        console.log(response.data.results);
        this.setState({
            movies: response.data.results,
        })
    }

    render() {
        return (
            <div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <h3 className="content-header">Movies</h3>
                            </div>
                            <MoviesSearch/>
                        </div>
                        <div className="row">
                            {this.state.movies.map((movie, index) => (
                                <div className="col-sm-6 col-md-3 col-2 col-xl-2" key={index}>

                                    <Link to={`/movie/${movie.id}`} style={{color: 'black'}}>
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-body">
                                                    <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
                                                         alt="" style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        padding: '0',
                                                        margin: '0px'
                                                    }}/>
                                                </h3>
                                            </div>
                                            <div className="card-footer" style={{height: '120px'}}>
                                                <h6>{movie.title} ({Moment(movie.release_date).format('YYYY')})</h6>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Movies;