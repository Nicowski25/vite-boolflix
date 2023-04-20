<script>
import { state } from '../state';

export default {
    name: 'SearchComponent',
    data() {
        return {
            state
        }
    }
}


</script>
<template>
    <div class="container py-3 text-center">
        <input type="text" v-model="state.searchText" placeholder="Type movie to search">
        <button @click="state.fetchMovies(), state.fetchTvSeries()">Search</button>
    </div>
</template>


<style lang="scss" scoped></style>