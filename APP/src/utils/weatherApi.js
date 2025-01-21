import axios from "axios";
import { API_KEY } from "react-native-dotenv";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherData = async (city) => {
        try {
                const response = await axios.get(
                        `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`,
                );
                return response.data;
        } catch (error) {
                throw new Error("Unable to fetch weather data");
        }
};
