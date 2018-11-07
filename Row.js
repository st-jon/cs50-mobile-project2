import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';

const styles = StyleSheet.create({
  row: { 
    padding: 20,
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold', 
    flex: 1
  },
  view: {
    paddingLeft: 10,
    flexDirection: 'column',
  }
  
});

const Row = props => (
  <TouchableOpacity 
    style={styles.row}
    onPress={() => props.onSelectMovie(props)}>
    <Image
      style={{width: 40, height: 40}}
      source={{uri: props.Poster}}
    />
    <View style={styles.view}>
      <Text style={styles.text}>{props.Title}</Text>
      <Text>{props.Year}</Text>    
    </View>    
  </TouchableOpacity>
)

export default Row