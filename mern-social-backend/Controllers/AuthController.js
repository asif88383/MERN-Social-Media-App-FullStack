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



// login a user
export const loginUser = async (req, res) => {
    const {username, password} = req.body;

    try{
        const user = await UserModel.findOne({username: username});

        if(user){
            const isMatch = await bcrypt.compare(password, user.password);

            isMatch? res.status(200).json(user) : res.status(400).json({message: "Invalid Credentials"});
        }else{
            res.status(404).json({message: "User not found"});
        }
    }catch (error){
        res.status(500).json({message: error.message});
    }

}