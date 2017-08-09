import { FETCH_DATA_PROCESS, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from './types';
import * as $ from "jquery";

const FLICKER_API = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

export function fetchData(terms) {

    // Set the tag display options
    let options = {
        tags: terms,
        format: "json"
    };

    // Get json format data using $.getJSON()
    return (dispatch) => {
        dispatch({
           type: FETCH_DATA_PROCESS
        });
        $.getJSON(FLICKER_API, options)
            .done((data) => {
                onSuccess(data, dispatch);
            })
            .fail((jqxhr, textStatus, error) => {
                onFail(jqxhr, textStatus, error, dispatch);
            });
    }
}

// success callback function
function onSuccess(data, dispatch) {
    dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: data.items,
    });
}

// error callback function
function onFail(jqxhr, textStatus, error, dispatch) {
    dispatch({
        type: FETCH_DATA_FAIL,
        error: `${textStatus}: + ${error}`
    })
}