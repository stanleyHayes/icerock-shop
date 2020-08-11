import {ORDERS} from "./orders.data";

const INITIAL_STATE = {
    orders: ORDERS,
    error: null,
    loading: false,
    order: ORDERS[0]
}

const ordersReducer = (state = INITIAL_STATE, action) => {

    switch (action.type){

        default: return state;
    }

}


export default ordersReducer;
