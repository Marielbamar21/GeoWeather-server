import {weatherService} from './weatherService.js';
import {UserWeatherService} from '../userWeather/userWeatherService.js'
import {UserService} from '../user/userService.js'
import { conectionAPI } from '../../conection.js/API.js';
import { handleResponse,handleError } from "../../middleware/errorHandlers.js"
import { message } from "../../config/message.js"


export const controllerWeather = {
    createWeather: async(req = request, res = response) =>{

        try{
        
        const {location,userId} = req.params;
        const wthr = await conectionAPI(location);
        const { humidity,precipitationProbability,rainIntensity,sleetIntensity,temperature,temperatureApparent,
            uvHealthConcern,uvIndex,visibility,weatherCode} = wthr.values
        
        const user = await UserService.getUser(userId)
        
        
        const weather = await weatherService.createWeather({ humidity : humidity ,precipitationProbability : precipitationProbability ,rainIntensity : rainIntensity ,
                                                        sleetIntensity : sleetIntensity , temperature : temperature , temperatureApparent : temperatureApparent ,uvHealthConcern : uvHealthConcern ,
                                                        uvIndex : uvIndex , visibility : visibility, weatherCode : weatherCode});
        
        const userWeather = await UserWeatherService.createUserWeather(user.id,weather.id);


        handleResponse(res,200,message.success_long,userWeather);
        
    }
    catch(err){

        handleError(err,res);

    }
    },
    getweathers:  async(req = request, res = response) =>{
        try{
            
        }
        catch(err){

        }
    }
}