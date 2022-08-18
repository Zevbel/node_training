import { Router } from "express";
import { apiRoutes } from './api/api.routes'

export const routes = Router();

routes.use('/api', apiRoutes);
