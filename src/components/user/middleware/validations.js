import {handleError, handleResponse} from '../../../middleware/errorHandlers.js'
import { controllerUser } from '../../user/controller.js';
import { message } from '../../../config/message.js';
import {UserService} from '../../user/userService.js'
import { v4 as uuidv4 } from 'uuid';

export const autCookie = async(req, res) => { 
    try{
    const cookieValue = req.cookies.userId;
    console.log(cookieValue, 'AAAAAAAAAAAAAAAAAAAAAAAAAAS');
    if(!cookieValue)
    {
            const userId =  uuidv4();
            res.cookie('userId', userId, { maxAge: 900000, httpOnly: true });
            console.log('Cookie establecida', userId)
             await validartorId(res,userId);

    }
    else{
        await validartorId(res,cookieValue);
        console.log('Ya posee cookie', cookieValue)
        
    }
  }
  catch(err){
    handleError(err,res);
  }
}

    
export const validartorId = async (res, id) => {
    try {
      
      const userId = await UserService.getUser(id);
      if (!userId) {
        const user = await controllerUser.createUser(id, res);
        handleResponse(res, 200, message.create_user, user);
return;
      } else {
        handleResponse(res, 200, message.duplicate_data);
return;
      }
    } catch (err) {
      handleError(err,res)
    }
  };