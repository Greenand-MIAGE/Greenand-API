import { Router } from 'express';
import { createLandHandler, getLandClientByIdHandler } from '../../controllers/land/land.controller';
import { requiresClient, validateRequest } from '../../middleware';
import { createLandSchema } from '../../schemas/land.schema';

export const router: Router = Router();

router.post(`/land`, [requiresClient, validateRequest(createLandSchema)], createLandHandler);

router.get(`/Land/:clientId`, getLandClientByIdHandler);