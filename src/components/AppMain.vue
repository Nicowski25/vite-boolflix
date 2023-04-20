<script>
import { state } from '../state.js';
import SearchComponent from './SearchComponent.vue'
import MovieComponent from './MovieComponent.vue';
import TvSeriesComponent from './TvSeriesComponent.vue'

export default {
    name: 'AppMain',
    components: {
        SearchComponent,
        MovieComponent,
        TvSeriesComponent,
    },
    data() {
        return {
            state
        }
    }
}
</script>
<template>

    <SearchComponent></SearchComponent>

    <div class="container">

        <h1 v-if="state.searchedMoviesResults.length > 0">MOVIES</h1>
        <div class="row row-cols-md-4 g-4">
            <MovieComponent v-for="movie in state.searchedMoviesResults" :movie="movie"></MovieComponent>
        </div>

        <h1 v-if="state.searchedSeriesResults.length > 0">SERIES</h1>
        <div class="row row-cols-md-4 g-4">
            <TvSeriesComponent v-for="serie in state.searchedSeriesResults" :tvSerie="serie"></TvSeriesComponent>
        </div>

    </div>


</template>


<style lang="scss" scoped>

</style>