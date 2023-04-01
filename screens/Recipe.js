import {Image, StyleSheet, Text, View} from "react-native";
import React, {memo} from "react";

const Recipe = ({route}) => {
    const {recipe} = route.params;

    return (
        <View style={styles.mainContainer}>
            <View style={styles.instruction}>
                <Text style={styles.instructionText}>{recipe.instructions}</Text>
            </View>
            <Image source={recipe.image} style={styles.image}/>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    instruction: {
        flex: 1,
    },
    instructionText: {
        fontSize: 18,
        lineHeight: 24,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    image: {
        flex: 2,
        resizeMode: "cover",
        width: "100%",
    }
});

export default memo(Recipe);
