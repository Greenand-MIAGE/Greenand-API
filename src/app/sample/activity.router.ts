import { Router } from "express";
import { createActivityHandler, reservationActivityHandler, getActivitiesHandler, getCreneauHandler } from "../../controllers/activity/activity.controller";
import { requiresClient, validateRequest } from '../../middleware';
import { createActivitySchema } from "../../schemas/activity.schema";

export const router: Router = Router();

router.post(`/activity/:landId`, [requiresClient, validateRequest(createActivitySchema)], createActivityHandler);

router.get(`/activities`, getActivitiesHandler);

router.put(`/reservation/:activityId`, requiresClient, reservationActivityHandler);

router.get(`/creneau`, getCreneauHandler);

