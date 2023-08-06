import express from "express";

const app = express();

app.get("/", (req, res) => res.json("My API running 😎"));

app.listen(5001, () => console.log("Server running on port 3000"));
