import { Router } from 'express';
import { createLandHandler } from '../../controllers/land/land.controller';
import { validateRequest } from '../../middleware';
import { createLandSchema } from '../../schemas/land.schema';

export const router: Router = Router();

router.post(`/land`, validateRequest(createLandSchema), createLandHandler);
