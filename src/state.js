import { reactive } from "vue";
import axios from "axios";

export const state = new reactive({
    API_Key: '875a9a029ad1f857a563b3db65a0f4a3',
    searchMovieUrl: 'https://api.themoviedb.org/3/search/movie',
    searchTvSeriesUrl: "https://api.themoviedb.org/3/search/tv",
    searchText: '',
    searchedMoviesResults: [],
    searchedSeriesResults: [],
    loading: true,

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