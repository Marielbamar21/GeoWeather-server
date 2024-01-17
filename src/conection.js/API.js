import { config } from '../../config/index.js';
import axios from 'axios';

export const conectionAPI = async (location) => {
  try {
    console.log('EEEEEEEENTRADA', location);
    const params = {
      location: location
    }
    console.log(location, 'LOCATION')
    const response = await axios.get(config.weather_url, { params })
    
    console.log(response.data , "RREEEEEEEEEEEEEESSSSSSSSPPPPPUUUUEEEESSSSTTTTTTTAAAAAS APIS")
   
    return response.data; // Devolver los datos o cualquier otra cosa que necesites
  } catch (error) {
    // Manejar errores
    console.error('Error al hacer la solicitud a la API:', error);
    return null; // Re-lanzar el error para que pueda ser manejado por el código que llama a esta función

  }
};