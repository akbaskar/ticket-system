/**
 *
 * @param arr
 * @param key
 * @param ascOrderVal
 * @param order
 * @returns {*}
 * @constructor
 */
export default function SortByKey (arr, key, ascOrderVal, order){
    return arr.sort((obj1,obj2)=> {
        const comparator = (order, ascOrderVal) => (order === ascOrderVal ?
            (obj1, obj2) => (obj1.localeCompare(obj2) ) :
            (obj1, obj2) => (obj2.localeCompare(obj1) ));
        return comparator(order, ascOrderVal)(obj1[key].toString().toLowerCase(), obj2[key].toString().toLowerCase());
    })
}