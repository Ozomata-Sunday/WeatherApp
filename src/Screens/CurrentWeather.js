import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { WeatherType } from '../utilities/WeatherType';

function CurrentWeather({ weatherData }) {
  const { wrapper, container, tempStyle, feels, highLowWrapper, highLow, bodyWrapper, description, message } = styles

  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData

  const weatherCondition = weather[0]?.main

  console.log(weatherData)

  return (
    <SafeAreaView style={[wrapper, { backgroundColor: WeatherType[weatherCondition]?.backgroundColor }]}>
      <View style={container}>
        <Feather name={WeatherType[weatherCondition]?.icon} size={100} color="black" />
        <Text style={tempStyle}>{temp}</Text>
        <Text style={feels}>{`Feels like ${feels_like}° `}</Text>
        <RowText messageOne={`High: ${temp_max} °`}
          messageTwo={`Low: ${temp_min}`}
          containerStyle={highLowWrapper}
          messageOneStyle={highLow} messageTwoStyle={highLow}
        />
      </View>
      <RowText messageOne={weather[0]?.description}
        messageTwo={WeatherType[weatherCondition]?.message}
        containerStyle={bodyWrapper}
        messageOneStyle={description} messageTwoStyle={message}
      />
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },
  tempStyle: {
    color: "black",
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: "black"
  },
  highLow: {
    color: "black",
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: "row",
    gap: 10
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 43
  },
  message: {
    fontSize: 25
  }
})
export default CurrentWeather