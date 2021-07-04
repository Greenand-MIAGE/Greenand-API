import { Router } from "express";
import { createActivityHandler, reservationActivityHandler, addScheduleHandler } from "../../controllers/activity/activity.controller";
import { requiresClient, validateRequest } from '../../middleware';
import { createActivitySchema } from "../../schemas/activity.schema";

export const router: Router = Router();

router.post(`/activity/:landId`, [requiresClient, validateRequest(createActivitySchema)], createActivityHandler);

router.put(`/reservation/:activityId`, requiresClient, reservationActivityHandler);

router.put(`/creneau/:activityId`, requiresClient, addScheduleHandler);

