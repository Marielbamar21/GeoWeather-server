import { userWeatherModel } from "../../../service/database.js";


    const getWeathers = async(idUser)=>{

        const weathers = await userWeatherModel.findAll({where: {userId:idUser}});
        console.log(weathers);
        return weathers;
    }


    const getWeather = async(idUser,idWeather) =>{

        const weather = await userWeatherModel.findOne({where : { userId : idUser, weatherId: idWeather}})
        return weather;
    }


    const createUserWeather =  async(userId,weatherId) => {

        const newUserWeather = await userWeatherModel.create({ userId: userId, weatherId: weatherId})
        return newUserWeather;

    }


    export  const UserWeatherService = {
        getWeathers,
        getWeather,
        createUserWeather
    };