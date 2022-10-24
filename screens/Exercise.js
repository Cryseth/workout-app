import TopMenu from "../components/TopMenu";
import {View, Button, StyleSheet} from 'react-native';
import React from "react";
import WebView from "react-native-webview";

function Exercise({route, navigation}) {
    return (
        <View style={styles.mainContainer}>
            <TopMenu/>
            <View style={styles.body}>
                <WebView style={styles.WebViewContainer}
                         javaScriptEnabled={true}
                         domStorageEnabled={true}
                         source={{uri: 'https://www.youtube.com/watch?v=vRKDvt695pg'}}
                         allowsInlineMediaPlayback={true}
                         mediaPlaybackRequiresUserAction={true}
                />
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
});
