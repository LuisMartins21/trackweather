import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { fetchWeatherData } from "../utils/weatherApi";

const HomeScreen = () => {
        const [city, setCity] = useState("");
        const [weather, setWeather] = useState(null);

        const getWeather = async () => {
                try {
                        const data = await fetchWeatherData(city);
                        setWeather(data);
                } catch (error) {
                        console.error("Error fetching weather:", error);
                        alert("City not found. Please try again.");
                }
        };

        return (
                <View style={styles.container}>
                        <Text style={styles.title}>Weather App</Text>
                        <TextInput
                                style={styles.input}
                                placeholder="Enter your city"
                                value={city}
                                onChangeText={setCity}
                        />
                        <Button title="Get Weather" onPress={getWeather} />
                        {weather && (
                                <View style={styles.weatherInfo}>
                                        <Text style={styles.cityName}>
                                                {weather.name}
                                        </Text>
                                        <Text style={styles.temperature}>
                                                {Math.round(weather.main.temp)}
                                                °C
                                        </Text>
                                        <Text style={styles.description}>
                                                {weather.weather[0].description}
                                        </Text>
                                </View>
                        )}
                </View>
        );
};

const styles = StyleSheet.create({
        container: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
                backgroundColor: "#f5f5f5",
        },
        title: {
                fontSize: 30,
                fontWeight: "bold",
        },
        input: {
                height: 40,
                width: "80%",
                borderColor: "gray",
                borderWidth: 1,
                marginTop: 20,
                padding: 10,
        },
        weatherInfo: {
                alignItems: "center",
                marginTop: 20,
        },
        cityName: {
                fontSize: 30,
        },
        temperature: {
                fontSize: 100,
        },
        description: {
                fontSize: 30,
        },
});

export default HomeScreen;
