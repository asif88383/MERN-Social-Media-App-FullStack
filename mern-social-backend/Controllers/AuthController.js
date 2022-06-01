import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";


// Registering a nrew User
export const registerUser = async (req, res) => {
    const {username, password, firstname, lastname} = req.body;
    
    // Encrypting the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({username, password: hashedPassword, firstname, lastname});

    try{
        await newUser.save();
        res.status(200).json(newUser);
    }catch{
        res.status(500).json({message: error.message});
    }
}