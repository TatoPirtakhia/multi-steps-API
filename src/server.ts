import express from "express"
import bodyParser from "body-parser"
import dotenv from 'dotenv'
import cors from 'cors'
import multiRouter from "./routes/routes.js"
import connect from "./database/mongo.js"
import swaggerMiddlewares from "./middleware/swagger-middlewares.js"


const server = express()
dotenv.config()
connect()
server.use(bodyParser.json())

server.use(cors())

server.use('/api',multiRouter)
server.use("/", ...swaggerMiddlewares)

server.listen(process.env.PORT || 3001, () => console.log("Server is listening at http://localhost:3001"))