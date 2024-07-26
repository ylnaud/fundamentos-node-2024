import express from "express"
const app = express(),
localhost = "http://localhost",
port = 7777;

// Servir archivos estaticos desde la carpeta "public"
app.use(express.static("public"))

app.get("/",(reg,res)=>{
    res.sendFile("index.html",{root:"public"})
})
app.listen(port,()=>{
    console.log(`${localhost}:${port}`)
})