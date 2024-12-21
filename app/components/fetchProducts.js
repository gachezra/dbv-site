import axios from 'axios';

export default async function fetchProducts(){
  const baseURL = process.env.API_URL || 'http://localhost:3000';
  try {
    const response = await axios.get(`${baseURL}/api/products`);
    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  } catch (e) {
    console.log('Error fetching products for home page: ', e)
  }
}