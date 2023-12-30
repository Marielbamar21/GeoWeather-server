import {UserService} from "./userService.js"
import { message } from "../../config/message.js"
import { handleResponse,handleError } from "../../middleware/errorHandlers.js"

export const controllerUser = {

    // Create userId
    createUser: async(ip, res ) =>{
        try{
            const user = await UserService.createUser(ip)
            handleResponse(res,200,message.create_user,user)
        }
        catch(err){
            handleError(err,res);
            
        }
        
    },

    getUser: async( req = request , res = response ) => {
        try{
            const ipUser = req.params;
            const user = await UserService.getUser(ipUser);
            handleResponse(res,200,message.success_long,user)

        }
        catch(err){
            handleError(err,res)

        }
    },
    getUsers : async(req = request , res = response) =>
    {
        try{
            console.log('1111111111111111')
            const users = await UserService.getUsers();
            console.log('1111111111111112')
            handleResponse(res,200, message.success_long,users)
        }
        catch(err){
            console.log('1111111111111113')
            handleError(err,res);

        }
    }
    
}