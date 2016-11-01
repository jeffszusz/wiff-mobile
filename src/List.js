import React from 'react';
import './List.css';

import Film from './Film.js';
import filmListFormatter from './film_list_formatter.jsx';

class List extends React.Component {

  constructor (props) {
    super();

    this.state = {
      filmList: filmListFormatter(props.filmList),
      activeFilm: {}
    };
  }

  setActiveFilm (film) {
    //console.log('setting ' + this.props.data.title + ' as activeFilm');
    this.setState({activeFilm: film});
  }

  render () {
    var films = this.state.filmList.map((data, index) => {
      return (
        <Film key={index}
              data={data}
              activeFilm={this.state.activeFilm}
              setActiveFilm={this.setActiveFilm.bind(this)} />
      )
    });

    return (
      <div className="film-list">
      {films}
      </div>
    );
  }
}

export default List;
