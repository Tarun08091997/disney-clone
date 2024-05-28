import axios from 'axios'

export function getTrandingMovies(){
    const url = 'https://api.themoviedb.org/3/trending/movie/day';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWU4NTY2NDM4NjI4NGE0ZTU1MDc1NTBjNjIzMzkzYSIsInN1YiI6IjY2NTJlMmMwYWY0OTJhYjk2ZWM2MjQ3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tb0susV38JaG0vRrQwTOOB6fTEWoEVNMP_PDSuaOQSs'
        }
    };

    return new Promise((resolve , reject) =>{
        axios.get(url , options)
        .then(res => resolve(res))
        .catch(err => reject(err));
    })
}
