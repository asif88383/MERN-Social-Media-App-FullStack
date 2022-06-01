import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

// get a user
export const getUser = async (req, res) => {
    const id = req.params.id;

    try{
        const user = await UserModel.findById(id);
        if(user){
            // res.status(200).json(user);// send user's all data including password
            const {password, ...userData} = user._doc
            res.status(200).json(userData);// send user's all data except password
        }else{
            res.status(404).json("No such user found");
        }
    }catch(err){
        res.status(500).json(err);
    }
}


// update a user
export const updateUser = async (req, res) => {
    const id = req.params.id;
    const {currentUserId, currentUserAdminStatus, password} = req.body;

    if(id===currentUserId || currentUserAdminStatus){
        try{
            if(password){
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt);
            }
            const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true});
            res.status(200).json(user);
        }catch(error){
            res.status(500).json(error);
        }
    }else{
        res.status(401).json("Access Denied! You are not authorized to update this user");
    }
}


// delete a user
export const deleteUser = async (req, res) => {
    const id = req.params.id;

    const {currentUserId, currentUserAdminStatus} = req.body;

    if(currentUserId===id || currentUserAdminStatus){
        try{
            await UserModel.findByIdAndDelete(id);
            res.status(200).json("User deleted successfully");
        }catch(error){
            res.status(500).json(error);
        }
    }else{
        res.status(401).json("Access Denied! You are not authorized to delete this user");
    }
    
}