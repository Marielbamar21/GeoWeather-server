import { userWeatherModel } from "../../../service/database.js";


    const getWeathers = async()=>{

        const weathers = await userWeatherModel.findAll();
        console.log(weathers);
        return weathers;
    }


    const getUserWeather = async(idUser, offset = 0, limit = 10) =>{
        try{
            
            const weather = await userWeatherModel.findAll({where : { userId : idUser}, offset: offset, limit : limit })
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