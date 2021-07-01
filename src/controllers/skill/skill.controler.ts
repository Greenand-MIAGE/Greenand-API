import { omit } from 'lodash';
import { Request, Response } from 'express';
import { createSkill, getSkills } from '../../services/skill/skill.service';

export const createSkillHandler = async (req: Request, res: Response) => {
    try {
        const skill = await createSkill(req.body);
        return res.send(skill);

    } catch (err) {
        return res.status(409).send(err.message);
    }
}

export const getSkillHandler = async (req: Request, res: Response) => {
    try {
        const skills = await getSkills();
        return res.send(skills);
    } catch (err) {
        return res.status(409).send(err.message);
    }
}

