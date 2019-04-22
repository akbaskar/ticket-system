<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-outline-secondary" data-toggle="modal" :data-target="'#exampleModal'+ticket.ticket ">
            View
        </button>

        <!-- Modal -->
        <div class="modal fade" :id="'exampleModal'+ticket.ticket" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title mx-auto" id="exampleModalLabel">Ticket {{ticket.ticket}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body  mx-auto">
                        <div class="container">
                            <div class="row">ticket : {{ticket.ticket}}</div>
                            <div class="row">type : {{ticket.TicketType}}</div>
                            <div class="row">Requestor : {{ticket.Requestor}}</div>
                            <div class="row">Priority : {{ticket.Priority}}</div>
                            <div class="row">Severity : {{ticket.Severity}}</div>
                            <div class="row">FiledAgainst : {{ticket.FiledAgainst}}</div>
                            <div class="row">Satisfaction: {{ticket.Satisfaction}}</div>
                            <div class="row">ITOwner: {{ticket.ITOwner}}</div>
                            <div class="row">RequestorSeniority: {{ticket.RequestorSeniority}}</div>
                            <div class="row">daysOpen: {{ticket.daysOpen}}</div>
                            <div class="row">Creation Date: {{ticket["Ticket Creation Date"]}}</div>



                        </div>
                    </div>
                    <div class="modal-footer mx-auto">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal",

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

<style scoped>

</style>