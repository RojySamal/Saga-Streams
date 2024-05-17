import UserDataModel from "../models/user.model.js";

// Fetch user details by ID
export const getUserById = async (req, res) => {
  try {
    console.log('incoming...');
    const userId = req.params.userid;
    const user = await UserDataModel.findById(userId).select('-password');

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log('USer response type: ',typeof user);

    res.json({ user });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// export const getUser = async(req,res)=>{
//     try{
//     const Id = req.params.id;
//     const user = await UserDataModel.findById(Id);
//     if(!user)
//         {
//             return res.status(400).json({message:"User not found!!"})
//         }
//         res.json({user})
//     }catch(err){
//         console.log('Error',err);
//     }
// }


