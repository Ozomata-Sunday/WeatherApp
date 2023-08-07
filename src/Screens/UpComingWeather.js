import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from 'react-native'
import ListItem from "../components/ListItem";

const DATA = [
  {
    dt_txt: "2023-02-18 12:00:00",
    main: {
      temp_min: 8.55,
      temp_max: 7.55
    },
    weather: [
      { main: "clear" }
    ]

  },
  {
    dt_txt: "2023-02-18 15:00:00",
    main: {
      temp_min: 8.55,
      temp_max: 7.55
    },
    weather: [
      { main: "cloud" }
    ]

  },
  {
    dt_txt: "2023-02-18 18:00:00",
    main: {
      temp_min: 8.55,
      temp_max: 7.55
    },
    weather: [
      { main: "Rain" }
    ]

  },
]



const UpComingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max} />
  )

  const { container, image} = styles
  return (
    <SafeAreaView style={container}>
      <Text>Upcoming Weather</Text>
      <ImageBackground source={require("../../assets/upcoming-background.jpg")} style={image}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    backgroundColor: "#4169e1"
  },
  image: {
    flex: 1
  }
})

export default UpComingWeather;