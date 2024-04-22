import { NextFunction, Request, Response, Router } from "express";
import createHttpError from "http-errors";
import machineService from "@pontalti/modules/v1/machines/machine-service";
const routes = Router();

routes.post('/', (req, res, next) => {
  machineService.createMachine(req.body)
    .then(result => {
      res.json(result)
    })
    .catch(e => {
      const httpError = createHttpError(e)
      next(httpError)
    })
})

routes.get('/', (req, res, next) => {
  machineService.getAllMachines(req.params)
})

routes.get('/:id', (req, res, next) => {
  const id = req.params.id;
  machineService.getMachineById(Number(id))
    .then(result => {
      res.json(result)
    })
    .catch(e => {
      const httpError = createHttpError(e)
      next(httpError)
    })
})

routes.patch('/:id', (req, res, next) => {
  machineService.updatePartialMachine(Number(req.params.id), req.body)
    .then(result => {
      res.json(result)
    })
    .catch(e => {
      const httpError = createHttpError(e)
      next(httpError)
    })
})

routes.delete('/:id', (req, res, next) => {
  machineService.deleteMachine(Number(req.params.id))
    .then(result => {
      res.json(result)
    })
    .catch(e => {
      const httpError = createHttpError(e)
      next(httpError)
    })
})

export default routes
