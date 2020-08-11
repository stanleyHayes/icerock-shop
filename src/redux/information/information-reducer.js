import {NEWS} from "./information.data";

const INITIAL_STATE = {
    news: NEWS,
    error: null,
    loading: false
}

const newsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type){

        default: return state;
    }

}


export default newsReducer;
