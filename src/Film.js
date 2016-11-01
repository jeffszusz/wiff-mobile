import React from 'react';
import 'whatwg-fetch';

import './Film.css';
import FilmDetail from './FilmDetail.js';

class Film extends React.Component {

  constructor () {
    super();

    this.state = {
      omdb: null
    }
  }

  isActive () {
    return this.props.activeFilm === this;
  }


  detailsShown () {
    return this.isActive() ? 'shown' : 'hidden';
  }

  setActive (e) {
    if (this.props.activeFilm === this) {
      this.props.setActiveFilm({});
    } else {
      this.props.setActiveFilm(this);
      this.getOMDBData();
    }
  }

  getOMDBData () {
    if (this.state.omdb) { return }

    var query = 'http://www.omdbapi.com/' +
      '?t=' + this.props.data.title +
      '&y=' + this.props.data.title

    fetch(query)
      .then((response) => {
        return response.json();
      }).then((json) => {
        this.setState({'omdb': json});
      });
  }

  render() {

    var date = this.props.data.start.format("ddd, MMM DD");
    var start = this.props.data.start.format("H:mm A").replace(/\s/g, '\u00a0');
    var end = this.props.data.end.format("H:mm A").replace(/\s/g, '\u00a0');

    var runtime = <div>{this.props.data.runtime} minutes</div>

    return (
      <div className="row film-item" onClick={this.setActive.bind(this)}>
        <div className="seven columns">
          <h3 className="film-title">{this.props.data.title}&nbsp;
          {this.isActive() ? '(' + this.props.data.year + ')' : null}</h3>
          <h4 className="film-venue">{this.props.data.venue}</h4>
        </div>
        <div className="five columns">
          <div className="showing-time">
            <b>{date}</b><br /> {start} - {end}
            {this.isActive() ? runtime : null}
          </div>
        </div>
        <FilmDetail data={this.props.data}
          showDetails={this.detailsShown()}
          omdb={this.state.omdb} />
      </div>
    );
  }
}

export default Film;
