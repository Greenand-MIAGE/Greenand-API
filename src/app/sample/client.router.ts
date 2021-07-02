import { Router } from 'express';
import { validateRequest } from '../../middleware';
import { createClientSessionHandler } from '../../controllers/session.controller';
import { createClientSchema, createClientSessionSchema } from '../../schemas/client.schema';
import { createClientHandler, getClientsHandler, addSkillHandler } from '../../controllers/client/client.controller';

export const router: Router = Router();

router.post(`/client`, validateRequest(createClientSchema), createClientHandler);

router.get(`/clients`, getClientsHandler)

router.put(`/add-skill/:clientId/:skillId`, addSkillHandler)

router.post(`/login`, validateRequest(createClientSessionSchema),
    createClientSessionHandler);