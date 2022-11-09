import TopMenu from "../components/TopMenu";
import {View, Button, StyleSheet, Text, Pressable, Image, ScrollView} from 'react-native';
import React from "react";
import WebView from "react-native-webview";

function FoodPlan({route, navigation}) {
    const {foodlist} = route.params;
    return (
        <View style={styles.mainContainer}>
            <View style={styles.mainView}>
                <ScrollView style={styles.mainView}>
                    {foodlist.map((foodItem) => (
                        <Pressable style={styles.mainView} key={foodlist.indexOf(foodItem)}
                                   onPress={() => navigation.navigate("Recipe", {recipe: foodItem})}>
                            <View style={styles.foodplanName}>
                                <Text style={styles.foodplanName} adjustsFontSizeToFit={true}>
                                    {foodItem.name}
                                </Text>
                            </View>
                            <View style={styles.decription}>
                                <Text style={styles.decription}>
                                    {foodItem.description}
                                </Text>
                            </View>
                            <View style={styles.mainView}>
                                <Image source={foodItem.image} style={styles.bilde}/>
                            </View>
                        </Pressable>))}
                </ScrollView>
            </View>
            <View style={styles.topBar}>
                <TopMenu/>
            </View>
        </View>
    )
}


export default FoodPlan;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    mainView: {
        flex: 10,
        borderColor: "red",
    },
    decription: {
        flex: 10,
        borderColor: "blue",
        height: 60,
        borderWidth: 5,
    },
    bilde: {
        flex: 5,
        paddingRight: 100,
        resizeMode: "cover",
        height: 350,
        width: null,
    },
    foodplanName: {
        flex: 8,
        borderColor: "red",
        borderWidth: 5,
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
});
