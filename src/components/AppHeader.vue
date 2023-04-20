<script>
import { state } from '../state'
export default {
    name: 'AppHeader',
    data() {
        return {
            state
        }
    }
}
</script>
<template>
    <div id="appheader" class="container-fluid py-3">
        <div class="left-header">
            <h1>BOOLFLIX</h1>
            <ul>
                <li>Home</li>
                <li>Tv Series</li>
                <li>Films</li>
                <li>Originals</li>
                <li>Latest Adds</li>
                <li>My List</li>
            </ul>
        </div>
        <div class="right-header">
            <ul>
                <li><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></li>
                <li><font-awesome-icon icon="fa-solid fa-bell" /></li>
                <img :src="state.userImage" alt="" class="p-2">
            </ul>
        </div>
    </div>
</template>


<style lang="scss" scoped>
#appheader {
    color: #fff;
    display: flex;
    align-items: center;
    background-color: black;
    justify-content: space-between;
}

.left-header {
    display: flex;
    align-items: center;
}

h1 {
    color: #e50914;
    font-weight: 800;
}

ul {
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    padding-left: 1rem;

    li {
        padding: 0.5rem;
    }

    li:hover {
        color: #b3b3b3;
    }
}
</style>