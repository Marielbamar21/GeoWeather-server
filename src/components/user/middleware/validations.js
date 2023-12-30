import {handleError, handleResponse} from '../../../middleware/errorHandlers.js'
import { controllerUser } from '../../user/controller.js';
import { message } from '../../../config/message.js';
import {UserService} from '../../user/userService.js'
import { v4 as uuidv4 } from 'uuid';
import { HostNotFoundError } from 'sequelize';

export const autCookie = (req, res, next) => { const cookieValue = req.cookies.userId;
    console.log(cookieValue, 'AAAAAAAAAAAAAAAAAAAAAAAAAAS');
    if(!cookieValue)
    {
            const userId =  uuidv4();
            res.cookie('userId', userId, { maxAge: 900000, httpOnly: true });
            console.log('Cookie establecida')

    }
    else{
        console.log('esto ya esta egistrado')
        return next();
    }
}

    
export const validartorId = async (req, res) => {
    try {
      const id = req.cookies.userId;
      const userId = await UserService.getUser(id);
      if (!userId) {
        const user = await controllerUser.createUser(id, res);
        handleResponse(res, 200, message.create_user, user);
      } else {
        handleResponse(res, 200, message.duplicate_data);
      }
    } catch (err) {
      handleError(err, res);
    }
  };