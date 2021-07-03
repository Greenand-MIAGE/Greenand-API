import { Router } from "express";
import { createActivityHandler } from "../../controllers/activity/activity.controller";
import { requiresClient, validateRequest } from '../../middleware';
import { createActivitySchema } from "../../schemas/activity.schema";

export const router: Router = Router();

router.post(`/activity/:landId`, [requiresClient, validateRequest(createActivitySchema)], createActivityHandler);