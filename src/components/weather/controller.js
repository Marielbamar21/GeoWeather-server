import {weatherService} from './weatherService.js';
import {UserWeatherService} from '../userWeather/userWeatherService.js'
import { conectionAPI } from '../../conection.js/API.js';
import { handleResponse,handleError } from "../../middleware/errorHandlers.js"
import { message } from "../../config/message.js"


export const controllerWeather = {
    createWeather: async(req = request, res = response,userId) =>{

        try{
        const {location} = req.params;
        const wthr = await conectionAPI(location); 
        const { humidity,precipitationProbability,rainIntensity,temperature,temperatureApparent,
            uvHealthConcern,visibility,weatherCode} = wthr.values;
        
        const weather = await weatherService.createWeather({ humidity : humidity ,precipitationProbability : precipitationProbability ,rainIntensity : rainIntensity ,
                                                            temperature : temperature , temperatureApparent : temperatureApparent ,uvHealthConcern : uvHealthConcern ,
                                                            visibility : visibility, weatherCode : weatherCode});
        
        console.log('AAAAAAAAAAAAAA', weather.id)
        const userWeather = await UserWeatherService.createUserWeather(userId,weather.id);
        handleResponse(res,200,message.success_long,userWeather);
        return;
        
    }
    catch(err){
        console.log('Error: ',err);

    }
    },
    getweathers:  async(req = request, res = response) =>{
        try{
            
        }
        catch(err){

        }
    }
}