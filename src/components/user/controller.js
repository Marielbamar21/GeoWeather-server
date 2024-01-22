import {UserService} from "./userService.js"
import { message } from "../../config/message.js"
import { handleResponse,handleError } from "../../middleware/errorHandlers.js"

export const controllerUser = {

    // Create userId
    createUser: async(ip,res) =>{
        try{
            const user = await UserService.createUser(ip)
            console.log('Usuario Creado', user);
            return user
        }
        catch(err){
            console.log('Error 3: ', err)
            
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