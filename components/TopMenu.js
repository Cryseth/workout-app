import React from "react";
import {StyleSheet, View, TouchableOpacity, Text} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

const TopMenu = ({options, selected}) => {
    const navigateToScreen = (screenName) => {
        options.navigate(screenName);
    };

    return (
        <View style={styles.topMenu}>
            <TouchableOpacity
                style={[
                    styles.menuItem,
                    selected === "Home" ? styles.selectedItem : null,
                ]}
                onPress={() => navigateToScreen("Home")}
            >
                <FontAwesome name="home" size={25} color="white"/>
                <Text style={styles.menuItemText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.menuItem,
                    selected === "PtScreen" ? styles.selectedItem : null,
                ]}
                onPress={() => navigateToScreen("PtScreen")}
            >
                <FontAwesome name="user" size={25} color="white"/>
                <Text style={styles.menuItemText}>PT</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.menuItem,
                    selected === "Sentere" ? styles.selectedItem : null,
                ]}
                onPress={() => navigateToScreen("Sentere")}
            >
                <FontAwesome name="map-marker" size={25} color="white"/>
                <Text style={styles.menuItemText}>Sentere</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.menuItem,
                    selected === "Contact" ? styles.selectedItem : null,
                ]}
                onPress={() => navigateToScreen("Contact")}
            >
                <FontAwesome name="envelope" size={25} color="white"/>
                <Text style={styles.menuItemText}>Contact</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    topMenu: {
        flexDirection: "row",
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100%",
    },
    menuItem: {
        alignItems: "center",
    },
    menuItemText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        marginTop: 5,
    },
    selectedItem: {
        borderBottomWidth: 3,
        borderBottomColor: "white",
    },
});

export default TopMenu;
