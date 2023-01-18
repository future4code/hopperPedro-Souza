import express from "express";
import { PetBusiness } from "../business/PetBusiness";
import { PetDatabase } from "../data/PetDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { LocalCurrentTime } from "../services/LocalCurrentTime";
import { Recibo } from "../services/Recibo";
import { PetController } from "./PetController";

export const PetRouter = express.Router()

const idGenerator = new IdGenerator()
const localCurrentTime = new LocalCurrentTime()
const recibo = new Recibo()

const petDatabase = new PetDatabase()
const petBusiness = new PetBusiness(petDatabase, idGenerator, localCurrentTime, recibo)
const petController = new PetController(petBusiness)

PetRouter.get('/index', (req, res) => petController.index)
PetRouter.get('/show', (req, res) => petController.show)
PetRouter.post('/create', (req, res) => petController.create)
PetRouter.put('/start_walk', (req, res) => petController.start_walk)
PetRouter.put('/finish_walk', (req, res) => petController.finish_walk)