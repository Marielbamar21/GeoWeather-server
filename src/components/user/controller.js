import {UserService} from "./userService.js"
import { message } from "../../config/message.js"
import { handleResponse,handleError } from "../../middleware/errorHandlers.js"

export const controllerUser = {

    // Create userId
    createUser: async(ip) =>{
        try{
            const user = await UserService.createUser(ip)
            //handleResponse(res,200,message.create_user,user)
            console.log('Usuario Creado', user);
            return user
        }
        catch(err){
            //handleError(err,res);
            console.log('Error 3: ', err)
            
        }
        
    },

    getUser: async( req = request , res = response ) => {
        try{
            const  {params :{userId}}  = req;
            console.log(userId, ' 11111111111111111111111111111111')
            const user = await UserService.getUser(userId);
            console.log(user,' 22222222222222222222222222222')
            handleResponse(res,200,message.success_long,user)
            return user;

        }
        catch(err){
            handleError(err,res)

        }
    },
    getUsers : async(req = request , res = response) =>
    {
        try{
            const users = await UserService.getUsers();
            handleResponse(res,200, message.success_long,users)
        }
        catch(err){
            handleError(err,res);

        }
    }
    
}