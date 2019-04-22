<template>


        <tr>
            <th scope="col">{{ticket.ticket}}</th>
            <td scope="col">{{ticket.FiledAgainst}}</td>
            <td>{{ticket.Priority}}</td>
            <td>{{ticket.TicketType}}</td>
            <Modal style="display: inline-block;" :ticket="ticket"/>


        </tr>



</template>

<script>
    import Modal from "./Modal";
    export default {
        name: "Ticket",
        components: {Modal},
        props:
            {
                ticket: {
                    ticket: Number,
                    Requestor: Number,


                    // ITOwner (Number) : Employee ID of IT employee who serviced ticket
                    ITOwner: Number,

                    // FiledAgainst (String) :Functional area the ticket was filed
                    FiledAgainst: String,

                    // Severity Submitter assigned severity of ticket
                    Severity: String,

                    // Priority : IT assigned priority of ticket
                    Priority: String,

                    // Type of ticket : String
                    TicketType: String,

                    //daysOpen : Number , Number of days that the ticket was open

                    daysOpen: Number,


                    // Satisfaction - Sat
                    Satisfaction: String,

                    //Ticket creation Date
                    TicketCreationDate: String,


                    RequestorSeniority: String
                }
            }

    }

</script>

<style  lang="css">

</style>