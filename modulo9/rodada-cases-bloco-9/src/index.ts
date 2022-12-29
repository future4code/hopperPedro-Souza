import app from "./controller/app"
import { PetRouter } from "./controller/PetRouter"

app.use('/pet/', PetRouter)