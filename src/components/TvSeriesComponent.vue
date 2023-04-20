<script>
import { state } from '../state';

export default {
    name: 'TvSeriesComponent',
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
        <img class="card-img h-100" :src="tvSerie.poster_path">
        <div class="card-body movie-infos">
            <h3> {{ tvSerie.name }} </h3>
            <h5> {{ tvSerie.original_name }} </h5>
            <p>Language: {{ tvSerie.original_language }} </p>
            <p>Rating: {{ tvSerie.vote_average }}</p>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>