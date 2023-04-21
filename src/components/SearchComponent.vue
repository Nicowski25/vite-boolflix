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
    <!-- calls the methods when we press on enter or we click the FAIcon -->
    <div class="container py-3 text-center d-flex">
        <input @keydown.enter="state.fetchMovies(), state.fetchTvSeries()" type="text" v-model="state.searchText" placeholder="Type movie to search" class="form-control rounded">
        <button @click="state.fetchMovies(), state.fetchTvSeries()" class="btn btn-outline-light"><font-awesome-icon icon="fa-solid fa-magnifying-glass"/></button>
    </div>
</template>


<style lang="scss" scoped>

</style>