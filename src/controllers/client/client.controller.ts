//@ts-nocheck
import {
  createClient,
  getClients,
  findClient,
  findAndUpdateSkillClient,
} from "../../services/client/client.service";
import { omit, get } from "lodash";
import { Request, Response } from "express";
import Client from "../../models/client.model";
import Session from "../../models/session.model";
import log from "../../logger";

export const createClientHandler = async (req: Request, res: Response) => {
  try {
    const client = await createClient(req.body);
    return res.send(omit(client.toJSON(), `password`));
  } catch (err) {
    return res.status(409).send(err.message);
  }
};

export const getClientsHandler = async (req: Request, res: Response) => {
  try {
    const clients = await getClients();
    return res.send(clients);
  } catch (err) {
    return res.status(409).send(err.message);
  }
};

export const getClientByIdHandler = async (req: Request, res: Response) => {
  const clientId = req.client.clientId;

  const client = await findClient({ clientId });

  if (!client) if (!client) return res.sendStatus(404);

  return res.send(client);
};

export const addSkillHandler = async (req: Request, res: Response) => {
  const clientId = req.params.clientId;
  const update = req.body;

  const client = await findClient({ clientId });

  if (!client) return res.sendStatus(404);

  const updatedSkillClient = await findAndUpdateSkillClient(
    { clientId },
    update,
    { new: true }
  );
  return res.send(updatedSkillClient);
};
