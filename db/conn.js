const mongoose = require("mongoose")

async function main(){
    try {
        await mongoose.connect("mongodb+srv://caionogueirabindella:desktopapp@cluster0.v3spf6b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main