import { Request, Response } from "express";
import {
  createSkill,
  getSkills,
  findSkill,
  findAndUpdateSKill,
} from "../../services/skill/skill.service";

export const createSkillHandler = async (req: Request, res: Response) => {
  try {
    const skill = await createSkill(req.body);
    return res.send(skill);
  } catch (err) {
    return res.status(409).send(err.message);
  }
};

export const getSkillHandler = async (req: Request, res: Response) => {
  try {
    const skills = await getSkills();
    return res.send(skills);
  } catch (err) {
    return res.status(409).send(err.message);
  }
};

export const findAndUpdateSKillHandler = async (
  req: Request,
  res: Response
) => {
  const skillId = req.params.skillId;
  const update = req.body;

  const skill = await findSkill({ skillId });

  if (!skill) return res.sendStatus(404);

  const updatedSkill = await findAndUpdateSKill({ skillId }, update, {
    new: true,
  });

  return res.send(updatedSkill);
};
