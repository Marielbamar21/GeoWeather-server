import { Router} from 'express'
import {controllerUserWeather} from './controller.js'
const router = Router();

    router.
        post('/newuser',  )
        .get('/:userId',controllerUser.getUser)
        .get('/users', controllerUser.getUsers)

export const  userRouter = router;        
