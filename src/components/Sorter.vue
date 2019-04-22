<template>
    <div class="row justify-content-center text-center mx-auto py-2">
        <SortBy v-for="(sortBy,index) in sortOptions" :sortBy="sortBy" :key="index" :updateSort="updateSort" ></SortBy>
    </div>
</template>

<script>
    import SortBy from "./SortBy";
    import {SORT_CATEGORIES} from "../constants";
    export default {
        name: "Sorter",
        components: {SortBy},
        props:{
            sortOptions : Array,
            updateSort: Function
        },
        created() {
            this.sortOptions=SORT_CATEGORIES;

        },
        updated() {
            this.sortOptions=SORT_CATEGORIES;
        }

    }
</script>


<style scoped>

.btn-gr{
    display: inline-block;
}
</style>