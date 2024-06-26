import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { name, lastname1, lastname2, direction, phone, mail, password } = req.body;
    try {
        const userFound = await User.findOne({mail});
        if(userFound) res.status(400).json(["The email is already registered."]);
        
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({ name, lastname1, lastname2, direction, phone, mail, password: passwordHash });
        const userSaved = await newUser.save();
        const token = await createAccessToken({ id: userSaved._id });
        res.cookie("token", token);
        res.json({
            id: userSaved._id,
            name: userSaved.name,
            lastname1: userSaved.lastname1,
            lastname2: userSaved.lastname2,
            direction: userSaved.direction,
            phone: userSaved.phone,
            mail: userSaved.mail,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        const userFound = await User.findOne({mail: email});

        if(!userFound){
            return res.status(404).json(["The email doesn't exist"]);
        }
        
        const isMatch = await bcrypt.compare(password, userFound.password);
        if(!isMatch){
            return res.status(400).json(["The password is incorrect"]);
        }

        const token = await createAccessToken({id: userFound._id, name: userFound.name});
        res.cookie("token", token,{
            httpOnly: false,
            secure: true,
            sameSite: "none"
        });

        res.json({
            id: userFound._id,
            name: userFound.name,
            mail: userFound.mail
        });

        
    } catch (error) {
        console.error(error);
        res.status(500).json([error.message]);
    }

}

export const logout = async (req, res) =>{
    res.cookie("token","");
    return res.send(200);
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id);
    if(!userFound){
        return res.status(400).json({message: "User not found"});
    }
    return res.json({
        id: userFound._id,
        name: userFound.name,
        mail: userFound.mail,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    });
}

export const verify = async(req, res) => {
    const {token} = req.cookies;

    if(!token) return res.status(401).json({message: "Unauthorized"});
    
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, user)=> {
       if(err) return res.status(401).json({message: "Unauthorized"});

       const userFound = await User.findById(user.id);
       if(!userFound) return res.status(401).json({message: "Unauthorized"});

       return res.json({
           id: userFound._id,
           name: userFound.name,
            mail: userFound.mail
       });
    });

}
