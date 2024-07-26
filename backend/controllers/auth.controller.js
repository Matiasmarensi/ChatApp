import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateJwt.js";
export const signup = async (req, res) => {
  try {
    const { fullname, username, email, password, confirmedPassword, gender } = req.body;

    if (!fullname || !username || !email || !password || !confirmedPassword || !gender)
      return res.status(400).json({ error: "All fields are required" });
    if (password !== confirmedPassword) return res.status(400).json({ error: "Passwords do not match" });

    //find existing user from username or email
    const user = await User.findOne({ $or: [{ username }, { email }] });

    if (user) return res.status(400).json({ error: "Username or email already exists" });
    else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const boysPic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
      const girlPic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

      const newUser = new User({
        fullname,
        username,
        email,
        password: hashedPassword,
        gender,
        profilePic: gender === "male" ? boysPic : girlPic,
      });
      await newUser.save();
      generateToken(newUser._id, res);
      res.status(201).json({ message: "User created successfully", newUser: newUser });
    }
  } catch (error) {
    console.log(error);
  }
};

export const login = (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: "All fields are required" });

    User.findOne({ username }).then((user) => {
      if (!user) return res.status(400).json({ error: "Invalid credentials" });
      bcrypt.compare(password, user?.password).then((isMatch) => {
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });
        generateToken(user._id, res);
        res.status(200).json({ message: "Login successful", user });
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
