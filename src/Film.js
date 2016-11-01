import React from 'react';
import 'whatwg-fetch';

import './Film.css';
import FilmDetail from './FilmDetail.js';

class Film extends React.Component {

  constructor () {
    super();

    this.state = {
      showDetails: false,
      omdb: null
    }
  }

  toggleDetails (e) {
    this.setState({showDetails: !this.state.showDetails}, () => {
      if (this.state.showDetails) {
        this.fetchOmdbData();
      }
    });
  }

  fetchOmdbData () {
    if (this.state.omdb) { return }
    this.setState({omdb: {}}); // pending, don't ask again

    var query = 'http://www.omdbapi.com/' +
      '?t=' + this.props.data.title +
      '&y=' + this.props.data.title

    fetch(query)
      .then((response) => {
        return response.json();
      }).then((json) => {
        this.setState({omdb: json});
      });

  }

  getYear () {
    if (this.props.data.year && this.state.showDetails) {
      return '(' + this.props.data.year + ')'
    }
  }

  render() {
    var date = this.props.data.start.format("ddd, MMM DD");
    var start = this.props.data.start.format("h:mm A").replace(/\s/g, '\u00a0');
    var end = this.props.data.end.format("h:mm A").replace(/\s/g, '\u00a0');

    var runtime = <div>{this.props.data.runtime} minutes</div>

    return (
      <div className="row film-item" onClick={this.toggleDetails.bind(this)}>
        <div className="seven columns">
          <h3 className="film-title">
            {this.props.data.title} {this.getYear()}
          </h3>
          <h4 className="film-venue">{this.props.data.venue}</h4>
        </div>
        <div className="five columns">
          <div className="showing-time">
            <b>{date}</b><br /> {start} - {end}
            {this.state.showDetails ? runtime : null}
          </div>
        </div>
        <FilmDetail data={this.props.data}
          showDetails={this.state.showDetails ? 'shown' : 'hidden'}
          omdb={this.state.omdb} />
      </div>
    );
  }
}

export default Film;
