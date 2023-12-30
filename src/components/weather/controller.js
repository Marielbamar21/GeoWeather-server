import {weatherService} from './weatherService.js';
import { conectionAPI } from '../../conection.js/API.js';
import { handleResponse,handleError } from "../../middleware/errorHandlers.js"
import { message } from "../../config/message.js"


export const controllerUser = {
    createWeather: async(req = request, res = response) =>{

        try{
        const location = req.params;
        const {time , humidity , precipitationProbability , rainIntensity , sleetIntensity , temperature , temperatureApparent ,
                uvHealthConcern , uvIndex , visibility , weatherCode } = conectionAPI(location);

        
        const weather = weatherService.createWeather({ time : time , humidity : humidity ,precipitationProbability : precipitationProbability ,rainIntensity : rainIntensity ,
                                                        sleetIntensity : sleetIntensity , temperature : temperature , temperatureApparent : temperatureApparent ,uvHealthConcern : uvHealthConcern ,
                                                        uvIndex : uvIndex , visibility : visibility, weatherCode : weatherCode})


        handleResponse(res,200,message.success_long,weather);
        
    }
    catch(err){

        handleError(err,message.error_message);

    }
    },
    getweathers:  async(req = request, res = response) =>{
        try{
            
        }
        catch(err){

        }
    }
}