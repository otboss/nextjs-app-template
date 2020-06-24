import * as client from 'apollo-boost';
import { Config } from './Config';
import { InMemoryCache } from 'apollo-boost';

//ts-ignore
export const ApolloClient = new client.ApolloClient({
    cache: new InMemoryCache(),
    link: new client.HttpLink({
        uri: process.env.NODE_ENV === 'development' ? Config.endpoint : Config.prodEndpoint,
    })
});