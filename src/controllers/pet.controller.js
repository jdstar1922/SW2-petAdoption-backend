import Pet from "../models/pet.model.js"

export const getPets = async (req, res) => {
    const pets = await Pet.find();
    res.json(pets);
};

export const createPet = async (req, res) => {
    const { name, animal, city, state, description, medications, images, date } = req.body;

    const newPet = new Pet({
        name,
        animal,
        city,
        state,
        description,
        medications,
        images,
        date,
    });

    const savedPet = await newPet.save();
    res.json(savedPet);

};

export const deletePet = async (req, res) => {
    const pet = await Pet.findByIdAndDelete(req.params.id);
    if (!pet) return res.status(404).json({ message: "Pet not found" });
    return res.sendStatus(204);
}

export const updatePet = async (req, res) => {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pet) return res.status(404).json({ message: "Pet not found" });
    return res.json(pet);
}

export const getPet = async (req, res) => {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ message: "Pet not found" });

    res.json(pet);
};