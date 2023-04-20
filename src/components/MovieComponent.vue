<script>
import { state } from '../state';
import LanguageComponent from './LanguageComponent.vue';

export default {
    name: 'MovieComponent',
    components: {
        LanguageComponent,
    },
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
        <img class="card-img h-100" :src="`${state.posterBaseApi}${movie.poster_path}`">
        <div class="card-body movie-infos">
            <h3> {{ movie.title }} </h3>
            <h5> {{ movie.original_title }} </h5>
            <LanguageComponent></LanguageComponent>
            <p>Language: {{ movie.original_language }} </p>
            <p>Rating: {{ movie.vote_average }}</p>

        </div>
    </div>
</template>


<style lang="scss" scoped>
.card {
    padding: 0;
    .card-img {
        object-fit: cover;
    }
    .card-body {
        padding: 1rem;
    }
}

</style>