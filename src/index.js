const express = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://caionogueirabindella:desktopapp@cluster0.v3spf6b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");


const app = express()
app.use(express.json())
const port = 3000

const ClientUser = mongoose.model('Client', {
     name: String,
     username: String,
     password: String,
     email: String,
    })

app.get("/", async (req, res) => {
  const Client = await ClientUser.find()
  res.send(Client)
})


app.post("/", async (req, res) => {
    const Client = new ClientUser({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email

    })

    await Client.save()
    res.send(Client)
})

app.delete("/:id", async(req, res) => {
  const Client = await ClientUser.findByIdAndDelete(req.params.id)
  return res.send(Client)
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})