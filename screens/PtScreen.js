import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import ptImage from "../assets/ptMarius.png";
import * as React from "react";
import TopMenu from "../components/TopMenu";
import SelectList from "react-native-dropdown-select-list/index";
import icon from "../assets/deadlift.png"

function PtScreen({route, navigation}) {
    const level1 = [{name: "level 1 marius 1", age: "22", expertise: "styrke", image: ptImage}, {
        name: "level 1 marius 2",
        age: "22",
        expertise: "styrke",
        image: ptImage
    }, {name: "level 1 marius 3", age: "22", expertise: "styrke", image: ptImage}, {
        name: "level 1 marius 4",
        age: "22",
        expertise: "styrke",
        image: ptImage
    }]
    const level2 = [{name: "level 2 marius 1", expertise: "styrke", age: "22", image: ptImage}, {
        name: "level 2 marius 2",
        age: "22",
        expertise: "styrke",
        image: ptImage
    }, {name: "level 2 marius 3", age: "22", expertise: "styrke", image: ptImage}, {
        name: "level 2 marius 4",
        age: "22",
        expertise: "styrke",
        image: ptImage
    }]
    const level3 = [{name: "level 3 marius 1", age: "22", expertise: "styrke", image: ptImage}, {
        name: "level 3 marius 2",
        age: "22",
        expertise: "styrke",
        image: ptImage
    }, {name: "level 3 marius 3", age: "22", expertise: "styrke", image: ptImage}, {
        name: "level 3 marius 4",
        age: "22",
        expertise: "styrke",
        image: ptImage
    }]
    const ptList = [{dict: {"level 1": level1, "level 2": level2, "level 3": level3}}]
    const dropdown = ["level 1", "level 2", "level 3"]
    const [selected, setSelected] = React.useState("level 1")

    return (
        <View style={styles.mainContainer}>
            <Text>Velg nivå</Text>
            <View style={styles.pts}>
                <View>
                    <SelectList setSelected={setSelected} data={dropdown}
                                search={false} placeholder={"level 1"}/>
                </View>
                <ScrollView>
                    {ptList.map((list) => list.dict[selected].map((pt) => {
                        return (
                            <View key={pt.name} style={styles.ptListItems}>
                                <Text style={styles.ptListItems}>
                                    navn : {pt.name} {"\n"}
                                    alder: {pt.age} {"\n"}
                                    ekspertise: {pt.expertise} {"\n"}
                                    nivå: {selected} {"\n"}
                                </Text>
                                <Image source={pt.image}/>
                            </View>)
                    }))}
                </ScrollView>
            </View>
            <View style={styles.topBar}>
                <TopMenu options={navigation}/>
            </View>
        </View>)
}

export default PtScreen;
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
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
