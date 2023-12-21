import UserService from "./userService.js"
import { message } from "../../config/message.js"
import { handleResponse,handleError } from "../../middleware/errorHandlers.js"

export const controller = {

    // userId
    createUser: async( req = request , res = response) =>{
        try{
            const ipUser = req.param;
            console.log(ipUser)
            const user = await UserService.createUser(ipUser)
            handleResponse(res,200,message.create_user,user)
        }
        catch(err){
            handleError(err,res);
            
        }
        
    },

    getUser: async( req = request , res = response ) => {
        try{
            const ipUser = req.param;
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
            const users = await UserService.getUsers();
            handleResponse(res,200, message.success_long,users)
        }
        catch(err){
            handleError(err,res);

        }
    }
    
}