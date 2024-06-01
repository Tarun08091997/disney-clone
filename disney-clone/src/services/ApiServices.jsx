import axios from 'axios'


const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWU4NTY2NDM4NjI4NGE0ZTU1MDc1NTBjNjIzMzkzYSIsInN1YiI6IjY2NTJlMmMwYWY0OTJhYjk2ZWM2MjQ3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tb0susV38JaG0vRrQwTOOB6fTEWoEVNMP_PDSuaOQSs';
const api_key = '6ae85664386284a4e5507550c623393a'
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: {token}
    }
};

export function getTrandingMovies(){
    const url ="https://api.themoviedb.org/3";
    
    return new Promise((resolve , reject) =>{
        axios.get(url + "/trending/all/day?api_key="+api_key,options)
        .then(res => resolve(res))
        .catch(err => reject(err));
    })
}

export function getMovieGenreList(){
    const url = 'https://api.themoviedb.org/3/genre/movie/list';
    return new Promise((resolve , reject) => {
        axios.get(url + "?api_key=" + api_key , options)
        .then(res => resolve(res))
        .catch(err => reject(err));
    })
}

export function getMovieByGenreId(id){
    const url = 'https://api.themoviedb.org/3/discover/movie';    
    return new Promise((resolve , reject) => {
        axios.get(url+ "?api_key=" + api_key +"&with_genres="+id , options)
        .then(res => resolve(res))
        .catch(err => reject(err));
    })
}