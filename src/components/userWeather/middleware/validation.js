import {handleError, handleResponse} from '../../../middleware/errorHandlers.js';
import { controllerUserWeather } from '../controller.js';
import { message } from '../../../config/message.js';
import {UserService} from '../../user/userService.js';

export const  validator = async(req,res,next) =>{
    try{
        
        const userId = req.cookies.userId;
        if(!userId){
        handleResponse(res,400,'no se tiene acceso al cookie')
        }
        else{
            const user = await UserService.getUser(userId);
            !user ? handleResponse(res,409,message.error_user,null): console.log('El usuario si existe');
        }
    }
    catch(err){
        handleError(err,res);
    }
    return next();
}
/*export const  validator = async(req,res,next) =>{
    try{
        const userId = req.cookies.userId;
        
        const weathers = controllerUserWeather.getUserWeather()
    }
        catch(err){

        }}*/