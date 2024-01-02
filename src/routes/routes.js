import { Router} from 'express'
import { userRouter } from '../components/user/routes.js'
import { weatherRouter} from '../components/weather/routes.js'
 const router = Router();

    router.use('/user', userRouter );
    router.use('/weather', weatherRouter);


export const routes = router;


 