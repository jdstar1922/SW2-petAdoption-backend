import { useForm } from "react-hook-form";
import { usePets } from "../context/PetContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function InsertPet (){
    const { register, handleSubmit, setValue } = useForm();
    const { createPet, getPet, updatePet } = usePets();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if(params.id){
            await updatePet(params.id, data);
        }else{
            await createPet(data);
        }
        navigate("/adopt");
    });

    useEffect(() => {
        async function loadPet(){
            if(params.id){
                const pet = await getPet(params.id);
                setValue('name', pet.name);
                setValue('id', pet._id);
            }
        }
        loadPet();
    }, []);

    return (
      <div className="CT-center">
        <div className="reg-frame">
          <h1> Insert a Pet </h1>
          <form className="pet-form" onSubmit={onSubmit}>
            <input {...register("name")} autoFocus type="text" placeholder="Name"></input>
            <label htmlFor="animal">Select an animal:</label>
            <select {...register("animal")} id="animal" name="animal">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="other">Other</option>
            </select>
            <input {...register("city")} type="text" placeholder="City"></input>
            <input {...register("state")} type="text" placeholder="State"></input>
            <textarea {...register("description")} placeholder="Description"></textarea>
            <textarea {...register("medications")} type="text" placeholder="Medications"></textarea>
            <textarea {...register("images")} type="text" placeholder="Image URL"></textarea>
            <button>Save</button>

          </form>
        </div>
      </div>
    );
}

export default InsertPet;

//<input {...register("ID")} autoFocus type="text" placeholder="ID"></input>