import React from 'react';
import './FilmDetail.css';

class FilmDetail extends React.Component {


  gotoWIFF (e) {
    // TODO open in new tab
    e.stopPropagation();

    window.open('http://www.windsorfilmfestival.com/films/' +
      this.props.data.title.toLowerCase().replace(/\s/g, '-'));
  }

  gotoIMDB (e) {
    //TODO
    e.stopPropagation();
    window.open('http://imdb.com/title/' + this.props.omdb.imdbID);
  }

  getGenre () {
    if (this.props.omdb) {
      return <div className="film-genre">{this.props.omdb.Genre}</div>
    }
  }

  getPlot () {
    if (this.props.omdb) {
      return <div className="film-plot">{this.props.omdb.Plot}</div>
    }
  }

  getPoster () {
    if (this.props.omdb) {
      return (
        <div className="film-poster">
          <img src={this.props.omdb.Poster} />
        </div>
      )
    }
  }


  render () {
    return (
      <div className={"film-detail " + this.props.showDetails}>
        {this.getPoster()}
        {this.getGenre()}
        {this.getPlot()}
        <button className="button-primary" onClick={this.gotoWIFF.bind(this)}>
          Windsor International Film Festival
        </button>
        <button onClick={this.gotoIMDB.bind(this)}>
          Internet Movie Database
        </button>
      </div>
    )
  }
}

export default FilmDetail;
