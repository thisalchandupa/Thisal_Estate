import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';                                        {/*hashing password*/}

export const signup = async (req, res) => {
   const { username, email, password } = req.body;                      {/*creating a new user*/}
   const hashedPassword = bcryptjs.hashSync(password,10);
   const newUser = new User({ username,email,password:hashedPassword});
   try {
      await newUser.save()
      res.status(201).json("user created sucessfullly!") 
   } catch (error) {
     res.status(500).json(error.message);                                         {/*error msg if the user isn't unique*/}
   }


   
};