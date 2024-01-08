import { userWeatherModel } from "../../../service/database.js";


    const getWeathers = async(idUser)=>{

        const weathers = await userWeatherModel.findAll({where: {userId:idUser}});
        console.log(weathers);
        return weathers;
    }


    const getWeather = async(idUser,idWeather) =>{
        try{
            const weather = await userWeatherModel.findOne({where : { userId : idUser, weatherId: idWeather}})
            return weather;
        }
        catch(err){
            console.log('ERROORRRRS', err)
        }
        
    }


    const createUserWeather =  async(userId,weatherId) => {
        console.log('UUUUUUUUSSSSSSSEEEEEEEEEERRRRRRRR', userId);
        console.log('WWWWWWWWWWWW', weatherId)
        const newUserWeather = await userWeatherModel.create({  weatherId: weatherId , userId: userId})
        return newUserWeather;

    }


    export  const UserWeatherService = {
        getWeathers,
        getWeather,
        createUserWeather
    };