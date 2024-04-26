import axios from "./axios";

export const getPetsRequest = () => axios.get('/pets');
export const getPetRequest = (id) => axios.get(`/pets/${id}`);
export const createPetRequest = (pet) => axios.post('/pets', pet);
export const updatePetRequest = (id, pet) => axios.put(`/pets/${id}`, pet);
export const deletePetRequest = (id) => axios.delete(`/pets/${id}`);