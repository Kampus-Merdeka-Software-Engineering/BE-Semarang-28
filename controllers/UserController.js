import User from "../models/UserModel.js";
import argon2 from "argon2";

export const signUpUser = async(req, res) =>{
  const {username, name, phoneNumber, email, password} = req.body;
  const hashPassword = await argon2.hash(password);
  try {
      await User.create({
        username: username,
          name: name,
          phone_number: phoneNumber,
          email: email,
          password: hashPassword,
          
      });
      res.status(201).json({msg: "Register Berhasil"});
  } catch (error) {
      res.status(400).json({msg: error.message});
  }
}

export const findAllUser = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes:['User_id','name','phone_number','email']
    });
    res.status(200).json(users);
  } catch (error) {
    res.send(error.message);
  }
};
