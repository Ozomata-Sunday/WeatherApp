import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import Tabs from "./src/components/Tabs";
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from "@env"


const App = () => {
  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])

  const fetchWeatherData = async () => {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`)
    const data = await Response.json()

  }
  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (location) {
    //console.log(location)
  }

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