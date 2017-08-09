import { FETCH_DATA_PROCESS, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from '../actions/types';

const INITIAL_STATE = {data: null, loading: false, error: ''};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return {...state, loading: false, data: action.payload, error: ''};
        case FETCH_DATA_FAIL:
            return {...state, loading: false, error: action.error};
        case FETCH_DATA_PROCESS:
            return {...state, loading: true, error: ''};
        default:
            return state;
    }
}
