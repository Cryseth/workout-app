import TopMenu from "../components/TopMenu";
import {View, Button, StyleSheet} from 'react-native';
import React from "react";
import WebView from "react-native-webview";

function Exercise({route, navigation}) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.body}>
                <WebView style={styles.WebViewContainer}
                         javaScriptEnabled={true}
                         domStorageEnabled={true}
                         source={{uri: 'https://www.youtube.com/watch?v=vRKDvt695pg'}}
                         allowsInlineMediaPlayback={true}
                         mediaPlaybackRequiresUserAction={true}
                />
            </View>
            <View>
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
        flex: 20,
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
});
