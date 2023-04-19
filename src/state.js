import { reactive } from "vue";
import axios from "axios";

export const state = new reactive({
    API_Key: '875a9a029ad1f857a563b3db65a0f4a3',
    searchMovieApi: 'https://api.themoviedb.org/3/search/movie',
    searchText: '',
    moviesFound: [],

    searchMovies() {
        if (this.searchText === '') {
            return
        } else {
            //https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&langtuage=en-US
            let url = `${this.searchMovieApi}?api_key=${this.API_Key}&query=${this.searchText}`
            axios
            .get(url)
            .then(response => {
                console.log(response.data.results);
                this.moviesFound = response.data.results;
                this.searchText = ''
            }) 
            .catch(error => {
                console.error(error.message)
            })
        }
    },
})