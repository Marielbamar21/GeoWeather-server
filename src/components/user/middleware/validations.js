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
            res.cookie('userId', userId, { httpOnly: true , });
            handleResponse(res, 200,'Cookie Creado', userId)
            await validartorId(userId);

    }
    else{
      
        console.log(cookieValue, 'AAAAAAAAAAAAAAAAAAAAAAAAAAS');
        const user = await validartorId(cookieValue);
        handleResponse(res,200,message.duplicate_data)
        console.log('Ya posee cookie', user)
        
    }
  return next();
  }
  catch(err){
    handleError(err,res);
    return next(err);
  }
  
}

    
export const validartorId = async (id) => {
    try {
      
      const userId = await UserService.getUser(id);
      console.log(id, 'aaaaaaaaaaaaaaaaaaaaaaaaaaa')
      console.log(userId, 'bbbbbbbbbbbbbbbbbbbbbbbbbb')
      if (!userId) {
        const user = await controllerUser.createUser(id);
        //handleResponse(res, 200, message.create_user, user);
        console.log('Usuario creado',user)
return userId;
      } else {
        //handleResponse(res, 200, message.duplicate_data);
        console.log('El usuario ya esiste')
return userId;
      }
    } catch (err) {
      console.log('Error 2: ',err)
    }
  };