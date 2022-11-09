import {Image, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import * as React from "react";
import TopMenu from "../components/TopMenu"
import SelectList from "react-native-dropdown-select-list/index";
import mediterranean from "../assets/mediterraneanDiet.png"
import FoodPlan from "./FoodPlan";
import paneggs from "../assets/SheetPanEggsVeggies.png"

function FoodScreen({route, navigation}) {
    const mediterraneanDiet = [{
        name: "SheetPanEggsVeggies",
        image: paneggs,
        instructions: "instructions",
        description: "easy to make"
    }, {
        name: "fiske rett",
        image: mediterranean
        , instructions: "instructions", description: "easy to make"
    }, {name: "fiske rett", image: mediterranean, instructions: "instructions", description: "easy to make"}, {
        name: "fiske rett",
        image: mediterranean,
        instructions: "instructions", description: "easy to make"
    }, {
        name: "morestuff",
        image: mediterranean
        , instructions: "instructions", description: "easy to make"
    }]
    const dropdown = [{name: "Marius mat plan", image: mediterranean, foodplan: mediterraneanDiet}, {
        name: "mediterranean",
        image: mediterranean, foodplan: mediterraneanDiet
    }, {name: "low carb", image: mediterranean, foodplan: mediterraneanDiet}, {
        name: "low carb2",
        image: paneggs,
        foodplan: mediterraneanDiet
    }]

    return (
        <View style={styles.mainContainer}>
            <View style={styles.body}>
                <ScrollView>
                    {dropdown.map((mealPlan) => (
                        <Pressable key={dropdown.indexOf(mealPlan)}
                                   onPress={() => navigation.navigate("FoodPlan", {foodlist: mealPlan.foodplan})}
                                   style={styles.foodItem}>
                            <Text
                                adjustsFontSizeToFit={true} style={styles.planText}>
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
    },

    body: {
        flex: 10
    },

    foodItem: {
        flex: 5,
    },
    image: {
        flex: 4,
        height: 150,
        resizeMode: "contain",
        width: null,
    },
    planText: {
        flex: 1,
        fontStyle: "italic",
        fontSize: 20,
        paddingLeft: 5,
        alignContent: "center",
        backgroundColor: "black",
        color: "red"
    }
});

