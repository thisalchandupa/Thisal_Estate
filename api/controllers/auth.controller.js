import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';                                     {/*hashing password*/}
import { errorHandler } from "../utils/error.js";
                                        

export const signup = async (req, res, next) => {
   const { username, email, password } = req.body;                      {/*creating a new user*/}
   const hashedPassword = bcryptjs.hashSync(password,10);
   const newUser = new User({ username,email,password:hashedPassword});
   try {
      await newUser.save()
      res.status(201).json("user created sucessfullly!") 
   } catch (error) {
     next(error);                                         {/*error msg if the user isn't unique*/}
   }


   
};