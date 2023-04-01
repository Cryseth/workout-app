import React, {useEffect, useState} from "react";
import {SafeAreaView, StyleSheet, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import ExerciseScreen from "./screens/Exercise";
import ProfileScreen from "./screens/ProfileScreen";
import colors from "./config/colors";

const Tab = createBottomTabNavigator();

const App = () => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
                "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
            });
            setIsReady(true);
        };
        loadFonts();
    }, []);

    if (!isReady) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <NavigationContainer>
                    <Tab.Navigator
                        initialRouteName="Home"
                        tabBarOptions={{
                            activeTintColor: colors.primary,
                            inactiveTintColor: colors.medium,
                            showLabel: false,
                        }}
                    >
                        <Tab.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{
                                tabBarIcon: ({color, size}) => (
                                    <MaterialCommunityIcons
                                        name="home"
                                        color={color}
                                        size={size}
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Exercise"
                            component={ExerciseScreen}
                            options={{
                                tabBarIcon: ({color, size}) => (
                                    <MaterialCommunityIcons
                                        name="dumbbell"
                                        color={color}
                                        size={size}
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Profile"
                            component={ProfileScreen}
                            options={{
                                tabBarIcon: ({color, size}) => (
                                    <MaterialCommunityIcons
                                        name="account"
                                        color={color}
                                        size={size}
                                    />
                                ),
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet
