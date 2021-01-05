import {
    LOAD_ALL_SPACE_SHIP,
    LOAD_FILTERED_SPACE_SHIP,
    
    SOME_ERROR_OCCURED
} from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    ships: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_ALL_SPACE_SHIP:
            return {
                ...state,
                ships: action.payload
            };

        case LOAD_FILTERED_SPACE_SHIP:
            return {
                ...state,
                ships: action.payload
            };

        case SOME_ERROR_OCCURED:
            return {
                ...state,
                ships: action.payload
            };

        default:
            return state;
    }
};