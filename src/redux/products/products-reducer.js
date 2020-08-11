import {PRODUCTS} from "./products.data";

const INITIAL_STATE = {
    products: PRODUCTS,
    product: PRODUCTS[0],
    error: null,
    loading: false
}

const productsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type){

        default: return state;
    }

}


export default productsReducer;
