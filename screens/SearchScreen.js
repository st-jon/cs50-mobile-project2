import React from 'react'
import { FlatList, TextInput, Text, ScrollView, View, StyleSheet } from "react-native"

import Row from '../Row'

export default class SearchScreen extends React.Component {
  state = {
    search: "",
    data: []
  }
  static navigationOptions = {
    headerTitle: 'Home',
  }


  getMoviesFromApiAsync = () => {
    return fetch(`https://www.omdbapi.com/?apikey=a0a882ab&s=${this.state.search}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson.Search})
      })
      .catch((error) => {
        console.error(error);
      })    
  }

  handleSearch = (search) => {
    this.setState({search}, this.getMoviesFromApiAsync)
  }


  render() {
    console.log(this.state.data)
    return (
      <ScrollView style={styles.container}>
        <TextInput
          style = {styles.input}
          placeholder = "Search..."
          value = {this.state.search}
          onChangeText = {this.handleSearch}
        />
        <FlatList 
          keyExtractor = {(item, index) => item.key}
          renderItem = {({ item }) => <Row {...item} />}
          data = {this.state.data}
        /> 
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
  selectors: {
    
  }
})