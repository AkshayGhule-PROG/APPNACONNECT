import { User } from "../models/user.model.js";
import httpStatus from "http-status";
import bcrypt from "bcryptjs";
import crypto from "crypto";  // Using crypto instead of JWT

// REGISTER
const register = async (req, res) => {
  const { name, username, password } = req.body;

  if (!name || !username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(httpStatus.CONFLICT).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const token = crypto.randomBytes(32).toString("hex"); // Generate random token

    const user = new User({ name, username, password: hashedPassword, token });
    await user.save();

    res.status(201).json({ message: "User registered", token });
  } catch (e) {
    console.error("Register error:", e);
    res.status(500).json({ message: `Something went wrong: ${e.message}` });
  }
};

// LOGIN
const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Please provide all required credentials" });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Return the existing crypto token
    res.status(httpStatus.OK).json({ message: "Login successful", token: user.token });
  } catch (e) {
    console.error("Login error:", e);
    res.status(500).json({ message: `Something went wrong: ${e.message}` });
  }
};

export { login, register };
