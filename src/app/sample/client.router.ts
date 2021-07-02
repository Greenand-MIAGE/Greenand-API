import { Router } from "express";
import { validateRequest, requiresClient } from "../../middleware";
import {
  createClientSchema,
  createClientSessionSchema,
} from "../../schemas/client.schema";
import {
  createClientSessionHandler,
  invalidateClientSessionHandler,
  getUserSessionHandler,
} from "../../controllers/session/session.controller";

import {
  createClientHandler,
  getClientsHandler,
  addSkillHandler,
  getClientByIdHandler,
} from "../../controllers/client/client.controller";

export const router: Router = Router();

router.post(
  `/client`,
  validateRequest(createClientSchema),
  createClientHandler
);

router.get(`/clients`, getClientsHandler);

router.post(
  `/login`,
  validateRequest(createClientSessionSchema),
  createClientSessionHandler
);

router.get(`/login`, requiresClient, getUserSessionHandler);

router.delete(`/logout`, requiresClient, invalidateClientSessionHandler);

router.get(`/client/:clientId`, getClientByIdHandler);

router.put(`/add-skill/:clientId/:skillId`, addSkillHandler);
