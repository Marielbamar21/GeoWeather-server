import { Router} from 'express'
import {controller} from './controller.js'
const router = Router();

    router.
        post('/newuser/:ipUser',   controller.createUser)
        .get('/:ipUser',controller.getUser)
        .get('/users', controller.getUsers)

export const  userRouter = router;        
