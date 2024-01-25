import {UserService} from "./userService.js"
import { message } from "../../config/message.js"
import { handleResponse,handleError } from "../../middleware/errorHandlers.js"
import { v4 as uuidv4 } from 'uuid';

export const controllerUser = {

    // Create userId
    createUser: async(req,res) =>{
        try{
            const userId =  uuidv4();
            res.cookie('userId', userId, { path: '/',   httpOnly: true, secure: true, sameSite: 'None'});
            const user = await UserService.createUser(userId);
            handleResponse(res,200,message.create_user,user);
        }
        catch(err){
            handleError(err,res)
            
        }
        
    },

    getUser: async( req = request , res = response ) => {
        try{
            const  {params :{userId}}  = req;
            const user = await UserService.getUser(userId);
            //handleResponse(res,200,message.success_long,user)
            return user;

        }
        catch(err){
            console.log('Error: (getUser) ', err)

        }
    },
    getUsers : async(req = request , res = response) =>
    {
        try{
            const users = await UserService.getUsers();
            console.log(users);
            handleResponse(res,200, message.success_long,users)
        }
        catch(err){
            handleError(err,res);

        }
    }
    
}