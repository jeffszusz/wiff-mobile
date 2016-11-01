import React from 'react';
import './FilmDetail.css';

class FilmDetail extends React.Component {


  gotoWIFF (e) {
    e.stopPropagation();

    window.open('http://www.windsorfilmfestival.com/films/' +
      this.props.data.title.toLowerCase().replace(/\s/g, '-'));
  }

  gotoIMDB (e) {
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
    if (this.props.omdb && this.props.omdb.Poster
        && this.props.omdb.Poster != "N/A") {
      return <img alt="Film Poster" src={this.props.omdb.Poster} />
    } else {
      return <div className='no-image'>No Image Available</div>
    }
  }

  getImdbButton () {
    if (this.props.omdb && this.props.omdb.imdbID) {
      return (
        <button onClick={this.gotoIMDB.bind(this)}>
          Internet Movie Database
        </button>
      )
    }
  }


  render () {
    return (
      <div className={"film-detail " + this.props.showDetails}>
        <div className="film-poster">
          {this.getPoster()}
        </div>
        {this.getGenre()}
        {this.getPlot()}
        <button className="button-primary" onClick={this.gotoWIFF.bind(this)}>
          Windsor International Film Festival
        </button>
        {this.getImdbButton()}
      </div>
    )
  }
}

export default FilmDetail;
