import bcrypt from "bcryptjs";

const users = [
  {
    name: "John Deo",
    email: "john@example.com",
    username: "john",
    password: bcrypt.hashSync("password", 10),
  },

  {
    name: "Jane Deo",
    email: "jane@example.com",
    username: "jane",
    password: bcrypt.hashSync("password", 10),
  },

  {
    name: "Will Smith",
    email: "will@example.com",
    username: "will",
    password: bcrypt.hashSync("password", 10),
  },
];
