<script>
import { state } from '../state';

export default {
    name: 'MovieComponent',
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <div class="card col">
        <img class="card-img h-100" :src="result.poster_path">
        <div class="card-body movie-infos">
            <h3> {{ result.title }} </h3>
            <h3> {{ result.original_title }} </h3>
            <p>Language: {{ result.original_language }} </p>
            <p>Rating: {{ result.vote_average }}</p>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>