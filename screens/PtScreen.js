import * as React from "react";
import {Button, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import SelectList from "react-native-dropdown-select-list/index";
import ptImage from "../assets/ptMarius.png";
import TopMenu from "../components/TopMenu";

const LEVELS = {
    "level 1": [
        {name: "level 1 marius 1", age: "22", expertise: "styrke", image: ptImage},
        {name: "level 1 marius 2", age: "22", expertise: "styrke", image: ptImage},
        {name: "level 1 marius 3", age: "22", expertise: "styrke", image: ptImage},
        {name: "level 1 marius 4", age: "22", expertise: "styrke", image: ptImage},
    ],
    "level 2": [
        {name: "level 2 marius 1", age: "22", expertise: "styrke", image: ptImage},
        {name: "level 2 marius 2", age: "22", expertise: "styrke", image: ptImage},
        {name: "level 2 marius 3", age: "22", expertise: "styrke", image: ptImage},
        {name: "level 2 marius 4", age: "22", expertise: "styrke", image: ptImage},
    ],
    "level 3": [
        {name: "level 3 marius 1", age: "22", expertise: "styrke", image: ptImage},
        {name: "level 3 marius 2", age: "22", expertise: "styrke", image: ptImage},
        {name: "level 3 marius 3", age: "22", expertise: "styrke", image: ptImage},
        {name: "level 3 marius 4", age: "22", expertise: "styrke", image: ptImage},
    ],
};

function PtScreen({route, navigation}) {
    const dropdown = Object.keys(LEVELS);
    const [selected, setSelected] = React.useState(dropdown[0]);

    return (
        <View style={styles.mainContainer}>
            <Text>Velg nivå</Text>
            <View style={styles.pts}>
                <SelectList setSelected={setSelected} data={dropdown} search={false} placeholder={dropdown[0]}/>
                <Button title={"liste over sentere"} onPress={() => navigation.navigate("Sentere")}/>
                <ScrollView>
                    {LEVELS[selected].map((pt) => (
                        <View key={pt.name} style={styles.ptListItems}>
                            <Text style={styles.text}>
                                navn : {pt.name} {"\n"}
                                alder: {pt.age} {"\n"}
                                ekspertise: {pt.expertise} {"\n"}
                                nivå: {selected} {"\n"}
                            </Text>
                            <Image source={pt.image} style={styles.image}/>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.topBar}>
                <TopMenu options={navigation}/>
            </View>
        </View>
    );
}

export default PtScreen;
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        flex: 3,
        resizeMode: "stretch",
        width: "100%"
    },
    PtTopHeader: {
        flex: 1,
        backgroundColor: "green",
        justifyContent: "center",
        alignContent: "center"
    },

    pts: {
        flex: 10
    },

    ptListItems: {
        flex: 1,
        flexDirection: "column",
        borderWidth: 5,

    },
    text: {
        flex: 1,
        borderColor: "blue",
        borderWidth: 5,
        color: "red",
        fontSize: 18,
        fontStyle: "italic",
        paddingLeft: 5,
    },
    topBar: {
        flex: 1,
        flexDirection: "row",
        height: "100%",
        width: "100%",
        justifyContent: "space-evenly",
        backgroundColor: "red",
    },
});
