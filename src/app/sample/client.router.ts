import { Router } from 'express';
import { validateRequest, requiresClient } from '../../middleware';
import { createClientSchema, createClientSessionSchema } from '../../schemas/client.schema';
import { createClientHandler, getClientsHandler } from '../../controllers/client.controller';
import { createClientSessionHandler, invalidateClientSessionHandler, getUserSessionHandler} from '../../controllers/session.controller';

export const router: Router = Router();

// register a client
router.post(`/client`, validateRequest(createClientSchema), createClientHandler);

// get all clients
router.get(`/clients`, getClientsHandler)

// Login 
router.post(`/login`,validateRequest(createClientSessionSchema),
    createClientSessionHandler);

// Get a user's session
router.get(`/login`,requiresClient, getUserSessionHandler);

// Logout
router.delete(`/logout`, requiresClient, invalidateClientSessionHandler);