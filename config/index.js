import dotenv from 'dotenv';
const conf = dotenv.config()

export const config = {
    weather_url: process.env.WEATHER_URL,
    bd_name: process.env.BD_NAME,
    bd_host: process.env.BD_HOST,
    bd_user: process.env.BD_USER,
    bd_key: process.env.BD_KEY,
    port : process.env.PORT
}