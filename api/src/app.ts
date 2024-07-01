import express from "express";
import http from "http";
import cors from "cors";
import helmet from "helmet";

const PORT = 3000

const app = express()

app.use(helmet())
app.use(cors({
  credentials: true,
}))

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server is running on %chttp://localhost:${PORT}/`, "color: red")
})

