import {UserWeatherService} from "./userWeatherService.js"
import {conectionAPI} from '../../conection.js/API.js'
import { message } from "../../config/message.js"
import { handleResponse,handleError } from "../../middleware/errorHandlers.js"

export const controllerUserWeather = {

    // Create 
    createUserWeather: async(req,res,userId) =>{
        try{
            const {location} = req.params;
            const wthr = await conectionAPI(location); 
            const { humidity,precipitationProbability,rainIntensity,temperature,temperatureApparent,
                uvHealthConcern,visibility,weatherCode} = wthr.values;
            
            const weather = await UserWeatherService.createUserWeather({ userId: userId,humidity : humidity ,precipitationProbability : precipitationProbability ,rainIntensity : rainIntensity ,
                                                                temperature : temperature , temperatureApparent : temperatureApparent ,uvHealthConcern : uvHealthConcern ,
                                                                visibility : visibility, weatherCode : weatherCode});
            handleResponse(res,200,message.success_long,weather);
            return;
            
        }
        catch(err){
            console.log('Error: ',err);
    
        }
        
    },

    getUserWeather: async( req = request , res = response ) => {
        try{
            const  userId = req.cookie.userId;
            console.log(userId, ' 11111111111111111111111111111111')
            const userWeather = await UserWeatherService.getUserWeather(userId);
            console.log(userWeather,' 22222222222222222222222222222')
            handleResponse(res,200,message.success_long,userWeather)
            return userWeather;

        }
        catch(err){
            handleError(err,res)

        }
    },
    getWeathers : async(req = request , res = response) =>
    {
        try{
            const users = await UserWeatherService.getWeathers();
            handleResponse(res,200, message.success_long,users)
        }
        catch(err){
            handleError(err,res);

        }
    }
    
}