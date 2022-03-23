const express = require("express")
const app = express();
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config();

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT

const { employeeRoutes, authRoutes, postRoutes } = require("./routes");

app.use("/employees", employeeRoutes)
app.use("/auth", authRoutes)
app.use("/post", postRoutes)

app.listen(PORT, () => {
  console.log("Listening in port", PORT)
})