import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import TicketList from "../components/TicketList";
import NotFound from "../components/NotFound";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect :'/login'

        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },

        {
            path: '/tickets',
            name: 'Tickets',
            props: true,
            component: TicketList
        },
        {
            path: '*',
            name: 'NotFound',
            props: true,
            component: NotFound
        }
    ]
})