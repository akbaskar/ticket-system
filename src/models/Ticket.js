// All the field names have been converted to   came case considering naming convention
export default class Ticket {
    // Requestor (Number) : Employee ID who submitted the ticket
    Requestor = null;


    // ITOwner (Number) : Employee ID of IT employee who serviced ticket
    ITOwner = null;

    // FiledAgainst (String) :Functional area the ticket was filed
    FiledAgainst = null;

    // Severity Submitter assigned severity of ticket
    Severity = null;

    // Priority : IT assigned priority of ticket
    Priority = null;

    // Type of ticket : String
    TicketType = null;

    //daysOpen : Number , Number of days that the ticket was open

    daysOpen = null;



    // Satisfaction - Sat
    Satisfaction = null;

    //Ticket creation Date
    TicketCreationDate = null;


    RequestorSeniority = null;

    constructor(Requestor=null,RequestorSeniority=null, ITOwner=null, FiledAgainst=null,TicketType=null,
                Severity=null, Priority=null,  daysOpen=null, Satisfaction=null,  TicketCreationDate=null){
        this.Requestor =Requestor;
        this.RequestorSeniority =RequestorSeniority;
        this.ITOwner = ITOwner;
        this.FiledAgainst =FiledAgainst;
        this.TicketType =TicketType;
        this.Severity = Severity;
        this.Priority = Priority;
        this.daysOpen =daysOpen;
        this.Satisfaction= Satisfaction;
        this.TicketCreationDate = TicketCreationDate;
    }


}


// Example
// "ticket": 125,
// "Requestor": 717,
// "RequestorSeniority": "2 - Regular",
// "ITOwner": 35,
// "FiledAgainst": "Software",
// "TicketType": "Request",
// "Severity": "2 - Normal",
// "Priority": "0 - Unassigned",
// "daysOpen": 17,
// "Satisfaction": "3 - Highly satisfied",
// "Ticket Creation Date": "1/1/1990"