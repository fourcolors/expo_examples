import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDos from './screens/todos'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj31acjh2fi2s0180k80f2utn'})
})

/*
 * Main App. This was generated from create-react-native-app
 * @returns {App}
 */
export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client = {client}>
        <View style={styles.container}>
          <Text style={styles.header}>To Do's</Text>
          <ToDos />
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    paddingLeft:20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 36,
    color: 'green'
  }
});
