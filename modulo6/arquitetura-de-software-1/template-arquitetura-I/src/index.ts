import { app } from "./app"
import { UserController } from "./controller/UserController"
// import { createTask } from './endpoints/createTask'

const instUserController = new UserController()

app.post('/createUser', instUserController.createUser)

app.get('/all', instUserController.getAll)

app.delete('/:id', instUserController.deleteUser)

// app.post('/task', createTask)


