import {handleError, handleResponse} from '../../../middleware/errorHandlers.js'
import { controllerUser } from '../../user/controller.js';
import { message } from '../../../config/message.js';
import {UserService} from '../../user/userService.js'
import { v4 as uuidv4 } from 'uuid';

export const autCookie = async(req, res, next) => { 
    try{
    const cookieValue = req.cookies.userId;
    if(!cookieValue)
    {
            const userId =  uuidv4();
            res.cookie('userId', userId, {  });
            await validartorId(userId,res);

    }
    else{
        const user = await validartorId(cookieValue,res) 
        console.log('Ya posee cookie', user)
        
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
        const user = await controllerUser.createUser(id,res);
        console.log('Usuario creado',user)
return userId;
      } else {
        handleResponse(res,200,message.duplicate_data,userId)
        console.log('El usuario ya esiste')
return userId;
      }
    } catch (err) {
      handleError(err,res)
      console.log('Error 2: ',err)
    }
  };