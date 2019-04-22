<template>

    <div class="text-center mx-auto ">
        <Search @updateSearch="updateSearchText"></Search>

        <Sorter :updateSort="updateSort"></Sorter>

        <Paginate
                v-if="tickets.length"
                :page-count="totalPages"
                :click-handler="clickPaginate"
                :prev-text="'<'"
                :next-text="'>'"
                :container-class="'pagination'"
                :page-class="'page-item'"
                :page-link-class="'page-link-item'"
                :prev-class="'prev-item'"
                :prev-link-class="'prev-link-item'"
                :next-class="'next-item'"
                :next-link-class="'next-link-item'"
                :break-view-class="'break-view'"
                :break-view-link-class="'break-view-link'"
        >
        </Paginate>

        <table class="table table-sm table-striped rounded">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Filed Against</th>
                <th scope="col">Priority</th>
                <th scope="col">Type</th>
            </tr>
            </thead>
            <tbody>
            <Ticket v-for="(ticket,index) in tickets" v-bind:key="index" :ticket="ticket"/>

            </tbody>
        </table>

        <Paginate
                v-if="tickets.length"
                :page-count="totalPages"
                :click-handler="clickPaginate"
                :prev-text="'<'"
                :next-text="'>'"
                :container-class="'pagination'"
                :page-class="'page-item'"
                :page-link-class="'page-link-item'"
                :prev-class="'prev-item'"
                :prev-link-class="'prev-link-item'"
                :next-class="'next-item'"
                :next-link-class="'next-link-item'"
                :break-view-class="'break-view'"
                :break-view-link-class="'break-view-link'"
        >
        </Paginate>


    </div>
</template>

<script>
    import Ticket from "./Ticket";
    import tickets from '../../data/Tickets';
    import Search from "./Search";
    import Paginate from 'vuejs-paginate'
    import Sorter from "./Sorter";
    import SearchByKeys from "../utils/SearchByKeys";
    import {ITEMS_PER_PAGE, SEARCH_FIELD_NAMES, SORT_ORDERS as DEFAULT_SORT, SORT_ORDERS} from "../constants";
    import PaginateArray from "../utils/PaginateArray";
    import SortByKey from "../utils/SortByKey";

    const itemsPerPage = ITEMS_PER_PAGE;
    let currentPage = 1;
    const totalPages = parseInt(tickets.length / itemsPerPage);

    export default {
        name: "TicketList",
        components: {Sorter, Search, Ticket, Paginate},
        data: () => ({
            tickets: tickets,
            currentPage: currentPage,
            totalPages: totalPages,
            searchedText: ""

        }),
        created: function () {
            this.tickets = PaginateArray(tickets, itemsPerPage, currentPage);


        },
        methods: {
            clickPaginate: function (pageNum) {
                this.currentPage = pageNum;
                this.tickets = PaginateArray(tickets, itemsPerPage, pageNum);
            },
            updateSearchText: function (newSearchText) {
                this.searchedText = newSearchText;
                const searchResultTicketsArray = SearchByKeys(tickets, SEARCH_FIELD_NAMES, this.searchedText);
                const arrLen = searchResultTicketsArray.length;
                this.tickets = PaginateArray(searchResultTicketsArray, itemsPerPage, currentPage);
                this.totalPages = parseInt(arrLen / itemsPerPage);
            },


            updateSort: function (sorterObj) {
                console.log(sorterObj.displayName);
                this.tickets = SortByKey(tickets, sorterObj.sortBy, SORT_ORDERS.ASC, sorterObj.sortOrder);
                const arrLen = this.tickets.length;

                console.log(arrLen)
                this.currentPage = 1;
                this.tickets = PaginateArray(this.tickets, itemsPerPage, currentPage);
                this.totalPages = parseInt(arrLen / itemsPerPage);
            }
        }
    }
</script>

<style lang="css">
    .pagination {
        display: flex;
        background-color: rgba(195, 195, 195, 0.23);
        flex: 1;
        flex-direction: row;
        max-width: 400px;
        border: #d5d5d5 0.5px solid;
        margin: auto;
    }

    .page-item {
        flex: 1;
        color: red;
    }

    .page-link-item {
        color: black;
    }

    .prev-item {
        color: black;

    }

    .prev-link-item {
        color: black;

    }

    .next-item {
        color: black;

    }

    .next-link-item {
        color: black;

    }

    .break-view {
    }

    .break-view-item {
    }


</style>