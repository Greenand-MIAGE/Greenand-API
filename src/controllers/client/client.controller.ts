import { createClient, getClients, findClient, findAndUpdateSkillClient } from '../../services/client/client.service';
import { omit, get } from 'lodash';
import { Request, Response } from 'express';
import { findSkill } from '../../services/skill/skill.service';

export const createClientHandler = async (req: Request, res: Response) => {
    try{
        const client = await createClient(req.body);
        return res.send(omit(client.toJSON(), `password`));
    } catch (err) {
        return res.status(409).send(err.message);
    }
}

export const getClientsHandler = async (req: Request, res: Response) => {
    try {
        const clients = await getClients();
        return res.send(clients);
    } catch (err) {
        return res.status(409).send(err.message);
    }
}

// export async function addSkillHandler(req: Request, res: Response) {
//     const clientId = get(req, "client._id");
//     const update = req.body;

//     const addedSkill = await addSkill({ clientId }, update, { new: true });

//     return res.send(addedSkill);
// }

export async function addSkillHandler(req: Request, res: Response) {
    const clientId = get(req, "client._id");
    const skillId = get(req, "skill._id");
  
    const skill = await findSkill({ skillId });
    const client = await findClient({ clientId });
  
    if (!skill) {
      return res.sendStatus(404);
    }

    if (!client) {
      return res.sendStatus(404);
    }
  
    const updatedSkillClient = await findAndUpdateSkillClient({ clientId }, skill.toJSON, { new: true });
  
    return res.send(updatedSkillClient);
  }