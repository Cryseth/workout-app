import {Dimensions, StyleSheet, View} from "react-native";
import MapView from "react-native-maps";
import * as React from "react";

function SentereScreen({route, navigation}) {
    return (<View style={styles.mainContainer}>
        <MapView style={styles.map}/>
    </View>);
}

export default SentereScreen;


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

});
