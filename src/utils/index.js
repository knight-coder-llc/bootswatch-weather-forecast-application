import React from 'react';
import store from '../redux/store';
import { gql } from '@apollo/client';

export const fetchQuery = () => {
    const currentState = store.getState();
    const client = currentState.client;
    const loc = currentState.location;
    console.log('fetching!!')
    const query = gql`
        query allWeather {
            weather @rest(type: "Forecast", path: "onecall?lat=${loc.lat}&lon=${loc.lon}&appid=${process.env.API_KEY}") {
                timezone
                timezone_offset
                current {
                    dt
                    sunrise
                    sunset
                    temp
                    feels_like
                    pressure
                    humidity
                    dew_point
                    uvi
                    clouds
                    visibility
                    wind_speed
                    wind_deg
                    weather
                    alerts
                }
            }
        }
    `

    client.query({query}).then(res => {
        console.log('query', res.data)
    });

    return;
}