import { config } from '../config/index.js'
import app from '../index.js'
import { db,syncModels } from '../service/database.js'







app.listen(config.port, async()=> {
                                    console.log(`servidos  escuchando en el puerto ${config.port}`) 
                                    try {await db.authenticate()
                                        console.log('database connected')
                                        await syncModels()
                                        console.log('All models were synchronized successfully.')
                                    } catch (error) {
                                        console.log(error)
                                    }
                            
                            });



