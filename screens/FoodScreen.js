import {Image, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import * as React from "react";
import TopMenu from "../components/TopMenu"
import SelectList from "react-native-dropdown-select-list/index";
import mediterranean from "../assets/mediterraneanDiet.png"
import FoodPlan from "./FoodPlan";

function FoodScreen({route, navigation}) {
    const mediterraneanDiet = [{name: "fish", image: mediterranean}, {
        name: "more stuff",
        image: mediterranean
    }, {name: "more stuff", image: mediterranean}, {name: "more stuff", image: mediterranean}, {
        name: "morestuff",
        image: mediterranean
    }]
    const dropdown = [{name: "matplan1", image: mediterranean}, {
        name: "matplan2",
        image: mediterranean
    }, {name: "matplan3", image: mediterranean}]
    return (
        <View style={styles.mainContainer}>
            <View style={styles.body}>
                <ScrollView>
                    {dropdown.map((mealPlan) => (
                        <Pressable key={dropdown.indexOf(mealPlan)}
                                   onPress={() => navigation.navigate("FoodPlan", {foodlist: mediterraneanDiet})}
                                   style={styles.foodItem}>
                            <Text
                                adjustsFontSizeToFit={true} style={styles.foodItem}>
                                {mealPlan.name}
                            </Text>
                            <Image source={mealPlan.image} style={styles.image} resizeMode={"cover"}/>
                        </Pressable>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.topbarView}>
                <TopMenu/>
            </View>
        </View>)
}

export default FoodScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    topbarView: {
        flex: 1,
        flexDirection: "row",
        paddingBottom: 10,
        marginBottom: 10
    },

    body: {
        flex: 18
    },

    foodItem: {
        flex: 1
    },
    image: {
        flex: 4
    }
});

