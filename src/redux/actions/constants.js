import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

const restLink = new RestLink({
    uri: `https://api.openweathermap.org/data/2.5/`,
    responseTransformer: async response => response.json().then(({data}) => data),
});
  
const apollo_client = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache(),
});

export const initialState = {
    location: {lat: 51.505, lon: -0.09},
    searchParam: [],
    forecast: {},
    client: apollo_client,
    error: null
}