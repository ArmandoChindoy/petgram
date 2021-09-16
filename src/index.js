import React from 'react'
import ReactDOM from 'react-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
  HttpLink,
  ApolloLink
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { App } from './App'
import Context from './Context'

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.location.href = '/'
  }
})

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }
  return forward(operation)
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-server-olive.vercel.app/graphql'
    })
  ])
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
