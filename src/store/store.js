import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
const initialState = {
    people: [],
    person: {},
    isLoading: false,
    next: "",
    prev: "",
};

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_PEOPLE" :
            return { ...state, people: action.people };
        case "SET_PERSON":
            return {...state, person: action.person };
        case "SET_LOADING":
            return {...state, isLoading: action.isLoading };
        case "SET_NEXT_PAGE":
            return {...state, next: action.next };
        case "SET_PREVIOUS_PAGE":
            return {...state, prev: action.prev };
        default:
            return state;
    }
}

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(thunk))
);

export default store;
