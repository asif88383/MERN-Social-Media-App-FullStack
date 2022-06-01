import UserModel from "../Models/userModel.js";

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

}