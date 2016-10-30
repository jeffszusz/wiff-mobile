require("./css/normalize.css");
require("./css/skeleton.css");
require("./css/style.css");

import React from 'react';
import moment from 'moment';

import Film from './film.jsx';

class List extends React.Component {

  constructor (props) {
    super();

    this.state = {
      filmList: this.sortFilmsByMoment(this.momentizeFilmDates(props.filmList))
    };
  }

  momentizeFilmDates (list) {
    return list.map(function(film){
      return {
        title: film.Title,
        venue: film.Venue,
        start: moment(film.Date + ' ' + film["Start Time"]),
        end: moment(film.Date + ' ' + film["End Time"]),
        reference: film.Reference
      }
    });
  }

  sortFilmsByMoment (list) {
    return list.sort(function(a, b){
      if (a.start.valueOf() < b.start.valueOf()) return -1;
      if (a.start.valueOf() > b.start.valueOf()) return 1;
      return 0;
    });
  }

  render () {
    var films = this.state.filmList.map(function(data, index){
      return <Film key={index} data={data} />
    });

    return (
      <div className="film-list">
      {films}
      </div>
    );
  }
}

export default List;
