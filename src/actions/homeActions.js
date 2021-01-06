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

export const loadAllFilteredByLaunchSpaceShipData = (keyword) => {
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

export const loadAllFilteredByLaunchYearSpaceShipData = (launch, land, year) => {
    return (dispatch) => {
        fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=${land}&launch_year=${year}`, {
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

export const loadAllFilteredByLaunchAndLandSpaceShipData = (launch, land) => {
    return (dispatch) => {
        fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=${land}`, {
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