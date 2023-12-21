import { Router} from 'express'
import { userRouter } from '../components/user/routes.js'
 const router = Router();

    router.use('/user', userRouter);


export const routes = router;


 