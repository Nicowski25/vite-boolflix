<script>
import { state } from '../state.js';
import SearchComponent from './SearchComponent.vue'
import MovieComponent from './MovieComponent.vue';

export default {
    name: 'AppMain',
    components: {
        SearchComponent,
        MovieComponent,
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
            <MovieComponent v-for="result in state.searchResults"></MovieComponent>
        </div>
    </div>

</template>


<style lang="scss" scoped>

</style>