import {Pressable, StyleSheet, Text, View} from "react-native";
import * as React from "react";
import {useNavigation} from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const menuOptions = ["hjem", "PT-er", "checking", "workouts", "Mat"]

function TopMenu() {
    const navigation = useNavigation()
    return (
        <View style={styles.topBar}>
            {menuOptions.map((mOption) => (
                <Pressable key={menuOptions.indexOf(mOption)}
                           onPress={() => navigation.navigate(mOption)}>
                    <MaterialCommunityIcons name="weight" size={24} color="black"/>
                    <View style={styles.menyknapp}>
                        <Text style={styles.menyKnappTekst}
                              adjustsFontSizeToFit={true}>
                            {mOption}
                        </Text>
                    </View>
                </Pressable>
            ))}
        </View>)
}


export default TopMenu;

const styles = StyleSheet.create({
    topBar: {
        flex: 1,
        flexDirection: "row",
        height: "100%",
        width: "100%",
        justifyContent: "space-evenly",
        backgroundColor: "red",
        paddingEnd: 5,
        marginBottom: 5
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
        justifyContent: "center"
    },
});
