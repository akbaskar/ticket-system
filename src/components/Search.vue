<template>
    <div>
        <input type="text" placeholder="Type to search" v-model="searchedText">
        <button v-on:click="updateSearch" class="btn-outline-success  rounded">Search</button>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data: ()=>{
            return {
                searchedText :""
            }
        },

        methods:{
            updateSearch:function () {
                this.$emit('updateSearch', this.searchedText);
            }
        }
    }
</script>

<style scoped>

</style>