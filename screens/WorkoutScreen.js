import {Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import TopMenu from "../components/TopMenu";
import deadlift from "../assets/deadlift.png"
import SelectList from "react-native-dropdown-select-list/index";
import deadliftVid from "../assets/Deadlift.mp4"
import React from "react";

function WorkoutScreen({route, navigation}) {
    const dropdown = ["Marius-Styrke-plan", "Marius-endurance-plan", "Marius-allAround-plan"]
    const [selected, setSelected] = React.useState("")
    const styrkeplan = [{
        ovelse1: {
            img: deadlift,
            video: "https://www.youtube.com/watch?v=vRKDvt695pg",
            desctiption: "steg1:bla bla \n steg2:mer bla bla"
        }
    }]
    const styrkeplanner = [{name: "Marius-Styrke-plan", plan: styrkeplan}, {
        name: "Marius-endurance-plan",
        plan: styrkeplan
    }, {name: "Marius-allAround-plan", plan: styrkeplan}]
    return (<View style={styles.mainContainer}>
        <View style={styles.body}>
            <View>
                <SelectList setSelected={setSelected} data={dropdown} onSelect={() => setSelected}/>
            </View>
            <ScrollView>
                {styrkeplanner.map((plan) => (
                    <Pressable onPress={() => navigation.navigate("Exercise", {workoutplan: plan.plan})}
                               style={styles.videoelement}>
                        <View style={styles.videoelement}>
                            <Text>{plan.name}</Text>
                            <Image source={deadlift} style={styles.videoelement}/>
                        </View>
                    </Pressable>))}
            </ScrollView>
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
        flex: 12,
    },

    videoelement: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'red',
        alignContent: "stretch",
        resizeMode: "cover",
        width: null,
        height: 300
    }
});
