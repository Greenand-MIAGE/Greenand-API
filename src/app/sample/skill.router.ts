import { Router } from 'express';
import { validateRequest } from '../../middleware';
import { createSkillSchema } from '../../schemas/skill.schema';
import { createSkillHandler, getSkillHandler } from '../../controllers/skill/skill.controler';

export const router: Router = Router();

router.post(`/skill`, validateRequest(createSkillSchema), createSkillHandler);

router.get(`/skills`, getSkillHandler)