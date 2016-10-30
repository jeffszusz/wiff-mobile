import React from 'react';

class Film extends React.Component {
  constructor() {
    super();
  }
  getLink (film) {
    return 'http://www.windsorfilmfestival.com/films/' + film.toLowerCase().replace(/\s/, '-');
  }
  render() {
    return (
      <div className="row film-item">
        <div className="one column">
          <div className="showing-time">
            {this.props.data.start.format("ddd, MMM DD")}<br />
            {this.props.data.start.format("H:mm A")} - {this.props.data.end.format("H:mm A")}</div>
          <h3><a href={this.getLink(this.props.data.title)}>{this.props.data.title}</a></h3>
          <h4>{this.props.data.venue}</h4>
        </div>
      </div>
    );
  }
}

export default Film;
