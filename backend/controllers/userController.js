import asyncHandler from "express-async-handler";
import axios from "axios";
import fetch from "node-fetch";
import User from "../model/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc        Auth user & get token
// @route       POST/api/users/login
// @access      public

const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user && (await user.matchPassword(password))) {
    res.json({
      name: user.name,
      email: user.email,
      username: user.username,
      token: generateToken(user.username, user.password),
    });
  } else {
    res.status(401);
    throw new Error("Invalid username or password");
  }
});

// @desc        Register a new user
// @route       POST/api/users/register
// @access      public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, username, password } = req.body;

  const userExist = await User.findOne({ username });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    username,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
      token:
        "Bearer eyJhbGciOiJSUzM4NCIsInR5cCI6IkpXVCJ9.eyJvcmd0eXBlIjoiQ1VTVE9NRVIiLCJvcmd1dWlkIjoiZTc5Mzc3YzgtNmJkNC00YmJjLWI0ZjAtY2RkNDcwM2FhNjM3IiwidXNlcl9uYW1lIjoiYWU5NmQ2NmMtMzE3Ny00OTZjLWE4ZGMtM2E2NTIzOTFjOGQ4Iiwic3Vib3JndXVpZHMiOlsiNTQ5MzY4MWUtZTkwMy00NmEyLThiYmItYzQ0NTJhMjNiODA2IiwiZWRkYWI4ODctYTY5ZC00MmNhLWI5YzctN2JlMThmZjdlZDQ4IiwiZTI0OGNkYzYtYTc3ZC00NDczLWEyZWUtNWIxYWExYWE5YjQxIiwiOWQyYzkzOTAtMjY0NS00NThmLWI5OTYtZjBmYTUzZDY3OGQyIiwiN2U1MWE1ODctNTAzMi00YjRlLTkwOTUtZGQxNTYwN2YyYjBkIiwiYTUyYTRlZDYtZWRhYi00NmExLTlhOGUtNTQxOGFmNDQxNmYzIl0sImNsaWVudF91dWlkIjoiMDcyMjIzYWMtMGZlZi00MGMwLWE3ZDgtZTQwMzA1ZTYzNmEwIiwiYXV0aG9yaXRpZXMiOlsidXNlciJdLCJjbGllbnRfaWQiOiJwX3ZvZF9wb3J0YWxfY2xpZW50Iiwib3JnaWRzIjpbInNwMCIsInNwYSIsInNwcyIsInZzcCIsImV2bSIsInBycyIsInNwbSJdLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiZXhwIjoxNjA0NjE4NzEwLCJsYW5nIjoiRU4iLCJqdGkiOiI3YjllYmU0OS02YWYzLTRkNWQtODYyYS1iNGZjY2M3ZWMzYzciLCJ0ZW5hbnQiOiJwX3ZvZCJ9.RL6UPl5q_xu59y3r13rxzkmES63Pp6M2QTWr7kITTjHYjZX_kZKMNMcxQJ2aDzHT-gz_853u0xBV9hGfMESj_bF0dI6LqvWTeSuMt7A37m4OLksutLr-Tr9k46PRay8qfuOLHPSoC8LiIITUVm4jEFVuzEbgPhVOiIUcsJEWz729cgJw_6c8k92miysclGiU8iwZVFRrfFJylVNB_QhYt_SNnEieLZ4HwW0QWSVVqiDYPY29LS88YpbdfDxLhdykXUDw_Jaq-JisN8wtxmG6cZoCn1C7Ub762oqtnvVBR6HCl7TS1J-rDViVpr6L8e2vIulSCrdXzL_IiQ2gAcbgeYw5YKwSq-wxGrkKJZiEwjgab-tXVMzHYVuTfTo9iiz9wAM5eXN1Z60VMzB5nIsiTdvAkP_wYIi3VFSNt6rX5iNhyUzVK5YSSSPbKLsIbNyf8MledTg8V8nB-IHGIzSMhoxb6KQCEEd2v80qmHTC-pyxYLWUbXjGlj7aV8NC9wt5W0ai45GrMJkuzmjkcAAyIcByklsspR4yQcxXvQSckMDHP7m1PqhcuKEjqvupUvwEM6nvteGDfJQa1sUpV5zVVxUp-_875dPVHlmAJfGyjaibG1KUw5JIQEyGfTtni52WXPnc8AOQ5EkcJft-HBuZp9S6nmPNEFYjCcdEdlxaENg",
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export { authUser, registerUser };
