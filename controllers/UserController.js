import User from "../models/UserModel.js";

export const signUpUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: "User created" });
  } catch (error) {
    res.send(error.message);
  }
};

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

export const loginUser = async (req, res) => {
  try {
    const User = await User.findOne({ where: { email: req.body.email } });
    res.status(200).json(User);
  } catch (error) {
    res.send(error.message);
  }
};
