import { config } from '../../config/index.js';
import axios from 'axios';

export const conectionAPI = async (location) => {
  try {
    const params = {
      location: location
    }
    const response = await axios.get(config.weather_url, { params })
   
    return response.data;
  } catch (error) {
    console.error('Error al hacer la solicitud a la API:', error);
    return null;

  }
};