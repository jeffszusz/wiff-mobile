require("./css/normalize.css");
require("./css/skeleton.css");
require("./css/style.css");

import React from 'react';
import moment from 'moment';

import Film from './film.jsx';

import filmJSON from './wiff.json';

console.log(filmJSON[0]);

class List extends React.Component {
  constructor () {
    super();

    var filmList = filmJSON.map(function(film){
      return {
        title: film.Title,
        venue: film.Venue,
        start: moment(film.Date + ' ' + film["Start Time"]),
        end: moment(film.Date + ' ' + film["End Time"]),
        reference: film.Reference
      }
    });

    filmList = filmList.sort(function(a, b){
      console.log(a.start.valueOf());
      if (a.start.valueOf() < b.start.valueOf()) return -1;
      if (a.start.valueOf() > b.start.valueOf()) return 1;
      return 0;
    });

    this.state = {
      filmList: filmList
    };
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
