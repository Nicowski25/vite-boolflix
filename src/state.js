import { reactive } from "vue";
import axios from "axios";

export const state = new reactive({
    API_Key: '875a9a029ad1f857a563b3db65a0f4a3',
    searchMovieUrl: 'https://api.themoviedb.org/3/search/movie',
    searchTvSeriesUrl: "https://api.themoviedb.org/3/search/tv",
    posterBaseApi: 'https://image.tmdb.org/t/p/w342',
    searchText: '',
    searchedMoviesResults: [],
    searchedSeriesResults: [],
    loading: true,
    userImage: 'http://occ-0-2968-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVgp2zLeE01RTJW9KkYaPPej9DVNvfrLbAKrN7ih5RFS-HAjAPh-PMssBmKcLc60VEnsnBcj6bbU7xpXd6CpVu9egHNMts4.png?r=424',
    
    /* returns an array of movies objects searched in the db */
    fetchMovies() {
        if (this.searchText === '') {
            return
        } else {
            let url = `${this.searchMovieUrl}?api_key=${this.API_Key}&query=${this.searchText}`
            axios
            .get(url)
            .then(response => {
                console.log(response.data.results);
                this.searchedMoviesResults = response.data.results;
                this.searchText = ''
                this.loading = false
            }) 
            .catch(error => {
                console.error(error.message)
            })
        }
    },

    /* returns an array of tvseries objects searched in the db */
    fetchTvSeries() {
        if (this.searchText === '') {
            return
        } else {
            let url = `${this.searchTvSeriesUrl}?api_key=${this.API_Key}&query=${this.searchText}`
            axios
            .get(url)
            .then(response => {
                console.log(response.data.results);
                this.searchedSeriesResults = response.data.results;
                this.searchText = ''
                this.loading = false
            }) 
            .catch(error => {
                console.error(error.message)
            })
        }
    },

})