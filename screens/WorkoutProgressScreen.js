import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {VictoryChart, VictoryLine, VictoryAxis, VictoryLegend} from 'victory-native';
import moment from 'moment';

const WorkoutProgress = () => {
    const [workoutProgressData, setWorkoutProgressData] = useState([]);

    useEffect(() => {
        // TODO: Replace with your data source
        const calendar = moment();
        const workoutProgressList = [];

        // Generate some fake workout progress data for the past week
        for (let i = 0; i < 7; i++) {
            calendar.subtract(1, 'day');
            const timestamp = calendar.valueOf();
            const weight = Math.floor(Math.random() * (70 - 60 + 1) + 60);
            const repetitions = Math.floor(Math.random() * (15 - 5 + 1) + 5);
            const distance = Math.floor(Math.random() * (10000 - 5000 + 1) + 5000);

            workoutProgressList.push({
                weight,
                repetitions,
                distance,
                timestamp,
            });
        }

        setWorkoutProgressData(workoutProgressList);
    }, []);

    const formatTimestamp = (timestamp) => {
        return moment(timestamp).format('MM/DD');
    };

    const renderLineChart = () => {
        return (
            <VictoryChart height={250} width={350}>
                <VictoryLegend
                    x={50}
                    y={5}
                    orientation="horizontal"
                    gutter={20}
                    style={{border: {stroke: 'black'}, title: {fontSize: 10}}}
                    data={[
                        {name: 'Weight', symbol: {fill: 'blue'}},
                        {name: 'Repetitions', symbol: {fill: 'red'}},
                        {name: 'Distance', symbol: {fill: 'green'}},
                    ]}
                />
                <VictoryAxis tickFormat={(t) => formatTimestamp(t)}/>
                <VictoryAxis dependentAxis/>
                <VictoryLine
                    data={workoutProgressData.map((item) => ({
                        x: item.timestamp,
                        y: item.weight,
                    }))}
                    style={{data: {stroke: 'blue'}}}
                />
                <VictoryLine
                    data={workoutProgressData.map((item) => ({
                        x: item.timestamp,
                        y: item.repetitions,
                    }))}
                    style={{data: {stroke: 'red'}}}
                />
                <VictoryLine
                    data={workoutProgressData.map((item) => ({
                        x: item.timestamp,
                        y: item.distance,
                    }))}
                    style={{data: {stroke: 'green'}}}
                />
            </VictoryChart>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Workout Progress</Text>
            {renderLineChart()}
        </View>
    );
};

const WorkoutProgressScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <WorkoutProgress/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default WorkoutProgressScreen;
