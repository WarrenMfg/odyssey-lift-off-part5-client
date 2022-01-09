import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const isProd = process.env.NODE_ENV === 'production';

const client = new ApolloClient({
  uri: isProd ? 'https://server-cat-stronauts.herokuapp.com/' : 'http://localhost:4000',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
