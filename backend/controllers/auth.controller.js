export const signup = (req, res) => {
  console.log(req.body);
  try {
    const { fullname, username, email, password, confirmedPassword, gender } = req.body;
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
