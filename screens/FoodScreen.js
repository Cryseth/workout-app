import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import * as React from "react";
import TopMenu from "../components/TopMenu"
import mediterranean from "../assets/mediterraneanDiet.png"
import FoodPlan from "./FoodPlan";
import paneggs from "../assets/SheetPanEggsVeggies.png"

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

function FoodScreen({navigation}) {
    const handleNavigate = React.useCallback((foodPlan) => {
        navigation.navigate("FoodPlan", {foodlist: foodPlan.foodplan});
    }, [navigation]);

    const renderItem = React.useCallback(({item}) => (
        <Pressable onPress={() => handleNavigate(item)}>
            <Text>{item.name}</Text>
            <Image source={item.image} style={styles.image} resizeMode="cover"/>
        </Pressable>
    ), [handleNavigate]);

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={dropdown}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                contentContainerStyle={styles.body}
            />
            <View style={styles.topbarView}>
                <TopMenu/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    topbarView: {
        flexDirection: "row",
    },
    body: {
        paddingBottom: 20,
    },
    image: {
        height: 150,
        resizeMode: "contain",
        width: null,
    },
});

