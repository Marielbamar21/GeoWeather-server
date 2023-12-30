import { Sequelize } from "sequelize";
import { weatherModel } from "../../../service/database.js";


    const getWeathers = async()=>{

        const weathers = await weatherModel.findAll();
        console.log(weathers);
        return weathers;
    }


    const getWeather = async(ip) =>{

        const weather = weatherModel.findOne({where : { ip : ip}})
        console.log(weather);
        return weather;
    }


    const createWeather =  async(datos) => {

        const newWeather = new weatherModel.build(datos)
        console.log(newWeather);
        return newWeather;

    }

    
export const weatherService = {
    getWeathers,
    getWeather,
    createWeather

}