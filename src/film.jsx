import React from 'react';

class Film extends React.Component {
  constructor() {
    super();
  }

  handleClick (e) {
    location.href = 'http://www.windsorfilmfestival.com/films/' +
      this.props.data.title.toLowerCase().replace(/\s/g, '-');
  }

  render() {
    return (
      <div className="row film-item" onClick={this.handleClick.bind(this)}>
        <div className="one column">
          <div className="showing-time">
            <b>{this.props.data.start.format("ddd, MMM DD")}</b><br />
            {this.props.data.start.format("H:mm A")} - {this.props.data.end.format("H:mm A")}</div>
          <h3>{this.props.data.title}</h3>
          <h4>{this.props.data.venue}</h4>
        </div>
      </div>
    );
  }
}

export default Film;
