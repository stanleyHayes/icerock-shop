import {combineReducers} from "redux";

import newsReducer from "./information/information-reducer";
import productsReducer from "./products/products-reducer";
import reviewsReducer from "./reviews/reviews-reducer";
import ordersReducer from "./orders/orders-reducer";
import messagesReducer from "./messages/messages-reducer";

const rootReducer = combineReducers({
    news: newsReducer,
    products: productsReducer,
    reviews: reviewsReducer,
    orders: ordersReducer,
    messages: messagesReducer
});

export default rootReducer;
