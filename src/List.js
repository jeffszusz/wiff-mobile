import React from 'react';
import './List.css';

import Film from './Film.js';
import filmListFormatter from './film_list_formatter.jsx';

class List extends React.Component {

  constructor (props) {
    super();

    this.state = {
      filmList: filmListFormatter(props.filmList),
    };
  }

  render () {
    var films = this.state.filmList.map((data, index) => {
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
