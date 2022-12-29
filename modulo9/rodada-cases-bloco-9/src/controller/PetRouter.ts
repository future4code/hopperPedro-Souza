import express from "express";
import { PetController } from "./PetController";

export const PetRouter = express.Router()

const petController = new PetController()

PetRouter.get('/index', petController.index)
PetRouter.get('/show', petController.show)
PetRouter.post('/create', petController.create)
PetRouter.put('/start_walk', petController.start_walk)
PetRouter.put('/finish_walk', petController.finish_walk)