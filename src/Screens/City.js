import React from "react";
import { SafeAreaView, Text, StyleSheet, StatusBar, ImageBackground, View } from 'react-native'
import moment from "moment";

import IconText from "../components/IconText";

const City = ({ weatherData }) => {
    const { cityName, cityText, popularWrapper, rowLayout, populationText, riseSetText, riseSetWrapper, countryName } = styles
    const { name, country, population, sunrise, sunset } = weatherData
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/city-background.jpg')} style={styles.imageLayout}>
                <Text style={[cityName, cityText]}>{name}</Text>
                <Text style={[countryName, cityText]}>{country}</Text>
                <View style={[popularWrapper, rowLayout]}>
                    <IconText
                        iconName={'user'}
                        iconColor={'red'}
                        bodyTextStyles={populationText}
                        bodyText={`population: ${population}`}
                    />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText
                        iconName={'sunrise'}
                        iconColor={'white'}
                        bodyTextStyles={riseSetText}
                        bodyText={moment(sunrise).format('h:mm:ss a')}
                    />
                    <IconText
                        iconName={'sunset'}
                        iconColor={'white'}
                        bodyTextStyles={riseSetText}
                        bodyText={moment(sunset).format('h:mm:ss a')}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageLayout: {
        flex: 1
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: "bold",
        color: 'white'
    },
    cityName: {
        fontSize: 40
    },
    countryName: {
        fontSize: 30
    },
    popularWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: "red",
        fontWeight: "bold"
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        marginLeft: 7.5,
        color: "red",
        fontWeight: "bold"
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: "center"
    }
})

export default City;