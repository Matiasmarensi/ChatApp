import User from "../model/user.model.js";

export const signup = async (req, res) => {
  try {
    const { fullname, username, email, password, confirmedPassword, gender } = req.body;

    if (!fullname || !username || !email || !password || !confirmedPassword || !gender)
      return res.status(400).json({ error: "All fields are required" });
    if (password !== confirmedPassword) return res.status(400).json({ error: "Passwords do not match" });

    const user = await User.findOne({ username });
    if (user) return res.status(400).json({ error: "Username already exists" });
    else {
      const boysPic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
      const girlPic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

      const newUser = new User({
        fullname,
        username,
        email,
        password,
        gender,
        profilePic: gender === "male" ? boysPic : girlPic,
      });
      await newUser.save();
      res.status(201).json({ message: "User created successfully", newUser: newUser });
    }
  } catch (error) {
    console.log(error);
  }
};

export const login = (req, res) => {
  res.send("Login");
};

export const logout = (req, res) => {
  console.log(req.body);
};
