<script>
import { state } from '../state';
export default {
    name: 'AppMain',
    data() {
        return {
            state
        }
    }
}
</script>
<template>

    <div class="container">
        <input type="text" v-model="state.searchText" placeholder="Type movie to search">
        <button @click="state.searchMovies()">Search</button>
    </div>

    <div class="movies container">
        <div class="row row-cols-md-4 g-4">
            <div class="card col" v-for="movie in state.moviesFound" >
                <img class="card-img img-fluid h-100" :src="movie.poster_path">
                <div class="card-body movie-infos">
                    <h3> {{ movie.original_title }} </h3>
                    <p> {{ movie.overview }} </p>
                    <p>Language: {{ movie.language }} </p>
                </div>
            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped>

</style>