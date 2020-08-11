import {REVIEWS} from "./reviews.data";

const INITIAL_STATE = {
    reviews: REVIEWS,
    error: null,
    loading: false
}

const reviewsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type){

        default: return state;
    }

}


export default reviewsReducer;
