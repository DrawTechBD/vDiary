import React from "react";
import axios from 'axios';
import {Api} from "../../api/Api";
import Moment from "moment";

class MovieView extends React.Component{
    constructor(props) {
        super();
        this.state = {
            id: props.match.params.id,
            movie: {
                adult: null,
                backdrop_path: '',
                belongs_to_collection: null,
                budget: 0,
                genres: [],
                homepage: '',
                id: 0,
                imdb_id: '',
                original_language: '',
                original_title: '',
                overview: '',
                popularity: 0,
                poster_path: '',
                production_companies: [],
                production_countries: [],
                release_date: '',
                revenue: 0,
                runtime: 0,
                spoken_languages: [],
                status: '',
                tagline: '',
                title: '',
                video: null,
                vote_average: 0,
                vote_count: 0,
            },
            casts: [],
            videos: [],
            images: {
                backdrops: [],
                posters: [],
            },
            trailer: {
                key: '',
            },
        }
    }

    componentDidMount(): void {
        axios.get(Api.movie.themoviedb.url.movie+this.state.id,{
            params: {
                api_key: Api.movie.themoviedb.api
            }
        }).then((res) => {
            this.setState({
                movie: res.data
            });
        });
        axios.get(Api.movie.themoviedb.url.movie+this.state.id+'/credits', {
            params: {
                api_key: Api.movie.themoviedb.api
            }
        }).then((res) =>{

            this.setState({
                casts: res.data.cast.filter((item, index) => {return index < 7})
            })
        });
        axios.get(Api.movie.themoviedb.url.movie+this.state.id+'/images',{
            params: {
                api_key: Api.movie.themoviedb.api
            }
        }).then((res) => {
            const videos = res.data;
            this.setState({
                images: {
                    backdrops: videos.backdrops.filter((item, index) => {return index < 5}),
                    posters: videos.posters.filter((item, index) => {return index < 5})
                },
            })
            console.log(res.data);

        });
        axios.get(Api.movie.themoviedb.url.movie+this.state.id+'/videos',{
            params: {
                api_key: Api.movie.themoviedb.api
            }
        }).then((res) => {
            this.setState({
                videos: res.data.results,
                trailer: res.data.results[0].key
            })
            console.log('Trailer', res.data.results[0].key);
        });
    }

    render() {
        return (
            <div>
                <div className="card mt-2">
                    <div className="card-header">
                        <div >
                            <div className="row" style={{ width: '100%', height: '100%', padding: '40px', color: 'white', backgroundImage: 'linear-gradient(to right, rgba(17.25%, 16.47%, 20.78%, 1.00) 150px, rgba(25.49%, 25.10%, 25.88%, 0.84) 100%)'}}>
                                <div className="col-4">
                                    <img src={'https://image.tmdb.org/t/p/w500/'+this.state.movie.poster_path} style={{width: 'auto', height: '400px', display: "block", margin: 'auto'}}  alt="poster"/>
                                </div>

                                <div className="col-8">
                                    <h2>{this.state.movie.title} ({Moment(this.state.movie.release_date).format('YYYY')})</h2>
                                    <h6 style={{fontStyle: 'italic'}}>{this.state.movie.tagline}</h6>
                                    <div className="btn-group">
                                        <button className="btn" title="Add to Watchlist"><span style={{color: 'white'}}><i className="fas fa-list"/></span></button>
                                        <button className="btn" title="Add to Watch Later"><span style={{color: 'white'}}><i className="fas fa-bookmark"/></span></button>
                                        <button className="btn" title="Add to favourites"><span style={{color: 'white'}}><i className="fas fa-heart"/></span></button>
                                        <button className="btn" title="Leave a review"><span style={{color: 'white'}}><i className="fas fa-star"/></span></button>
                                        <button className="btn" data-toggle="modal" data-target="#youtubeTrailer"><span style={{fontSize: '2em', color: 'tomato'}} title="Play Trailer"><i className="fab fa-lg fa-youtube "/></span></button>
                                    </div>
                                    <h4>Overview</h4>
                                    <p>{this.state.movie.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="youtubeTrailer" tabIndex="-1" role="dialog" aria-labelledby="youtubeTrailerTitle" aria-hidden="true" >
                        <div className="modal-dialog modal-dialog-centered" role="document" style={{width: '750px', margin: 'auto'}}>
                            <div className="modal-content" >
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Youtube Trailer</h5>
                                    <button type="button" className="close" data-dismiss="modal"
                                            aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe src={`https://www.youtube.com/embed/${this.state.trailer}`} frameBorder="0"
                                                allowFullScreen className="embed-responsive-item" title={this.state.trailer}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <h3>Casts</h3>
                                <div className="row">
                                    {this.state.casts.map((cast, index) => (
                                        <div className="card" style={{width: '180px', margin: '15px'}} key={index}>
                                            <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt="" className="card-img-top"/>
                                            <div className="card-body">
                                                <strong>{cast.name}</strong>
                                                <p>{cast.character}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </li>
                            <li className="list-group-item">
                                <h3>Photos</h3>
                                <div className="row">
                                    {this.state.images.backdrops.map((image, index) => (
                                        <div className="col-3" style={{margin: '5px'}} key={index}>
                                            <img src={`https://image.tmdb.org/t/p/w500/${image.file_path}`} alt="" className="img-fluid"/>
                                        </div>
                                    ))}
                                </div>
                            </li>
                            <li className="list-group-item">
                                <h3>Posters</h3>
                                <div className="row">
                                    {this.state.images.posters.map((image, index) => (
                                        <div className="col-3" style={{margin: '5px'}} key={index}>
                                            <img src={`https://image.tmdb.org/t/p/w500/${image.file_path}`} alt="" className="img-fluid"/>
                                        </div>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieView;