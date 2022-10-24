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
                                <Text style={styles.menyKnappTekst}
                                      adjustsFontSizeToFit={true}>
                                    {foodItem.name}
                                </Text>
                                <Image source={foodItem.image}/>
                            </View>
                        </Pressable>))}
                </ScrollView>
            </View>
            <TopMenu/>
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
        flex: 20,
    },
});
