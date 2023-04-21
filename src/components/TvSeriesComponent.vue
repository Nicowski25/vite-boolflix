<script>
import { state } from '../state';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import LanguageComponent from './LanguageComponent.vue';
import RatingComponent from './RatingComponent.vue';

export default {
    name: 'TvSeriesComponent',
    components: {
    LanguageComponent,
    FontAwesomeIcon,
    RatingComponent,
    },
    props: {
        tvSerie: Object
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
        <!-- Card image -->
        <img class="card-img h-100" :src="`${state.posterBaseApi}${tvSerie.poster_path}`">

        <!-- Card body, to fix on hover -->
        <div class="card-body movie-infos">
            <h3> {{ tvSerie.name }} </h3>
            <h5> {{ tvSerie.original_name }} </h5>
            <p>Language: {{ tvSerie.original_language }} </p>

            <!-- stars rating component -->
            <RatingComponent :movie="tvSerie"></RatingComponent>

        </div>
    </div>
</template>


<style lang="scss" scoped>

h1 {
    font-weight: 700;
}
.card {
    padding: 0;
    border: 3px solid #141414;
    background-color: #141414;
    .card-img {
        object-fit: cover;
    }
    .card-body {
        background-color: #1f1f1ff1;
        padding: 1rem;
    }
}

ul {
    list-style: none;
    padding: 0;
}
</style>