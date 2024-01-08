import { userWeatherModel } from "../../../service/database.js";


    const getWeathers = async()=>{

        const weathers = await userWeatherModel.findAll();
        console.log(weathers);
        return weathers;
    }


    const getUserWeather = async(idUser) =>{
        try{
            const weather = await userWeatherModel.findOne({where : { userId : idUser}})
            return weather;
        }
        catch(err){
            console.log('ERROORRRRS', err)
        }
        
    }


    const createUserWeather =  async(data) => {
        const newUserWeather = await userWeatherModel.create(data);
        return newUserWeather;

    }


    export  const UserWeatherService = {
        getWeathers,
        getUserWeather,
        createUserWeather
    };