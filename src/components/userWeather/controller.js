import {UserWeatherService} from "./userWeatherService.js"
import {conectionAPI} from '../../conection.js/API.js'
import { message } from "../../config/message.js"
import { handleResponse,handleError } from "../../middleware/errorHandlers.js"

export const controllerUserWeather = {

    // Create 
    createUserWeather: async(req,res) =>{
        try{
            const { location } = req.params;
            const userId = req.cookies.userId;
            const data = await conectionAPI(location);
            if( !data){
                handleResponse(res,200,'Esta ubicacion no existe', null)
                return;
            }
            
            const { name } = data.location;
            const valuesWeather = data.data;
            const { humidity,precipitationProbability,rainIntensity,temperature,temperatureApparent,
                uvHealthConcern,visibility,weatherCode} = valuesWeather.values;

            const weather = await UserWeatherService.createUserWeather({ userId: userId ,location: name ,humidity : humidity ,precipitationProbability : precipitationProbability ,rainIntensity : rainIntensity ,
                                                                        temperature : temperature , temperatureApparent : temperatureApparent ,uvHealthConcern : uvHealthConcern ,
                                                                        visibility : visibility, weatherCode : weatherCode});
            
            handleResponse(res,200,message.success_long,weather);
            return;
            
        }
        catch(err){
            handleError(err,res)
    
        }
        
    },

    getUserWeather: async( req, res ) => {
        try{
            const  userId = req.cookies.userId;
            const userWeather = await UserWeatherService.getUserWeather(userId);
            handleResponse(res,200,message.success_long,userWeather)

        }
        catch(err){
            handleError(err,res);
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