import {
    LOAD_ALL_SPACE_SHIP,
    LOAD_FILTERED_SPACE_SHIP,

    SOME_ERROR_OCCURED
} from './types';

export const loadAllSpaceShip = () => {
    return (dispatch) => {
        fetch('https://api.spaceXdata.com/v3/launches?limit=100', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(ship => ship.json())
            .then(ship => {
                dispatch({ type: LOAD_ALL_SPACE_SHIP, payload: ship });
            })
            .catch((err) => {
                dispatch({ type: SOME_ERROR_OCCURED, payload: err });
            });
    }
}

export const loadAllFilteredByLaunchSpaceShipData = (keyword) => {debugger
    return (dispatch) => {
        fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${keyword}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(ship => ship.json())
            .then(ship => {
                dispatch({ type: LOAD_FILTERED_SPACE_SHIP, payload: ship });
            })
            .catch((err) => {
                dispatch({ type: SOME_ERROR_OCCURED, payload: err });
            });
    }
}

export const loadAllLaunchFailureFilteredSpaceShipData = (keyword) => {
    return (dispatch) => {
        fetch('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(ship => ship.json())
            .then(ship => {
                dispatch({ type: LOAD_FILTERED_SPACE_SHIP, payload: ship });
            })
            .catch((err) => {
                dispatch({ type: SOME_ERROR_OCCURED, payload: err });
            });
    }
}