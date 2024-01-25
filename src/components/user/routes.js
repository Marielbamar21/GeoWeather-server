import { Router} from 'express'
import {controllerUser} from './controller.js'
import {autCookie,validartorId} from './middleware/validations.js'
const router = Router();

    router.
        get('/newuser', autCookie, controllerUser.createUser )
        .get('/user',controllerUser.getUser)
        .get('/users', controllerUser.getUsers)

export const  userRouter = router;        
