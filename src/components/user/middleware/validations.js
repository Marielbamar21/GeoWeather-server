import {handleError, handleResponse} from '../../../middleware/errorHandlers.js'
import { controllerUser } from '../../user/controller.js';
import { message } from '../../../config/message.js';
import {UserService} from '../../user/userService.js'

export const autCookie = async(req, res, next) => { 
    try{
      const cookieValue = req.cookies.userId;
    if(!cookieValue)
    {
            return next();

    }
    else{
        const user = await validartorId(cookieValue,res) 
        console.log('Ya posee cookie', user);
        return;
        
    }
  
  }
  catch(err){
    handleError(err,res);
  }
  return next();
}

    
export const validartorId = async (id,res) => {
    try {
      
      const userId = await UserService.getUser(id);
      if (!userId) {
          UserService.createUser(id);
          handleResponse(res,200,'Cookie registrado',id);
          return;
      }

      handleResponse(res,200,message.duplicate_data,userId);
      return;
      
    } catch (err) {
      console.log('Error al verificar Usuario: ', err)
    }
  };