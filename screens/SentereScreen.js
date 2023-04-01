import {StyleSheet, View} from "react-native";
import MapView, {Marker} from "react-native-maps";
import React from "react";

const SentereScreen = ({route, navigation}) => {
    const initialRegion = {
        latitude: 59.926902,
        longitude: 10.728923,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    return (
        <View style={styles.mainContainer}>
            <MapView style={styles.map} initialRegion={initialRegion}>
                <Marker
                    coordinate={{latitude: 59.926902, longitude: 10.728923}}
                    pinColor={"green"}
                    onPress={() => console.log("Marker pressed")}
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    map: {
        flex: 1,
    },
});

export default SentereScreen;
