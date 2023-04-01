import {Image, Picker, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import deadlift from "../assets/deadlift.png";

const WorkoutScreen = ({navigation}) => {
    const workoutPlans = [
        {
            name: "Marius-Styrke-plan",
            exercises: [
                {
                    img: deadlift,
                    video: "https://www.youtube.com/watch?v=vRKDvt695pg",
                    description: "Step 1: bla bla \n Step 2: more bla bla"
                }
            ]
        },
        {
            name: "Marius-endurance-plan",
            exercises: [
                {
                    img: deadlift,
                    video: "https://www.youtube.com/watch?v=vRKDvt695pg",
                    description: "Step 1: bla bla \n Step 2: more bla bla"
                }
            ]
        },
        {
            name: "Marius-allAround-plan",
            exercises: [
                {
                    img: deadlift,
                    video: "https://www.youtube.com/watch?v=vRKDvt695pg",
                    description: "Step 1: bla bla \n Step 2: more bla bla"
                }
            ]
        }
    ];
    const [selectedPlan, setSelectedPlan] = React.useState(workoutPlans[0]);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.menu}>
                <Picker
                    selectedValue={selectedPlan}
                    onValueChange={(itemValue) => setSelectedPlan(itemValue)}
                >
                    {workoutPlans.map((plan) => (
                        <Picker.Item key={plan.name} label={plan.name} value={plan}/>
                    ))}
                </Picker>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {selectedPlan.exercises.map((exercise) => (
                    <Pressable
                        key={exercise.description}
                        onPress={() => navigation.navigate("Exercise", {workoutplan: selectedPlan})}
                        style={styles.exerciseContainer}
                    >
                        <Text style={styles.exerciseName}>{selectedPlan.name}</Text>
                        <Image source={exercise.img} style={styles.exerciseImage}/>
                    </Pressable>
                ))}

            </ScrollView>
            <View style={styles.footer}/>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center"
    },
    menu: {
        flex: 1,
        backgroundColor: "#F0F0F0",
        alignItems: "center",
        justifyContent: "center"
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "stretch"
    },
    exerciseContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: "red",
        alignItems: "stretch",
        padding: 10,
        margin: 10
    },
    exerciseName: {
        fontWeight: "bold",
        marginBottom: 10
    },
    exerciseImage: {
        flex: 1,
        resizeMode: "cover"
    },
    footer: {
        flex: 1
    }
});

export default WorkoutScreen;
