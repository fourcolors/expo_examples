import React, {Component} from 'react'
import {
  Text,
  ListView,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'
import RoundCheckbox from 'rn-round-checkbox'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ToDos extends Component {
  rowData (toDoItem) {
    return (
      <View style = {styles.toDoItem}>
        <RoundCheckbox 
          size = {24}
          checked = {toDoItem.completed}
          onValueChange = {(newValue) => {console.log(newValue)}}
        />
        <Text style = {styles.description}>{toDoItem.description}</Text>
      </View>
    )
  }

  dataSource () {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    return ds.cloneWithRows(this.props.data.allToDoItems)
  }

  render () {
    if (this.props.data.loading) {
      return (
        <Text>Loading...</Text>
      )
    }

    return (
      <ListView 
        dataSource = {this.dataSource()}
        renderRow = {this.rowData}
      />
    )
  }
}

const styles = StyleSheet.create({
  toDoItem: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: Dimensions.get('window').width
  },
  description: {
    paddingLeft: 10
  }
});

const ToDoQuery = gql`
  query ToDoItemsQuery {
    allToDoItems {
      description
      completed
    }
  }
`

export default graphql(ToDoQuery)(ToDos)
