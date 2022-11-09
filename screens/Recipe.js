import {Image, StyleSheet, Text, View} from "react-native";
import * as React from "react";

function Recipe({route, navigation}) {
    const {recipe} = route.params;
    return (<View style={styles.mainContainer}>
        <View style={styles.instuction}>
            <Text> {recipe.instructions} </Text>
        </View>
        <View style={styles.image}>
            <Image source={recipe.image} style={styles.image}/>
        </View>
    </View>);
}

export default Recipe;


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    instuction: {
        flex: 1,
        borderColor: "red",
        borderWidth: 2,
    },
    image: {
        flex: 2,
        resizeMode: "cover",
        width: null,
        height: 200,
    }
});
