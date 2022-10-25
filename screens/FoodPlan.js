import TopMenu from "../components/TopMenu";
import {View, Button, StyleSheet, Text, Pressable, Image, ScrollView} from 'react-native';
import React from "react";
import WebView from "react-native-webview";

function FoodPlan({route, navigation}) {
    const {foodlist} = route.params;
    return (
        <View style={styles.mainContainer}>
            <View style={styles.body}>
                <ScrollView>
                    {foodlist.map((foodItem) => (
                        <Pressable key={foodlist.indexOf(foodItem)}>
                            <View style={styles.menyknapp}>
                                <View style={styles.body}>
                                    <Text style={styles.menyKnappTekst}
                                          adjustsFontSizeToFit={true}>
                                        {foodItem.name}
                                    </Text>
                                </View>
                                <View style={styles.bilde}>
                                    <Image source={foodItem.image} resizeMode={"contain"}/>
                                </View>
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
    meny: {
        flex: 1,
    },
    body: {
        flex: 10,
    },
    bilde: {
        flex: 1,
        margin: 10,
        padding: 10,
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
