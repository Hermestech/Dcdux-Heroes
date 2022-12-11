import axios from 'axios';

export const getSuperHeroes = async () => {
    const response = await axios.get('https://my-json-server.typicode.com/Isaacmeedinaa/dc-superheroes/superheroes')
    return response.data
}