const express = require("express")
const app = express();
const dotenv = require("dotenv")
const cors = require("cors")
const moment = require("moment")
const fs = require("fs")

dotenv.config();

app.use(cors())
app.use(express.json())
app.use((req,res,next) => {
  const logFormat = `TIME: ${moment().format("hh:mm DD/MM/YYYY")}`

  fs.appendFileSync(`${__dirname}/../.logs`, logFormat + "\n")
  console.log(logFormat);
  next()
})

const PORT = process.env.PORT

const { employeeRoutes, authRoutes, postRoutes } = require("./routes");

app.use("/employees", employeeRoutes)
app.use("/auths", authRoutes)
app.use("/post", postRoutes)

app.listen(PORT, () => {
  console.log("Listening in port", PORT)
})