import moment from 'moment';

var films;

function filmListFormatter (json) {

  console.log('original json', json[0]);

  momentizeFilmDates(json)
  sortFilmsByMoment()
  hideOldFilms()

  return films
}

function momentizeFilmDates (list) {

  films = list.map(function(film){
    var start = moment(film.Date + ' ' + film["Start Time"], 'MM/DD/YYYY H:mm A');
    var end = moment(film.Date + ' ' + film["End Time"], 'MM/DD/YYYY H:mm A');
    var runtime = moment.duration(end.diff(start)).asMinutes();

    return {
      title: film.Title,
      venue: film.Venue,
      start: start,
      end: end,
      runtime: runtime,
      year: film.Year
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
