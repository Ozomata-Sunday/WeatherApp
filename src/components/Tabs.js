import React from 'react';
import CurrentWeather from '../Screens/CurrentWeather'
import UpcomingWeather from '../Screens/UpComingWeather'
import City from '../Screens/City'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'
const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: 'tomato',
            tabBarInActiveTintColor: 'grey',
            tabBarStyle: {
                backgroundColor: 'white',
            },
            headerStyle: {
                backgroundColor: 'lightblue',
            },
            headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
                color: 'red'
            }
        }}>
            <Tab.Screen
                name={'Current'}
                options={{
                    tabBarIcon: ({ focused }) => <Feather name={'droplet'} size={25}
                        color={focused ? 'red' : 'black'} />
                }}>
                {() => <CurrentWeather weatherData={weather.list[0]} />}
            </Tab.Screen>
            <Tab.Screen
                name={'Upcoming'}
                options={{
                    tabBarIcon: ({ focused }) => <Feather name={'clock'} size={25}
                        color={focused ? 'red' : 'black'} />
                }}
            >
                {() => <UpcomingWeather weatherData={weather.list[0]} />}
            </Tab.Screen>
            <Tab.Screen
                name={'City'}
                options={{
                    tabBarIcon: ({ focused }) => <Feather name={'home'} size={25}
                        color={focused ? 'red' : 'black'} />
                }}
            >
                {() => <City weatherData={weather.list[0]} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs;