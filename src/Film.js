import React from 'react';
import './Film.css';

class Film extends React.Component {
  handleClick (e) {
    location.href = 'http://www.windsorfilmfestival.com/films/' +
      this.props.data.title.toLowerCase().replace(/\s/g, '-');
  }

  render() {

    var date = this.props.data.start.format("ddd, MMM DD");
    var start = this.props.data.start.format("H:mm A").replace(/\s/g, '\u00a0');
    var end = this.props.data.end.format("H:mm A").replace(/\s/g, '\u00a0');

    return (
      <div className="row film-item" onClick={this.handleClick.bind(this)}>
        <div className="seven columns">
          <h3 className="film-title">{this.props.data.title}</h3>
          <h4 className="film-venue">{this.props.data.venue}</h4>
        </div>
        <div className="five columns">
          <div className="showing-time">
            <b>{date}</b><br /> {start} - {end}
          </div>
        </div>
      </div>
    );
  }
}

export default Film;
