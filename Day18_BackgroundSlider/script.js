// TMDB API is used

const API_KEY = 'api_key=';

const BASE_URl = 'https://api.themoviedb.org/3/';
const API_URL = BASE_URl + '/discover/movie?sort_by=popularity.desc&'+API_KEY;


function getMovies(url) {
    fetch(url).then(res=>res.json().then(data => {
        showMovies(data.results);
    }))
}

function showMovies(data) {
    data.forEach(movie => {
        const movieE1 = document.createElement('div');
        movieE1.classList.add('movie');
        movieE1.innerHTML= ``
    })

}