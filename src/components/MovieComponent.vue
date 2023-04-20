<script>
import { state } from '../state';

export default {
    name: 'MovieComponent',
    props: {
        movie: Object,
    },
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <div class="card col">
        <img class="card-img h-100" :src="movie.poster_path">
        <div class="card-body movie-infos">
            <h3> {{ movie.title }} </h3>
            <h5> {{ movie.original_title }} </h5>
            <p>Language: {{ movie.original_language }} </p>
            <p>Rating: {{ movie.vote_average }}</p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
</style>