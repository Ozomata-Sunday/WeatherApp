import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import Tabs from "./src/components/Tabs";
import { useGetWeather } from "./src/Screens/Hooks/useGetWeather";


const App = () => {
  const [loading, error, weather] = useGetWeather()
 console.log(loading, error, weather)

  if (loading) {
    return (
      <View style={style.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }


  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})
export default App;