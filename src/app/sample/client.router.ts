import { Router } from 'express';
import { validateRequest } from '../../middleware';
import { createClientSchema } from '../../schemas/client.schema';
import { createClientHandler, getClientsHandler } from '../../controllers/client/client.controller';

export const router: Router = Router();

router.post(`/client`, validateRequest(createClientSchema), createClientHandler);

router.get(`/clients`, getClientsHandler)
