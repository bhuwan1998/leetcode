/**
 * Fill Orders 
 * Given a length of orders of widgets 
 * Given maximum order availability 
 * Provide the total number of orderss that can be fulfilled 
 */

var fillOrders = function(orders, max) {
    let current_sum = 0; 
    let orders_fulfulled = 0; 
    let start = 0; 

    for(let i = 0; i < orders.length; i++) {
        current_sum += orders[i]; 

        while(current_sum >= max) {
            current_sum -= orders[start]; 
            start++;
        }

        if(current_sum <= max) {
            orders_fulfulled = Math.max(orders_fulfulled, i - start + 1); 
        }
    }

    return orders_fulfulled;
}


