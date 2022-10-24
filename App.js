import * as React from 'react';
import {StyleSheet, View, Button, Text, Pressable, Dimensions, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapView from "react-native-maps";
import FoodScreen from "./screens/FoodScreen"
import PtScreen from "./screens/PtScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import SentereScreen from "./screens/SentereScreen";
import TopMenu from "./components/TopMenu";
import Exercise from "./screens/Exercise";
import FoodPlan from "./screens/FoodPlan";

global.menuOptions = ["hjem", "Sentere", "workouts", "PT-er", "Mat"]

export default function App() {
    const Stack = createNativeStackNavigator();

    const HomeScreen = ({route, navigation}) => {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.mainscreen}>
                    <View style={styles.midsection}>
                        <View style={styles.senter}>
                            <Text style={styles.text}>
                                senter1
                            </Text>
                        </View>
                        <View style={styles.news}>
                            <Text style={styles.text}>
                                news
                            </Text>
                        </View>


                        <View style={styles.senter}>

                        </View>
                        <View style={styles.bottom}>
                        </View>
                    </View>
                </View>

                <View style={styles.topBar}>
                    <TopMenu/>
                </View>
            </View>
        );
    };


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"hjem"}
                              component={HomeScreen}/>
                <Stack.Screen name="Sentere" component={SentereScreen}/>
                <Stack.Screen name="workouts" component={WorkoutScreen}/>
                <Stack.Screen name="PT-er" component={PtScreen}/>
                <Stack.Screen name="Mat" component={FoodScreen}/>
                <Stack.Screen name="Exercise" component={Exercise}/>
                <Stack.Screen name="FoodPlan" component={FoodPlan}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
//legge sentere + pt sammen
// news + upcoming workouts på hjem
//checkin page
//nærmeste sentere på hjem -> til pt-er som jobber på senter man klikker på
//meg/profil page opp i høyre
//chat med pt
//legge til lagring av reps/vekt på både profil og workouts(om du har lagt inn data på workout fra før)
//filtering/tags av allergier,hva man liker, dieter på mat siden
//custom mealplan fra pt

const styles = StyleSheet.create({
        mainContainer: {
            flex: 1,
            justifyContent: 'center',
        },
        topBar: {
            flex: 1,
            flexDirection: "row",
            height: "100%",
            width: "100%",
            justifyContent: "space-evenly",
            backgroundColor: "red",
            paddingBottom: 10,
            marginBottom: 10
        },

        mainscreen: {
            flex: 10,
            flexDirection: "row"
        },

        menyknapp: {
            flex: 1,
            borderWidth: 2,
            borderColor: 'red',
            padding: 5,
            margin: 2,
        },

        menyKnappTekst: {
            flex: 1,
        },

        map: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        },

        PtTopHeader: {
            flex: 1,
            backgroundColor: "green",
            justifyContent: "center",
            alignContent: "center"
        },

        pts: {
            flex: 10
        },
        senter: {
            flex: 1,
            borderRightColor: "red",
            borderWidth: 2,
            justifyContent: "center",
            flexDirection: "column"
        },
        news: {
            flex: 1,
            borderColor: "red",
            borderRightWidth: 2
        },

        text: {
            alignContent: "center",
            justifyContent: "center"
        },

        bottom: {
            flex: 16,
        },

        midsection: {
            flex: 1,
            borderColor: "red"
        }
    }
);
