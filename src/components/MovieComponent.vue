<script>
import { state } from '../state';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import LanguageComponent from './LanguageComponent.vue';
import RatingComponent from './RatingComponent.vue';

export default {
    name: 'MovieComponent',
    components: {
    LanguageComponent,
    FontAwesomeIcon,
    RatingComponent,
    },
    props: {
        movie: Object,
    },
    data() {
        return {
            state,
            flags: ['it', 'en','de']
        }
    },
    methods: {
        /* function to check if we have a flag to print instead of lang code */
        is_a_flag(lang_code) {
            if (this.flags.includes(lang_code)) {
                return true
            } 
            return false
        },
        /* gets the url path of the svg image of the country language */
        getImagePath(lang_code){
            return new URL(`./assets/img/${lang_code}.svg`, import.meta.url).href
        },
    },
}
</script>

<template>
    <div class="card col text-light">
        <!-- card image -->
        <img class="card-img h-100" :src="`${state.posterBaseApi}${movie.poster_path}`">

        <!-- Card body, to fix on hover -->
        <div class="card-body movie-infos">
            <h3> {{ movie.title }} </h3>
            <h5> {{ movie.original_title }} </h5>

            <!-- display of the country flag language, to fix -->
            <img width="20px" v-if="is_a_flag(movie.original_language)" :src="getImagePath(movie.original_language)" alt="">
            <span v-else>
                <strong>Language: {{ movie.original_language }} </strong>
            </span>

            <!-- stars rating component -->
            <RatingComponent :movie="movie"></RatingComponent>

        </div>
    </div>
</template>


<style lang="scss" scoped>
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