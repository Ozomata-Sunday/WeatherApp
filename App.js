import React from "react"
import { View, StyleSheet } from 'react-native'
import CurrentWeather from "./src/Screens/CurrentWeather"
import UpComingWeather from "./src/Screens/UpComingWeather"
import City from "./src/Screens/City"
import { NavigationContainer } from '@react-navigation/native'

function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <CurrentWeather />
      </View>
    </NavigationContainer> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})

export default App
