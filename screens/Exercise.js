import TopMenu from "../components/TopMenu";
import {View, StyleSheet, ScrollView, Text, Dimensions, Button} from 'react-native';
import React from "react";
import {Video} from "expo-av";
import deadlift from "../assets/Deadlift.mp4"

function Exercise({route, navigation}) {
    const {workoutplan} = route.params;
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <View style={styles.mainContainer}>
            <View style={styles.body}>
                <ScrollView>
                    {workoutplan.map((item) => (
                        Object.entries(item).map((item2) => (
                            <View style={styles.meny}>
                                <View style={styles.video}>
                                    <View style={styles.meny}>
                                        <Text>{item2.desctiption}</Text>
                                    </View>
                                    <Video
                                        ref={video}
                                        style={styles.video}
                                        source={{
                                            uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                                        }}
                                        useNativeControls
                                        isLooping
                                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                                    />
                                </View>
                            </View>))))}
                </ScrollView>
            </View>
            <View style={styles.mainContainer}>
                <TopMenu/>
            </View>

        </View>
    )
}


export default Exercise;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    meny: {
        flex: 1,
    },
    body: {
        flex: 10,
    },
    video: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: 300
    },
    backgroundVideo: {
        height: 300,
        width: 300,
    },
});
