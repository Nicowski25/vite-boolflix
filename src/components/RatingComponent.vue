<script>
import { state } from '../state'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
    name: 'RatingComponent',
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            state
        }
    },
    methods: {
        /* set the rating rounded to 1-5 and print the stars */
        ratingCount(rating) {
            let vote = Math.round(rating * 5 / 10)
            let stars = []
            for (let i = 0; i < vote; i++) {
                stars.push('fa-star fa-solid')
            }
            return stars
        }  
    },
    props: {
        movie: Object,
        tvSerie: Object,
    },
}
</script>
<template>
    <ul class="d-flex">
        <li v-if="(movie.vote_average != 0)" v-for="star in ratingCount(movie.vote_average)">
            <font-awesome-icon icon="fa-solid fa-star" />
        </li>
        <p v-else>Rating: {{ movie.vote_average }}</p>
    </ul>
</template>


<style lang="scss" scoped></style>