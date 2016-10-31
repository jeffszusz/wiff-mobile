require("./css/normalize.css");
require("./css/skeleton.css");
require("./css/style.css");

import React from 'react';
import moment from 'moment';

import Film from './film.jsx';
import filmListFormatter from './film_list_formatter.jsx';

class List extends React.Component {

  constructor (props) {
    super();

    this.state = {
      filmList: filmListFormatter(props.filmList)
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
