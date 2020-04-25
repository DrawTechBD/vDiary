import React from 'react';
import TheMovieDb from "../../api/TheMovieDb";
class Movies extends React.Component{
    state = {
        movies: [],
    }
    async componentDidMount() {
        const response = await TheMovieDb.get('trending/movie/day', {
            params: {
                api_key: '0a24bf0c31d1939fd890aa77270f6ea1',
            }
        })
        console.log(response.data.results);
        this.setState({movies: response.data.results})
    }

    render(){
        return(
            <div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <h3 className="content-header">Movies</h3>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <form className="form-inline ml-3">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Add New Movie"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="fas fa-plus"/></span>
                                        </div>
                                    </div>
                                </form></div>
                        </div>
                        <div className="row">
                            {this.state.movies.map((movie, index) => (
                                <div className="col-sm-6 col-md-3 col-2 col-xl-2">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-body">
                                                <img src={'https://image.tmdb.org/t/p/w500/'+movie.poster_path} alt="" style={{width: '100%', height: '100%', padding: '0', margin: '0px'}}/>
                                            </h3>
                                        </div>
                                        <div className="card-footer">
                                            {movie.title}
                                        </div>
                                    </div>
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