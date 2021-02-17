import React from 'react';
import axios from 'axios';

/**
 * Get weather forecast from One Call API.
 * 
 * @param {float} lat 
 * @param {float} lon 
 */
export const fetchForecast = async (lat, lon) => (
    await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`).then(res => res.data)
)
