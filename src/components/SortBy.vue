<template>
        <div class=" btn-group-sm">
              <button class="btn-outline-secondary btn-sm  btn-group-sm rounded" v-on:click="handleUpdateSort">  {{sortBy.displayName}}</button>
        </div>
</template>

<script>
    export default {
        name: "SortBy",
        props:{
            sortBy: Object,
            updateSort:Function

        },

        methods:{
            handleUpdateSort:function(){
                this.updateSort(this.sortBy)

            }

        }
    }
</script>

<style scoped>

</style>