import { addNewSteps } from "../controllers/constrollers.js"
import express from "express"

const multiRouter = express.Router()

multiRouter.post("/data",addNewSteps)

export default multiRouter