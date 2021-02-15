import { 
    LOADFORECAST,
    ERRORS
} from './action_types';

import { fetchForecast } from '../../api';

export const loadForecast = async (lat,lon) => {
    return  async dispatch => {
                try {
                    const weatherData = await fetchForecast(lat,lon);
                    dispatch({
                        type: LOADFORECAST,
                        payload: weatherData
                    })
                } catch(err) {
                    dispatch({
                        type: ERRORS,
                        payload: {
                            code: err.code,
                            message: err.message
                        }
                    })
                }   
            }
}