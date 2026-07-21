import express from "express";
import prisma  from "db/client";
import { password } from "bun";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/user" , async (req, res) => {

  // Here you would typically save the user to a database
  const user = await prisma.user.create({
    data: {
      username: Math.random().toString(36).substring(7), // Random username for demonstration
      password: Math.random().toString(36).substring(7), // Random password for demonstration
    },
  });
  res.status(201).json({ message: "User created", user: { username : user.username ,password : user.password } });
  return
});

app.get("/users", async (req, res) => {
    const users = await prisma.user.findMany();
    res.status(200).json({ users }); 
    return ;
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});