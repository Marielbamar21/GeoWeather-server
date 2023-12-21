import { config } from '../../config/index.js';
import axios from 'axios';

export const conectionAPI = async () => {
  try {

    const params = {
      location: 'Barquisimeto'
    }
    const response = await axios.get(config.weather_url, { params });
    const datos = response.data
    console.log("🚀 ~ file: API.js:11 ~ conectionAPI ~ datos:", datos)
    return response.data; // Devolver los datos o cualquier otra cosa que necesites
  } catch (error) {
    // Manejar errores
    console.error('Error al hacer la solicitud a la API:', error);
    throw error; // Re-lanzar el error para que pueda ser manejado por el código que llama a esta función

  }
};