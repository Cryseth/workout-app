import {Dimensions, Image, Pressable, StyleSheet, Text, View} from "react-native";
import TopMenu from "../components/TopMenu";
import deadlift from "../assets/deadlift.png"
import SelectList from "react-native-dropdown-select-list/index";
import React from "react";

function WorkoutScreen({route, navigation}) {
    const dropdown = ["workout1", "workout2", "workout3"]
    const [selected, setSelected] = React.useState("")
    return (<View style={styles.mainContainer}>
        <View style={styles.meny}>
            <TopMenu/>
        </View>
        <View style={styles.body}>
            <View>
                <SelectList setSelected={setSelected} data={dropdown} onSelect={() => setSelected}/>
            </View>
            <View style={styles.videoelement}>
                <Pressable onPress={() => navigation.navigate("Exercise")} style={styles.videoelement}>
                    <View style={styles.videoelement}>
                        <Text>test</Text>
                        <Image source={deadlift} style={styles.videoelement}/>
                    </View>
                </Pressable>
            </View>
            <View style={styles.videoelement}></View>
        </View>
    </View>)
}

export default WorkoutScreen;

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

    videoelement: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'red',
        justifyContent: "center",
        alignContent: "stretch"
    }
});
