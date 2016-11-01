import moment from 'moment';

var films;

function filmListFormatter (json) {

  momentizeFilmDates(json)
  sortFilmsByMoment()
  hideOldFilms()

  return films
}

function momentizeFilmDates (list) {

  films = list.map(function(film){
    return {
      title: film.Title,
      venue: film.Venue,
      start: moment(film.Date + ' ' + film["Start Time"]),
      end: moment(film.Date + ' ' + film["End Time"]),
      reference: film.Reference
    }
  });

  return this
}

function sortFilmsByMoment () {

  films = films.sort(function(a, b){
    if (a.start.valueOf() < b.start.valueOf()) return -1;
    if (a.start.valueOf() > b.start.valueOf()) return 1;
    return 0;
  });

  return this
}

function hideOldFilms (list) {

  films = films.filter(function(film){
    return film.start.valueOf() > moment().valueOf();
  });

  return this
}

export default filmListFormatter;
