import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getWeekDates} from '../utils/dateUtils';
import {Ionicons} from '@expo/vector-icons';
import styles from "react-native-webview/lib/WebView.styles";

const FoodPlan = ({navigation}) => {
    const [meals, setMeals] = useState({});
    const [weekDates, setWeekDates] = useState([]);
    const [currentWeekIndex, setCurrentWeekIndex] = useState(0);

    const loadMeals = async () => {
        try {
            const storedMeals = await AsyncStorage.getItem('@meals');
            if (storedMeals !== null) {
                setMeals(JSON.parse(storedMeals));
            }
        } catch (error) {
            console.log('Error loading meals:', error);
        }
    };

    const saveMeals = async (newMeals) => {
        try {
            await AsyncStorage.setItem('@meals', JSON.stringify(newMeals));
            setMeals(newMeals);
        } catch (error) {
            console.log('Error saving meals:', error);
        }
    };

    const getWeekMeals = () => {
        const weekMeals = {};
        weekDates.forEach((date) => {
            weekMeals[date] = meals[date] ? meals[date] : [];
        });
        return weekMeals;
    };

    const setWeekMeal = (date, meal) => {
        const newMeals = {...meals};
        if (!newMeals[date]) {
            newMeals[date] = [];
        }
        newMeals[date].push(meal);
        saveMeals(newMeals);
    };

    const removeWeekMeal = (date, index) => {
        const newMeals = {...meals};
        if (newMeals[date]) {
            newMeals[date].splice(index, 1);
            saveMeals(newMeals);
        }
    };

    const handleMealPress = (date, index) => {
        Alert.alert(
            'Delete Meal',
            'Are you sure you want to delete this meal?',
            [
                {text: 'Cancel', style: 'cancel'},
                {text: 'OK', onPress: () => removeWeekMeal(date, index)},
            ],
            {cancelable: false},
        );
    };

    useEffect(() => {
        loadMeals();
        const dates = getWeekDates(new Date());
        setWeekDates(dates);
        setCurrentWeekIndex(0);
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="ios-arrow-back" size={28} color={colors.white}/>
                </TouchableOpacity>
                <Text style={styles.title}>{foodPlan.name}</Text>
                <TouchableOpacity onPress={handleShare}>
                    <Ionicons name="ios-share" size={28} color={colors.white}/>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                {foodPlan.meals.map((meal, index) => (
                    <View key={index} style={styles.mealContainer}>
                        <Text style={styles.mealTitle}>{meal.name}</Text>
                        <Text style={styles.mealDescription}>{meal.description}</Text>
                        <View style={styles.mealItemsContainer}>
                            {meal.items.map((item, index) => (
                                <View key={index} style={styles.mealItemContainer}>
                                    <Text style={styles.mealItemTitle}>{item.name}</Text>
                                    <Text style={xstyles.mealItemDescription}>{item.description}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default FoodPlan
