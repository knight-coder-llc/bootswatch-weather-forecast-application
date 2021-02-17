import { 
    LOADFORECAST,
    ERRORS
} from './action_types';
import { fetchForecast } from '../../components/api';
import { fetchQuery } from '../../utils';

export const loadForecast = () => {
    try {
        const weatherData = fetchQuery();

        return dispatch => {
            dispatch({
                type: LOADFORECAST,
                payload: weatherData
            })
        }
                    
    } catch(err) {
        return dispatch => {
            dispatch({
                type: LOADFORECAST,
                payload: {
                    code: err.code,
                    message: err.message
                }
            })
        }
    }
    // return  async dispatch => {
    //             try {
    //                 const weatherData = await fetchQuery();
    //                 dispatch({
    //                     type: LOADFORECAST,
    //                     payload: weatherData
    //                 })
    //             } catch(err) {
    //                 dispatch({
    //                     type: ERRORS,
    //                     payload: {
                            // code: err.code,
                            // message: err.message
    //                     }
    //                 })
    //             }   
    //         }
}