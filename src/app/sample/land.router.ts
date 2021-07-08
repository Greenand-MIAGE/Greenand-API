import { Router } from "express";
import {
  createLandHandler,
  getLandByIdHandler,
  getLandClientByIdHandler,
  getLandsHandler,
} from "../../controllers/land/land.controller";
import { requiresClient, validateRequest } from "../../middleware";
import { createLandSchema } from "../../schemas/land.schema";

export const router: Router = Router();

router.post(
  `/land`,
  [requiresClient, validateRequest(createLandSchema)],
  createLandHandler
);

router.get(`/lands-client`, getLandClientByIdHandler);

router.get(`/lands`, getLandsHandler);

router.get(`/land/:landId`, getLandByIdHandler);
