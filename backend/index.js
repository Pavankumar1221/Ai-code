require("dotenv").config({
    path:'.env'
})
const express = require('express')
const { ConnectDB } = require("./db.config")
const morgan = require("morgan")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 3000
ConnectDB()
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/v1",require("./router"))



app.listen(port, () => {
  console.log(`AiCode app listening on port ${port}`)
})