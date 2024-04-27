import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { usePets } from '../context/PetContext';
import fetchUser from "../API/fetchUser";
import { useAuth } from "../context/AuthContext";
import postUser from "../API/postUser";

function Cart() {
  const { pets, getPets } = usePets();
  const [selectedPet, setSelectedPet] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const { user } = useAuth();
  const id = user.id;
  const result = useQuery({queryKey: ["userDetails", id], queryFn: fetchUser});

  const {mutate, isError, error} = useMutation({mutationFn: postUser})

  useEffect(() => {
    // Cargar la lista de perros disponibles al cargar el componente.
    getPets();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se envia el formulario con los datos del perro seleccionado y el resto de los datos del formulario.
    console.log('Formulario enviado:', { ...formData, selectedPet });

    let data= {
      id: user.id,
      updateData: {
        animals_adopted: [selectedPet]
      }
    }
    console.log(data)
    mutate(data)
  };
  if (result.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  return (
    <div className="antialiased bg-[#F6F4F3]">
      <div className="contact-general">
      {isError && <div> {error.message}</div>}
        <div className="form-general">
          <div className="form-general-1">
            <div className="form">
              <h1 className="contact-title">Adoption Petition</h1>
              <p className="contact-description">Thank you a lot for making this decision. Please fill the form below, and you will be contacted soon!</p>
            </div>
            <div className="contact-container-1">
              <div className="contact-container-2">
                <div className="contact-item-title">
                  <span>Contact Information</span>
                </div>
                <div className="contact-item">
                  <span>Email - pawson@hotmail.com</span>
                </div>
                <div className="contact-item">
                  <span>Cellphone - +506 8888-6666</span>
                </div>
                <div className="contact-item">
                  <span>Location - San Jose, Costa Rica</span>
                </div>
              </div>
            </div>
          </div>
          <div className="form-container">
            <form onSubmit={handleSubmit} className="form-container-1">
              <div>
                <label htmlFor="name" className="text-xl">Name</label>
                <input type="text" id="name" name="name" value={result.data.name ?? ""} placeholder="Your name" className="form-placeholder" onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="email" className="text-xl">E-Mail</label>
                <input type="email" id="email" name="email" value={result.data.mail ?? ""} placeholder="Your e-mail" className="form-placeholder" onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="text-xl">Phone-Number</label>
                <input type="text" id="phoneNumber" name="phoneNumber" value={result.data.phone ?? ""} placeholder="Your phone number" className="form-placeholder" onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="message" className="text-xl">Adoption Petition</label>
                <textarea id="message" name="message" placeholder="Your message" rows="4" className="form-placeholder" onChange={handleChange} required></textarea>
              </div>
              <div>
                <label htmlFor="selectedPet" className="text-xl">Select a Pet</label>
                <select id="selectedPet" name="selectedPet" className="form-placeholder" onChange={(e) => setSelectedPet(e.target.value)} required>
                  <option value="">Select a pet</option>
                  {pets.map((pet) => (
                    <option key={pet._id} value={pet._id}>{pet.name}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="form-send-button">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;