import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Platform, ImageBackground, View } from 'react-native';

import getImageForWeather from './utils/getImageForWeather';

import SearchInput from './components/SearchInput';

export default class App extends React.Component {
  handleChangeText = (newLocation) => {
    this.props.location = newLocation;
  }
  
  render() {
    const location = 'Paris';

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground
        source={getImageForWeather('Snow')}
        style={styles.imageContainer}
        imageStyle={styles.image}>
        <View style={styles.detailsContainer}>
          <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
          <Text style={[styles.smallText, styles.textStyle]}>Snowing</Text>
          <Text style={[styles.largeText, styles.textStyle]}>24</Text>
          <SearchInput placeholder="Search for any city"></SearchInput>
        </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},

textStyle: {
  color: 'white',
  textAlign: 'center',
  fontFamily:
    Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
},

largeText: {
  fontSize: 44,
},

smallText: {
  fontSize: 18,
},

imageContainer: {
  flex: 1,
},

image: {
  flex: 1,
  resizeMode: 'cover',
  width: null,
  height: null,
},

detailsContainer: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'rgba(0,0,0,0.2)',
  paddingHorizontal: 20,

},
});