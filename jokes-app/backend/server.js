// const express = require("express") //common js
import express from "express" //es module

const app = express();

// Rest API 
const jokes = [
    { "id": 1, "title": "Binary Banter", "joke": "Why do programmers prefer dark mode? Because light attracts bugs." },
    { "id": 2, "title": "Callback Comedy", "joke": "I told my computer I needed a break, and it said “No problem—I'll go to sleep.”" },
    { "id": 3, "title": "Cache Me If You Can", "joke": "There are only 10 kinds of people: those who understand binary and those who don’t." },
    { "id": 4, "title": "Promise Punchline", "joke": "A SQL query walks into a bar, walks up to two tables and asks, “Can I join you?”" },
    { "id": 5, "title": "404 Fun Not Found", "joke": "I changed my password to “incorrect” so if I forget, my computer reminds me: “Your password is incorrect.”" }
]


app.get("/api/jokes", (req, res) => {
    res.send(jokes)
})


app.get("/", (req, res) => {
    res.send(`<h2>Home Page </h2>`)
})

//whenever we will deploy the project on internet we don't which port the project will served or listened that's why we keep environment variable..
//Netlify : 5000
//github : 5555
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

