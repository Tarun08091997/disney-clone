import axios from 'axios'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';
const token = 'Bearer 6ae85664386284a4e5507550c623393a';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: {token}
    }
};

export function getTrandingMovies(){
    const url = 'https://api.themoviedb.org/3/trending/movie/day';
    

    return new Promise((resolve , reject) =>{
        axios.get(url , options)
        .then(res => resolve(res))
        .catch(err => reject(err));
    })
}

export function getMovieByGenreId(id){
    return new Promise((resolve , reject) => {
        axios.get(movieByGenreBaseURL+"&with_genres=" + id , options)
        .then(res => resolve(res))
        .catch(err => reject(err));
    })
}