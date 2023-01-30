import express from 'express'
import cors from "cors"
import usersController from '../src/controller/users_controller.js'

const app = express()
app.use(cors())
app.use(express.json())

usersController(app)

export default app