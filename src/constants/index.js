
export const SORT_ORDERS = Object.freeze({
    ASC: "asc",
    DESC: "desc"
});

export const SORT_CATEGORIES = [
    {
        displayName: "Priority (High to Low)",
        sortBy: "Priority",
        sortOrder: SORT_ORDERS.DESC
    },
    {
        displayName: "Priority (Low to High)",
        sortBy: "Priority",
        sortOrder: SORT_ORDERS.ASC
    },
    {
        displayName: "Type- asc",
        sortBy: "TicketType",
        sortOrder: SORT_ORDERS.ASC
    },
    {
        displayName: "Type- dsc",
        sortBy: "TicketType",
        sortOrder: SORT_ORDERS.DESC
    },

    {
        displayName: "Severity - High to low",
        sortBy: "Severity",
        sortOrder: SORT_ORDERS.DESC
    },
    {
        displayName: "Severity -low to high",
        sortBy: "Severity",
        sortOrder: SORT_ORDERS.ASC
    },
    {
        displayName: "FiledAgainst -ASC",
        sortBy: "FiledAgainst",
        sortOrder: SORT_ORDERS.ASC
    },
    {
        displayName: "FiledAgainst -DSC",
        sortBy: "FiledAgainst",
        sortOrder: SORT_ORDERS.DESC
    }
];



export const  SEARCH_FIELD_NAMES = ["FiledAgainst","Requestor","Ticket Creation Date","TicketType","ticket"];

export const DEFAULT_SORT = SORT_CATEGORIES[0];

export const ITEMS_PER_PAGE =25;


