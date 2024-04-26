import { createContext, useContext, useState } from "react";
import { getPetRequest, getPetsRequest, createPetRequest, updatePetRequest, deletePetRequest } from "../API/insertpets";

const PetContext = createContext();

export const usePets = () => {
    const context = useContext(PetContext);
    if (!context) {
        throw new Error("usePets must be used within a PetProvider");
    }
    return context;
}

export function PetProvider({ children }) {
    const [pets, setPets] = useState([]);

    const createPet = async (pet) => {
        try {
            const res = await createPetRequest(pet);
            console.log(res.data);
        }
        catch (error) {
            console.error(error);
        }
    }

    const getPets = async () => {
        try {
            const res = await getPetsRequest();
            console.log(res);
            setPets(res.data);
        } catch (error) {
            console.log(error);
        }
    }

   const getPet = async (id) => {
        try {
            const res = await getPetRequest(id);
            console.log(res.data);
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    const updatePet = async (id, pet) => {
        try {
            await updatePetRequest(id, pet);
            
        } catch (error) {
            console.error(error);
        }
    }

    const deletePet = async (id) => {
        try {
            const res = await deletePetRequest(id);
            if (res.status === 204) setPets(pets.filter((pet) => pet._id !== id));
        } catch (error) {
            console.err(error);
        }
    }

    return (
        <PetContext.Provider value={{
            pets,
            createPet,
            getPets,
            deletePet,
            getPet,
            updatePet
        }}>
            {children}
        </PetContext.Provider>
    );
}
