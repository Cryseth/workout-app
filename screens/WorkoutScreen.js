import {Dimensions, Image, Pressable, StyleSheet, Text, View} from "react-native";
import TopMenu from "../components/TopMenu";
import deadlift from "../assets/deadlift.png"
import SelectList from "react-native-dropdown-select-list/index";
import React from "react";

function WorkoutScreen({route, navigation}) {
    const dropdown = ["workout1", "workout2", "workout3"]
    const [selected, setSelected] = React.useState("")
    return (<View style={styles.mainContainer}>
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
        <View style={styles.topBar}>
            <TopMenu/>
        </View>
    </View>)
}

export default WorkoutScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
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
