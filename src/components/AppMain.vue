<script>
import { state } from '../state.js';
import SearchComponent from './SearchComponent.vue'

export default {
    name: 'AppMain',
    components: {
        SearchComponent,
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

    <div class="movies container">
        <div class="row row-cols-md-3 g-4">
            <div class="card col" v-for="result in state.searchResults" >
                <img class="card-img h-100" :src="result.poster_path">
                <div class="card-body movie-infos">
                    <h3> {{ result.title }} </h3>
                    <h3> {{ result.original_title }} </h3>
                    <p>Language: {{ result.original_language }} </p>
                    <p>Rating: {{ result.vote_average }}</p>
                </div>
            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped>

</style>