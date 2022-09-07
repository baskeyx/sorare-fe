import { ApolloProvider } from '@apollo/client';
import client from './GraphQL/apollo-client';
import Router from './Components/Router';
import './App.css';

const App = () => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
)

export default App;