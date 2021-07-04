import { Router } from "express";
import { validateRequest, requiresClient } from "../../middleware";
import {
  createClientSchema,
  createClientSessionSchema,
} from "../../schemas/client.schema";
import {
  createClientSessionHandler,
  deleteClientSessionHandler,
  getClientSessionHandler,
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
  //validateRequest(createClientSessionSchema),
  createClientSessionHandler
);

router.get(`/login`, requiresClient, getClientSessionHandler);

router.delete(`/logout`, requiresClient, deleteClientSessionHandler);

router.get(`/client`, getClientByIdHandler);

router.put(`/add-skill/:clientId/:skillId`, addSkillHandler);
