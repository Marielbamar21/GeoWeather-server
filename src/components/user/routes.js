import { Router} from 'express'
import {controllerUser} from './controller.js'
import {autCookie,validartorId} from './middleware/validations.js'
const router = Router();

    router.
        post('/newuser', autCookie )
        //.get('/:ipUser',controllerUser.getUser)
        .get('/users', controllerUser.getUsers)

export const  userRouter = router;        
